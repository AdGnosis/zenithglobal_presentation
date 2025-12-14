
"use client";

import { useState, useEffect } from "react";
import SlideNav from "./SlideNav";
import SlideProgress from "./SlideProgress";

type ExpandableSections = {
  playbooks?: boolean;
  regions?: boolean;
};

export default function ZenithPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState<ExpandableSections>({});

  const toggle = (key: keyof ExpandableSections) =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  const slides = [
    () => (
      <div>
        <h1>Sales-Enabled Market Engagement for Zenith</h1>
        <p>Content + MarketingOps + Retention Systems</p>
      </div>
    ),
    () => (
      <div>
        <h2>Operating Philosophy</h2>
        <p>Content is Zenith’s financial intelligence distribution layer.</p>
      </div>
    ),
    () => (
      <div>
        <h2>Monthly CFO Strategy Playbooks</h2>
        <button onClick={() => toggle("playbooks")}>Toggle Details</button>
        {expanded.playbooks && <p>Board-level insights aligned to month-end cycles.</p>}
      </div>
    ),
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrentSlide(s => Math.min(s + 1, totalSlides - 1));
      if (e.key === "ArrowLeft") setCurrentSlide(s => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [totalSlides]);

  return (
    <div style={{ padding: 40 }}>
      {slides[currentSlide]()}
      <SlideNav
        onPrev={() => setCurrentSlide(s => Math.max(s - 1, 0))}
        onNext={() => setCurrentSlide(s => Math.min(s + 1, totalSlides - 1))}
      />
      <SlideProgress current={currentSlide} total={totalSlides} />
    </div>
  );
}
