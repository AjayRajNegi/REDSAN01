"use client";

import { Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  quote: string;
  tags: string[];
  meta: string[];
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "VP of Engineering at TechFlow",
    initials: "SM",
    gradient: "linear-gradient(135deg,#5e6ad2,#8b5cf6)",
    quote:
      "“This platform has completely transformed how our team collaborates. The AI-powered analytics provide insights we never had before, and the performance improvements are remarkable.”",
    tags: ["FEATURED", "Enterprise", "Verified"],
    meta: ["200+ team", "2 yrs customer"],
    color: "text-indigo-400",
  },
  {
    name: "Marcus Chen",
    role: "Product Manager at DataSync",
    initials: "MC",
    gradient: "linear-gradient(135deg,#10b981,#059669)",
    quote:
      "“The real-time collaboration features are game-changing. Our remote team feels more connected than ever, and the platform’s reliability is outstanding.”",
    tags: ["Startup", "Mobile"],
    meta: ["Helpful", "Verified"],
    color: "text-emerald-400",
  },
  {
    name: "Priya Desai",
    role: "Founder at BrightIdeas",
    initials: "PD",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    quote:
      "“Customer-centric design, lightning-fast load times, and an onboarding experience that feels downright magical. Couldn’t ask for more.”",
    tags: ["Growth", "SMB"],
    meta: ["5M ARR", "1 yr customer"],
    color: "text-orange-400",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const stackRef = useRef<HTMLDivElement>(null);

  // ✅ Memoize to avoid redefining on every render
  const applyState = useCallback(() => {
    if (!stackRef.current) return;
    const cards = Array.from(stackRef.current.children) as HTMLElement[];

    cards.forEach((card, i) => {
      const offset = i - active;
      const z = 3 - Math.abs(offset);
      const scale = 1 - Math.abs(offset) * 0.05;
      const yOff = offset * 32;
      const o = offset === 0 ? 1 : 0.6;

      card.style.transform = `translateY(${yOff}px) scale(${scale})`;
      card.style.opacity = o.toString();
      card.style.zIndex = z.toString();
      card.style.pointerEvents = offset === 0 ? "auto" : "none";
    });
  }, [active]); // ✅ include `active` in the dependency

  const handleSwipe = useCallback(
    (i: number) => setActive((i + testimonials.length) % testimonials.length),
    [],
  );

  const addSwipeEvents = useCallback(
    (card: HTMLElement, index: number) => {
      let startX: number | null = null;

      const onStart = (e: MouseEvent | TouchEvent) => {
        if (index !== active) return;
        startX = "touches" in e ? e.touches[0].clientX : e.clientX;

        const move = (e: MouseEvent | TouchEvent) => {
          if (startX === null) return;
          const x = "touches" in e ? e.touches[0].clientX : e.clientX;
          const diff = x - startX;
          card.style.transform += ` translateX(${diff}px)`;
        };

        const end = (e: MouseEvent | TouchEvent) => {
          const x =
            "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
          const diff = x - (startX ?? 0);
          startX = null;

          if (Math.abs(diff) > 80) {
            diff > 0 ? handleSwipe(active - 1) : handleSwipe(active + 1);
          } else {
            applyState();
          }

          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", end);
          document.removeEventListener("touchmove", move);
          document.removeEventListener("touchend", end);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", end);
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", end);
      };

      card.addEventListener("mousedown", onStart);
      card.addEventListener("touchstart", onStart, { passive: true });
    },
    [active, applyState, handleSwipe], // ✅ full dependency list
  );

  useEffect(() => {
    applyState(); // this gets called when `active` changes
  }, [applyState]);

  useEffect(() => {
    if (!stackRef.current) return;
    const cards = Array.from(stackRef.current.children) as HTMLElement[];
    cards.forEach((card, i) => addSwipeEvents(card, i));
  }, [addSwipeEvents]);

  return (
    <section className="mx-auto mt-40 max-w-6xl px-6">
      <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl">
        Loved by teams worldwide
      </h2>

      <div
        id="testimonial-stack"
        ref={stackRef}
        className="relative mx-auto"
        style={{ width: "min(100%, 37.5rem)", height: "28rem" }}
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-md transition-all duration-500"
            aria-label={`Testimonial from ${t.name}`}
          >
            <div>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-xl text-white"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: t.gradient,
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{t.name}</h3>
                    <p className="mt-1 text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <Quote className={`h-6 w-6 ${t.color}`} />
              </div>
              <p className="text-lg leading-relaxed text-gray-200">{t.quote}</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex gap-2">
                {/* {t.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`rounded-md px-2 py-1 text-xs ${
                      tag === "FEATURED"
                        ? "border border-indigo-400/30 bg-indigo-500/20 text-indigo-400"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))} */}
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                {t.meta.map((m, idx) => (
                  <span key={idx}>{m}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-10 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
              i === active ? "scale-110 bg-indigo-400" : "bg-gray-600/80"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => handleSwipe(i)}
          />
        ))}
      </div>
      <p className="mt-6 select-none text-center text-sm text-gray-500">
        (drag card or tap dots to navigate)
      </p>
    </section>
  );
}
