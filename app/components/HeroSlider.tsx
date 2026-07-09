"use client";

import { useState, useEffect } from "react";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[180px] sm:h-[250px] lg:h-[300px] overflow-hidden">
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero Slide ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
    </section>
  );
}
