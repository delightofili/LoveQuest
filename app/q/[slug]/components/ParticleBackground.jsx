"use client";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 70 }).map((_, i) => {
        // Prime multiplier math guarantees a natural distribution
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i * 13) % 5;
        const duration = 2 + ((i * 17) % 4);

        return (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-pink-300/70 animate-pulse"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
