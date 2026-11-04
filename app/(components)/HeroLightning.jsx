// Angular electric bolts rising from the bottom of the hero, with a travelling
// pulse + irregular flicker (CSS only, no JS). Decorative, pointer-events none.
const BOLTS = [
  { d: 'M200 420L215 360L190 320L230 270L205 220L250 170L240 120', b: 'M230 270L290 250L310 205' },
  { d: 'M520 420L500 370L535 330L515 285L560 240L545 190', b: 'M535 330L585 345L600 305' },
  { d: 'M760 420L780 365L750 325L790 280L770 230L815 185L800 140L840 100', b: 'M790 280L850 265L870 225' },
  { d: 'M1040 420L1060 370L1030 330L1075 290L1055 240L1095 195', b: 'M1075 290L1125 310L1140 270' },
  { d: 'M1290 420L1270 365L1305 325L1285 275L1330 235L1318 185', b: 'M1305 325L1360 300L1375 255' },
];

export default function HeroLightning() {
  return (
    <div className="cl-bolts" aria-hidden="true">
      <div className="cl-bolt-flash" />
      <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice">
        {BOLTS.map(({ d, b }, i) => (
          <g key={i} className="cl-bolt-g">
            {[d, b].map((p, k) => (
              <g key={k} className="cl-bolt">
                <path className="glow" d={p} pathLength="1" />
                <path className="core" d={p} pathLength="1" />
                <path className="flow" d={p} pathLength="1" style={{ animationDelay: `${i * 0.7 + k * 0.35}s` }} />
              </g>
            ))}
            <circle className="tip" cx={d.split('L').pop().split(/\s/)[0]} cy={d.split(/\s/).pop()} r="3" />
          </g>
        ))}
      </svg>
    </div>
  );
}
