# Generates ultra-light circuit art (no images, no filters): public/brand/circuit-{left,right}.svg
# usage: python3 scripts/gen-circuit-lite.py public/brand
import sys, math
OUT = sys.argv[1] if len(sys.argv) > 1 else 'public/brand'
SP = 5.5  # spacing between parallel traces

def offset(P, o):
    n = []
    for (x1, y1), (x2, y2) in zip(P, P[1:]):
        dx, dy = x2 - x1, y2 - y1; L = math.hypot(dx, dy); n.append((-dy / L, dx / L))
    pts = [(P[0][0] + o * n[0][0], P[0][1] + o * n[0][1])]
    for i in range(1, len(P) - 1):
        a, b = n[i - 1], n[i]; k = o / (1 + a[0] * b[0] + a[1] * b[1])
        pts.append((P[i][0] + k * (a[0] + b[0]), P[i][1] + k * (a[1] + b[1])))
    pts.append((P[-1][0] + o * n[-1][0], P[-1][1] + o * n[-1][1]))
    return pts

def trim(pts, t):
    (x1, y1), (x2, y2) = pts[-2], pts[-1]; L = math.hypot(x2 - x1, y2 - y1)
    if t <= 0 or L < t + 16: return pts
    r = (L - t) / L; return pts[:-1] + [(x1 + (x2 - x1) * r, y1 + (y2 - y1) * r)]

def d(pts): return 'M' + 'L'.join(f'{x:.0f} {y:.0f}' for x, y in pts)

# bundle = (points, n_lines, bright_index_list, end_node)
LEFT = [
  ([(-10,40),(50,40),(100,90),(100,130)], 5, [1, 3], True),
  ([(-10,150),(30,150),(120,240),(196,240)], 8, [1, 4, 7], True),
  ([(-10,330),(30,330),(110,410),(214,410)], 10, [2, 6, 9], True),
  ([(-10,560),(40,560),(110,630),(110,690),(170,750),(256,750)], 8, [3, 7], True),
  ([(-10,820),(30,820),(90,880),(190,880)], 7, [2, 5], True),
  ([(-10,960),(40,960),(110,1030)], 5, [1], False),
]
RIGHT = [
  ([(310,96),(282,96),(204,174),(150,174)], 8, [1, 5], True),
  ([(310,330),(272,330),(204,398),(204,468),(156,516),(100,516)], 9, [2, 6, 8], True),
  ([(310,640),(262,640),(184,718),(112,718)], 10, [2, 5, 9], True),
  ([(310,860),(272,860),(222,910),(222,968),(262,1008)], 6, [1, 4], True),
  ([(310,0),(262,0),(236,26),(236,70)], 4, [2], False),
]
SINGLES_L = [((-10,293),(166,293)), ((-10,325),(188,325)), ((-10,696),(136,696)), ((-10,764),(130,764))]
SINGLES_R = [((310,336),(190,336)), ((310,418),(120,418)), ((310,742),(150,742)), ((310,880),(110,880))]
CHIPS_L = [(134,178),(46,530),(58,852)]
CHIPS_R = [(236,232),(236,540)]

def build(bundles, singles, chips, seed):
    deep, blue, hi, glow, pulse, nodes = [], [], [], [], [], []
    for bi, (P, n, bright, node) in enumerate(bundles):
        for k in range(n):
            o = (k - (n - 1) / 2) * SP; pts = offset(P, o); pts = trim(pts, (k * 9) % 54); p = d(pts)
            if k in bright: hi.append(p); glow.append(p); pulse.append(p)
            elif k % 2: blue.append(p)
            else: deep.append(p)
            if node and k in bright: nodes.append(pts[-1])
    for a, b in singles:
        blue.append(d([a, b])); nodes.append(b)
    sq = ''.join(f'<rect x="{x+i*7}" y="{y+j*7}" width="3" height="3"/>' for x, y in chips for i in range(3) for j in range(3))
    s = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 1024" width="300" height="1024">',
         '<style>path{fill:none;stroke-linejoin:round;stroke-linecap:butt}'
         '.d{stroke:#0a3a8f;stroke-width:1;opacity:.7}.b{stroke:#1c6cf0;stroke-width:1;opacity:.75}'
         '.h{stroke:#5fd0ff;stroke-width:1.5}.o{opacity:.2}.g{stroke:#087cff;stroke-width:8;opacity:.24;stroke-linecap:round}'
         '.z{stroke:#fff;stroke-width:2;stroke-dasharray:5 95;stroke-linecap:round;animation:z 4.2s linear infinite}'
         'circle{fill:#bfeaff}.n{animation:n 3s ease-in-out infinite}rect{fill:#1c6cf0;opacity:.75}'
         '@keyframes z{from{stroke-dashoffset:5}to{stroke-dashoffset:-95}}@keyframes n{50%{opacity:.35}}'
         '@media(prefers-reduced-motion:reduce){.z,.n{animation:none}.z{display:none}}</style>']
    s.append('<g class="d">' + ''.join(f'<path d="{p}"/>' for p in deep) + '</g>')
    s.append('<g class="b">' + ''.join(f'<path d="{p}"/>' for p in blue) + '</g>')
    s.append('<g class="g">' + ''.join(f'<path d="{p}"/>' for p in glow) + '</g>')
    s.append('<g class="h">' + ''.join(f'<path d="{p}"/>' for p in hi) + '</g>')
    s.append('<g class="z">' + ''.join(f'<path pathLength="100" style="animation-delay:-{(i*0.83)%4.2:.1f}s" d="{p}"/>' for i, p in enumerate(pulse)) + '</g>')
    s.append('<g class="o">' + ''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="7"/>' for x, y in nodes) + '</g>')
    s.append('<g>' + ''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{2.6 if i%2 else 1.8}"' + (' class="n" style="animation-delay:-%.1fs"' % (i*0.7 % 3) if i % 2 == 0 else '') + '/>' for i, (x, y) in enumerate(nodes)) + '</g>')
    s.append('<g>' + sq + '</g></svg>')
    return ''.join(s)

open(f'{OUT}/circuit-left.svg', 'w').write(build(LEFT, SINGLES_L, CHIPS_L, 1))
open(f'{OUT}/circuit-right.svg', 'w').write(build(RIGHT, SINGLES_R, CHIPS_R, 2))
