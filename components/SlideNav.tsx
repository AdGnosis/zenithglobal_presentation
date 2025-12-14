
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SlideNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div style={{ position: "fixed", bottom: 10, right: 10 }}>
      <button onClick={onPrev}><ChevronLeft /></button>
      <button onClick={onNext}><ChevronRight /></button>
    </div>
  );
}
