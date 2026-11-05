// Full-page screenshots of every project website -> public/full/<name>.webp
//
// The page is captured in slices: the script scrolls down one screen at a time, WAITS there so
// scroll-triggered animations / lazy images can appear, takes a screenshot of the screen, and then
// stitches all slices into one tall image. (A single "full page" shot misses elements that only
// show while they are on screen, or that hide again when they leave the screen.)
//
// Usage (from the project root):
//   npx playwright install chromium     # first time only
//   node scripts/fullpage-shots.mjs                    # all projects
//   node scripts/fullpage-shots.mjs dada rumfoords     # only links containing these words
//
// Options (env vars):
//   WIDTH=1440  HEIGHT=900  MAX_HEIGHT=6000  QUALITY=82
//   DELAY=1500   ms to wait at every screen so animations can finish (raise it if parts are still empty)
//
// Output: public/full/<host>.webp plus public/full/manifest.json  (link -> image path)

import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const COMP = path.join(ROOT, 'app/(components)/(realComponents)');
const OUT = path.join(ROOT, 'public/full');

const WIDTH = Number(process.env.WIDTH || 1440);
const HEIGHT = Number(process.env.HEIGHT || 900); // height of one screen / slice
const MAX_HEIGHT = Number(process.env.MAX_HEIGHT || 6000); // taller pages are cropped here
const QUALITY = Number(process.env.QUALITY || 82);
const DELAY = Number(process.env.DELAY || 1500);
const ARGS = process.argv.slice(2);
const SKIP = ARGS.filter((a) => a.startsWith('--skip='))
  .flatMap((a) => a.slice(7).toLowerCase().split(','))
  .filter(Boolean); // --skip=a,b,c : leave out links containing these words
const LIST_ONLY = ARGS.includes('--list'); // --list : only print which links would be shot
const FILTERS = ARGS.filter((a) => !a.startsWith('--')).map((s) => s.toLowerCase());

