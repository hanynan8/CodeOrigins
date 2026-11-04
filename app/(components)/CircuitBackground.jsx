// Lightweight SVG circuit-board traces framing the left & right edges.
const sq = (x, y) =>
  [0, 1, 2].flatMap((i) => [0, 1, 2].map((j) => (
    <rect key={`${x}${y}${i}${j}`} className="sq" x={x + i * 7} y={y + j * 7} width="3" height="3" opacity={(i + j) % 2 ? 0.35 : 0.8} />
  )));

const Circuit = ({ className }) => (
  <svg className={className} viewBox="0 0 400 900" preserveAspectRatio="xMinYMid slice" aria-hidden="true">
    {/* deep background traces */}
    <path className="t t3" d="M0 112H78L118 152H198L228 182V292M0 252H48L98 302H158V412L198 452H268M0 512H68L108 552V632L148 672H238M0 692H38L78 732H128L158 762V852" />
    <path className="t t3" d="M0 132H70L110 172H190M0 272H40L90 322H150M0 532H60L100 572M20 0V90L50 120V200M0 380H260L300 420H360" />
    {/* bright cyan primaries */}
    <path className="t t1" d="M0 120H70L110 160H190L220 190V300" />
    <path className="t t1" d="M0 260H40L90 310H150V420L190 460H260" />
    <path className="t t1" d="M0 520H60L100 560V640L140 680H230" />
    <path className="t t1" d="M0 700H30L70 740H120L150 770V860" />
    {/* electric blue secondaries */}
    <path className="t t2" d="M0 60H50L80 90H140M0 200H90L120 230H170M0 380H70L110 420V500M0 600H45L85 640H170L200 670M30 0V80L60 110V180M0 820H80L110 850H210" />
    <path className="t t2" d="M220 300H300L330 330M260 460H320L350 430V380M230 680H300L330 650M150 860H240M190 160H250L280 130V60" />
    {/* nodes */}
    {[[220,300],[260,460],[230,680],[150,860],[140,60],[170,230],[210,820],[200,670],[250,160],[280,60],[330,330],[350,380],[300,680],[110,420]].map(([x, y], i) => (
      <circle key={i} className="n" cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.6} />
    ))}
    {[[60,120],[40,260],[70,740],[25,520],[75,420]].map(([x, y], i) => (
      <circle key={`d${i}`} className="n" cx={x} cy={y} r="1.8" />
    ))}
    {/* component dot matrices */}
    {sq(150, 236)}{sq(88, 566)}{sq(260, 560)}{sq(300, 120)}{sq(60, 800)}
  </svg>
);

export default function CircuitBackground() {
  return (
    <div className="cl-circuits" aria-hidden="true">
      <Circuit className="cl-left" />
      <Circuit className="cl-right" />
    </div>
  );
}
