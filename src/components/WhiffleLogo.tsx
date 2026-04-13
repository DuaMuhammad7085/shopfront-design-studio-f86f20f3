const WhiffleLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Chef hat on the W */}
    <g transform="translate(8, -2)">
      <ellipse cx="18" cy="12" rx="12" ry="8" fill="currentColor" opacity="0.9" />
      <rect x="10" y="12" width="16" height="8" rx="2" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="8" r="3" fill="currentColor" />
      <circle cx="18" cy="5" r="3.5" fill="currentColor" />
      <circle cx="24" cy="8" r="3" fill="currentColor" />
    </g>
    {/* Cursive "Whiffle" text */}
    <text
      x="6"
      y="48"
      fontFamily="'Poppins', 'Georgia', cursive"
      fontSize="36"
      fontWeight="700"
      fontStyle="italic"
      fill="currentColor"
      letterSpacing="-0.5"
    >
      Whiffle
    </text>
  </svg>
);

export default WhiffleLogo;
