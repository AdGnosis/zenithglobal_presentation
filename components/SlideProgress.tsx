
export default function SlideProgress({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ position: "fixed", bottom: 10, left: 10, fontSize: 12 }}>
      Slide {current + 1} / {total}
    </div>
  );
}
