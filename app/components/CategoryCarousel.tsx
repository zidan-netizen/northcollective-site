'use client';

import { useEffect, useRef } from 'react';

const baseCategories = [
  { name: 'Category 1', image: '/cat-trisets.png', href: '#products' },
  { name: 'Category 2', image: '/cat-tracksuits.png', href: '#products' },
  { name: 'Category 3', image: '/cat-footwear.png', href: '#products' },
  { name: 'Category 4', image: '/cat-newin.png', href: '#products' },
  { name: 'Category 5', image: '/cat-jackets.png', href: '#products' },
];

const categories = [...baseCategories, ...baseCategories, ...baseCategories];

export default function CategoryCarousel() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: any = null;

    async function init() {
      const { Swiper } = await import('swiper');
      const { EffectCoverflow } = await import('swiper/modules');
      await import('swiper/css');
      await import('swiper/css/effect-coverflow');

      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [EffectCoverflow],
        effect: 'coverflow',
        centeredSlides: true,
        loop: false,
        speed: 600,
        slidesPerView: 2,
        initialSlide: 6,
        grabCursor: true,
        coverflowEffect: {
          rotate: 16,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        breakpoints: {
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
      });
    }

    init();
    return () => { if (swiperInstance) swiperInstance.destroy(); };
  }, []);

  return (
    <section style={{ padding: '27px 0', overflow: 'hidden' }}>
      <div ref={swiperRef} className="swiper" style={{ overflow: 'visible', padding: '10px 0' }}>
        <div className="swiper-wrapper">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="swiper-slide"
              style={{
                width: '320px',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 10px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '0 12px 24px',
                backgroundColor: '#111',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)', zIndex: 1 }} />
              <h3 style={{
                zIndex: 2, fontSize: '18px', fontWeight: 500, color: '#fff',
                textAlign: 'center', lineHeight: 1.4, margin: 0, position: 'relative',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                {cat.name}
              </h3>
              <a href={cat.href} style={{
                zIndex: 2, position: 'relative', marginTop: '12px', fontSize: '11px',
                fontWeight: 400, color: '#fff', textDecoration: 'none', padding: '6px 16px',
                border: '1px solid #fff', borderRadius: 0, textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                SHOP NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
