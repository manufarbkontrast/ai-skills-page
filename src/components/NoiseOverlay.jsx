export default function NoiseOverlay() {
  return (
    <>
      <div style={styles.overlay} />
      <style>{css}</style>
    </>
  );
}

const css = `
  @keyframes noise-shift {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-2%, -2%); }
    20% { transform: translate(1%, 3%); }
    30% { transform: translate(-3%, 1%); }
    40% { transform: translate(3%, -1%); }
    50% { transform: translate(-1%, 2%); }
    60% { transform: translate(2%, -3%); }
    70% { transform: translate(-2%, 1%); }
    80% { transform: translate(1%, -2%); }
    90% { transform: translate(-1%, 3%); }
    100% { transform: translate(0, 0); }
  }
`;

const styles = {
  overlay: {
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0.025,
    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    animation: 'noise-shift 0.5s steps(10) infinite',
  },
};
