export const Footer = () => {
  return (
    <>
      <svg
        width="100%"
        viewBox="0 0 720 120"
        preserveAspectRatio="none"
        className="block"
      >
        {/* Top */}
        <rect x="0" y="0" width="720" height="120" fill="#7a4f7d" />

        {/* ribbon */}
        <path
          d="M-10,52 C80,30 160,75 280,58 C400,42 480,80 600,55 C660,43 700,48 730,50 L730,78 C700,76 660,71 600,83 C480,108 400,70 280,86 C160,103 80,58 -10,80 Z"
          fill="#d8a94f"
        />

        {/* bottom */}
        <path
          d="M-10,72 C80,52 160,95 280,78 C400,62 480,100 600,75 C660,63 700,68 730,70 L730,120 L-10,120 Z"
          fill="#e7d6c4"
        />
      </svg>
    </>
  );
};