const { chromium } = require("playwright");

(async () => {
const browser = await chromium.launch({
  args: ["--force-color-profile=srgb"],
});
  // const context = await browser.newContext({
  //   viewport: { width: 1300, height: 810 },
  //   deviceScaleFactor: 4, // كثافة بكسل عالية جدًا (4x)
  // });

const context = await browser.newContext({
  viewport: {
    width: 412,
    height: 915,
  },
  deviceScaleFactor: 3.5,
  isMobile: true,
  hasTouch: true,
});

  const page = await context.newPage();

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  });

  // تأكد إن كل الخطوط اتحملت بالكامل
  await page.evaluate(() => document.fonts.ready);

  await page.waitForSelector("#home", { state: "visible" });

  // استنى أي صور داخل السكشن تتحمل بالكامل
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll("#home img"));
    await Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
      )
    );
  });

  // استنى الأنيميشن يستقر تمامًا
  await page.waitForTimeout(2500);

  const hero = page.locator("#home");

  // صورة واحدة فقط، بدون أي تصغير أو معالجة لاحقة = أعلى جودة ممكنة
  await hero.screenshot({
    path: "herosamsoung.png",
    animations: "disabled", // يجمد أي حركة وقت اللقطة
  });

  await browser.close();

  console.log("✅ تم إنشاء الصورة بأعلى جودة ممكنة: hero.png");
})();