// Collect every `link: '...'` from the project files
const SOURCES = [
  'Projectcard.jsx',
  'tourismProjects.js',
  'educationProjects.js',
  'storeProjects.js',
  'restaurantProjects.js',
];
const links = new Set();
for (const file of SOURCES) {
  const text = fs.readFileSync(path.join(COMP, file), 'utf8');
  for (const m of text.matchAll(/^\s*link:\s*['"`](https?:\/\/[^'"`]+)['"`]/gm)) {
    links.add(m[1]);
  }
}

const slug = (url) =>
  new URL(url).host.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();

/* ── stitching: place the slices on one canvas, then crop to MAX_HEIGHT ── */
export async function stitch(slices, width, maxHeight) {
  const last = slices[slices.length - 1];
  const canvasHeight = last.top + last.height;
  const canvas = await sharp({
    create: { width, height: canvasHeight, channels: 3, background: '#ffffff' },
  })
    .composite(slices.map((s) => ({ input: s.buf, top: s.top, left: 0 })))
    .png()
    .toBuffer();
  const finalHeight = Math.min(canvasHeight, maxHeight);
  return { buf: await sharp(canvas).extract({ left: 0, top: 0, width, height: finalHeight }).toBuffer(), height: finalHeight, fullHeight: canvasHeight };
}

/* ── page helpers ── */
// Some sites scroll inside a container (the window itself never moves). Find that container and
// mark it, so the three helpers below scroll/measure it instead of the window.
const markScroller = (page) =>
  page.evaluate(() => {
    document.querySelectorAll('[data-shot-scroller]').forEach((e) => e.removeAttribute('data-shot-scroller'));
    window.scrollTo({ top: 100, behavior: 'instant' });
    const windowScrolls = window.scrollY > 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (windowScrolls) return false;
    let best = null;
    let bestExtra = 50;
    for (const el of document.querySelectorAll('body, body *')) {
      const oy = getComputedStyle(el).overflowY;
      if (oy !== 'auto' && oy !== 'scroll' && oy !== 'overlay') continue;
      const extra = el.scrollHeight - el.clientHeight;
      if (extra > bestExtra && el.clientHeight >= window.innerHeight * 0.9) {
        best = el;
        bestExtra = extra;
      }
    }
    if (best) best.setAttribute('data-shot-scroller', '1');
    return !!best;
  });

const pageHeight = (page) =>
  page.evaluate(() => {
    const el = document.querySelector('[data-shot-scroller]');
    return el ? el.scrollHeight : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  });

const scrollToY = (page, y) =>
  page.evaluate((t) => {
    const el = document.querySelector('[data-shot-scroller]');
    if (el) el.scrollTo({ top: t, behavior: 'instant' });
    else window.scrollTo({ top: t, behavior: 'instant' });
  }, y);

const currentY = (page) =>
  page.evaluate(() => {
    const el = document.querySelector('[data-shot-scroller]');
    return Math.round(el ? el.scrollTop : window.scrollY);
  });

// wait (max 3s) until the images that are on the current screen have finished loading
const settleImages = (page) =>
  page
    .evaluate(async () => {
      const vh = window.innerHeight;
      const visible = [...document.images].filter((img) => {
        const r = img.getBoundingClientRect();
        return r.bottom > 0 && r.top < vh && !img.complete;
      });
      await Promise.race([
        Promise.all(visible.map((img) => new Promise((res) => { img.onload = res; img.onerror = res; }))),
        new Promise((res) => setTimeout(res, 3000)),
      ]);
    })
    .catch(() => {});

// after the first slice, hide small fixed/sticky bars (navbar, chat button, cookie banner)
// so they are not repeated on every slice
const hideFloating = (page) =>
  page.evaluate(() => {
    for (const el of document.querySelectorAll('body *')) {
      const pos = getComputedStyle(el).position;
      if ((pos === 'fixed' || pos === 'sticky') && el.getBoundingClientRect().height <= window.innerHeight * 0.4) {
        el.style.setProperty('visibility', 'hidden', 'important');
      }
    }
  });

async function shootSlices(page) {
  const slices = [];
  let y = 0;
  let prevTop = -1;

  const inContainer = await markScroller(page);
  if (inContainer) console.log('  (this site scrolls inside a container, using it)');

  for (let i = 0; i < 80; i++) {
    const total = await pageHeight(page);
    const maxY = Math.max(0, total - HEIGHT);
    await scrollToY(page, Math.min(y, maxY));
    await page.mouse.move(WIDTH / 2, HEIGHT / 2 + (i % 2) * 40); // some sites react to mouse movement
    await page.waitForTimeout(DELAY);
    await settleImages(page);

    const top = await currentY(page);
    if (top <= prevTop) break; // scrolling is stuck: stop
    const buf = await page.screenshot(); // one screen
    slices.push({ top, buf, height: HEIGHT });
    if (i === 0) await hideFloating(page);
    prevTop = top;

    const newTotal = await pageHeight(page); // lazy content may have made the page longer
    if (top + HEIGHT >= newTotal || top + HEIGHT >= MAX_HEIGHT) break;
    y = top + HEIGHT;
  }
  return slices;
}

/* ── main ── */
async function main() {
  const targets = [...links].filter(
    (l) =>
      (!FILTERS.length || FILTERS.some((f) => l.toLowerCase().includes(f))) &&
      !SKIP.some((s) => l.toLowerCase().includes(s)),
  );

  if (LIST_ONLY) {
    console.log(`${targets.length} of ${links.size} links would be shot:\n` + targets.map((t) => '  ' + t).join('\n'));
    return;
  }

  fs.mkdirSync(OUT, { recursive: true });
  const manifestPath = path.join(OUT, 'manifest.json');
  const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};

  console.log(`Found ${links.size} links, shooting ${targets.length}. (waiting ${DELAY}ms per screen)`);

  const browser = await chromium.launch({ args: ['--force-color-profile=srgb'] });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true, // a few sites have a broken SSL certificate (e.g. umkhater.com)
  });

  let ok = 0;
  const failed = [];

  for (const link of targets) {
    const name = slug(link);
    const page = await context.newPage();
    try {
      console.log(`→ ${link}`);
      await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(1500); // intro / loader animations

      const slices = await shootSlices(page);
      if (!slices.length) throw new Error('no screenshots were taken');
      const { buf, height, fullHeight } = await stitch(slices, WIDTH, MAX_HEIGHT);

      await sharp(buf).webp({ quality: QUALITY }).toFile(path.join(OUT, `${name}.webp`));

      manifest[link] = `/full/${name}.webp`;
      ok++;
      const note = slices.length === 1 ? '  ⚠ only one screen: the page did not scroll' : '';
      console.log(`  ✓ ${name}.webp  (${WIDTH}×${height}, ${slices.length} screens${fullHeight > MAX_HEIGHT ? `, cropped from ${fullHeight}` : ''})${note}`);
    } catch (err) {
      failed.push(link);
      console.log(`  ✗ ${err.message.split('\n')[0]}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\nDone: ${ok} ok, ${failed.length} failed. Manifest: public/full/manifest.json`);
  if (failed.length) console.log('Failed:\n' + failed.map((f) => '  ' + f).join('\n'));
}

// run only when executed directly (so `stitch` can be imported for testing)
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}` || process.argv[1]?.endsWith('fullpage-shots.mjs')) {
  await main();
}
