export const WaveDivider = () => {
  return (
    <>
      <svg
        width="100%"
        viewBox="0 0 720 80"
        preserveAspectRatio="none"
        className="block"
      >
        {/* top */}
        <rect x="0" y="0" width="720" height="20" fill="#c97a62" />

        {/* ribbon — top edge mirrors bottom edge shifted up by 22px */}
        <path
          d="M-10,4 C80,-14 160,26 280,10 C400,-6 480,32 600,6 C660,-6 700,-2 730,0
             L730,22 C700,20 660,16 600,28 C480,54 400,14 280,30 C160,46 80,6 -10,26 Z"
          fill="#d8a94f"
        />

        {/* bottom */}
        <path
          d="M-10,26 C80,6 160,46 280,30 C400,14 480,54 600,28 C660,16 700,20 730,22
             L730,80 L-10,80 Z"
          fill="#e7d6c4"
        />
      </svg>
    </>
  );
};