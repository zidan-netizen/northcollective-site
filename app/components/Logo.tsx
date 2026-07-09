export default function Logo({ className = "", width = 120 }: { className?: string; width?: number }) {
  const aspect = 380 / 110;
  const w = width;
  const h = w / aspect;
  return (
    <svg
      viewBox="0 0 380 110"
      width={w}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Star/Compass Design */}
      <g>
        {/* Outer circle */}
        <circle cx="50" cy="55" r="35" fill="none" stroke="#FFFFFF" strokeWidth="1.5"/>

        {/* North star point */}
        <polygon points="50,20 53,45 50,42 47,45" fill="#FFFFFF"/>

        {/* East star point */}
        <polygon points="80,55 55,58 58,55 55,52" fill="#FFFFFF"/>

        {/* South star point */}
        <polygon points="50,90 47,65 50,68 53,65" fill="#FFFFFF"/>

        {/* West star point */}
        <polygon points="20,55 45,52 42,55 45,58" fill="#FFFFFF"/>

        {/* Center circle */}
        <circle cx="50" cy="55" r="4" fill="#FFFFFF"/>
      </g>

      {/* NORTHCOLLECTIVE */}
      <text
        x="105"
        y="50"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontSize="32"
        fontWeight="900"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        NORTH
      </text>

      {/* TAGLINE */}
      <text
        x="105"
        y="80"
        fontFamily="'Arial', sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        ACTIVEWEAR
      </text>
    </svg>
  );
}
