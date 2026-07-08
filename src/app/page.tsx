"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CategoryCarousel from "./components/CategoryCarousel";
import HeroSlider from "./components/HeroSlider";

const topBarMessages = [
  "EVERYTHING ACTIVEWEAR",
  "FAST & RELIABLE SHIPPING",
  "NEW ARRIVALS IN STOCK",
  "SHOP NOW",
];

const marqueeItems = [
  "NORTHCOLLECTIVE",
  "EVERYTHING ACTIVEWEAR",
  "NEW ARRIVALS",
  "FULL SETS",
  "CLOTHING",
  "FOOTWEAR",
  "PREMIUM QUALITY",
  "FAST DELIVERY",
];

const categories = [
  { label: "New Arrivals", img: "/cat-newarrival.png" },
  { label: "Full Sets", img: "/cat-fullsets.png" },
  { label: "Clothing", img: "/cat-clothing.png" },
  { label: "Footwear", img: "/cat-footwear.png" },
];

const placeholderProducts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  label: "Coming Soon",
}));

const berghausPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  label: "Coming Soon",
}));

const footwearPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  label: "Coming Soon",
}));

const testimonials = [
  {
    name: "Verified Customer",
    text: "NorthCollective has the best activewear selection. Quality is premium and delivery was lightning fast. Already ordered again!",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "Finally found an activewear brand I can trust. Everything fits perfectly and feels amazing. Will be shopping here regularly.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "The full sets are incredible. Perfect for workouts. Shipping was prompt and packaging was excellent. 10/10 would recommend.",
    rating: 5,
  },
  {
    name: "Verified Customer",
    text: "Love the variety of styles and great customer service. NorthCollective is my go-to for activewear now.",
    rating: 5,
  },
];

export default function Home() {
  const [topBarIdx, setTopBarIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopBarIdx((prev) => (prev + 1) % topBarMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Rotating Top Bar */}
      <div className="bg-[#00D4AA] py-2.5 text-center overflow-hidden">
        <p className="text-black text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-opacity duration-500">
          {topBarMessages[topBarIdx]}
        </p>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logo.png" alt="NorthCollective" width={50} height={50} className="rounded-full" />
          </a>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Banner — Auto-swiping */}
      <HeroSlider />

      {/* Brand Marquee */}
      <section className="bg-[#0A0A0A] py-6 overflow-hidden border-y border-[#2a2a2a]">
        <div className="brand-marquee">
          <div className="brand-marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-16 sm:gap-20 px-10 flex-shrink-0">
                {[
                  { src: "/brands/nike.png", alt: "Brand 1", h: "h-8 sm:h-10" },
                  { src: "/brands/berghaus.png", alt: "Brand 2", h: "h-6 sm:h-8" },
                  { src: "/brands/asics.png", alt: "Brand 3", h: "h-6 sm:h-8" },
                  { src: "/brands/monterrain.png", alt: "Brand 4", h: "h-5 sm:h-7" },
                  { src: "/brands/underarmour.png", alt: "Brand 5", h: "h-8 sm:h-10" },
                ].map((brand, i) => (
                  <img key={`${setIdx}-${i}`} src={brand.src} alt={brand.alt} className={`${brand.h} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0`} style={{filter: 'brightness(0) invert(1)'}} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Coverflow Carousel */}
      <CategoryCarousel />

      {/* Shop All Products */}
      <section id="products" className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[#00D4AA] text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Collection</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Shop All Items</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {placeholderProducts.map((p) => (
              <a key={p.id} href="#" className="group block">
                <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3 rounded-lg flex items-center justify-center group-hover:border-[#00D4AA]/30 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#00D4AA]/40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                    </div>
                    <p className="text-gray-600 text-xs font-semibold tracking-wider uppercase">{p.label}</p>
                  </div>
                </div>
                <div className="h-2 w-20 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-32 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-16 bg-[#1a1a1a] rounded"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Carousel */}
      <section className="py-12 sm:py-16 bg-[#111] overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#00D4AA] mb-2">@northcollective</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Follow Us On Instagram</h2>
        </div>
        <div className="ig-marquee-wrap">
          <div className="ig-marquee-track">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 flex-shrink-0 px-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <a key={`${setIdx}-${i}`} href="#" className="w-[180px] h-[320px] sm:w-[220px] sm:h-[390px] flex-shrink-0 overflow-hidden rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:border-[#00D4AA]/30 transition-colors">
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto text-[#00D4AA]/30 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                      <p className="text-gray-600 text-[10px] tracking-wider uppercase">Coming Soon</p>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="#" className="text-[#00D4AA] text-sm font-bold hover:text-[#00E8BB] transition-colors">@northcollective</a>
        </div>
      </section>

      {/* Shop Category 1 */}
      <section className="relative py-16 sm:py-20 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">Featured Collection</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">NEW ARRIVALS</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#00D4AA] rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {berghausPlaceholders.map((p) => (
              <a key={p.id} href="#" className="group block">
                <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3 rounded-lg flex items-center justify-center group-hover:border-[#00D4AA]/30 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#00D4AA]/40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                    </div>
                    <p className="text-gray-600 text-xs font-semibold tracking-wider uppercase">{p.label}</p>
                  </div>
                </div>
                <div className="h-2 w-20 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-32 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-16 bg-[#1a1a1a] rounded"></div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-block border-2 border-[#00D4AA] text-[#00D4AA] text-xs font-bold tracking-wider uppercase px-10 py-3 hover:bg-[#00D4AA] hover:text-black transition-all duration-300 rounded-full">VIEW ALL NEW ARRIVALS</a>
          </div>
        </div>
      </section>

      {/* Shop Full Sets */}
      <section className="relative py-16 sm:py-20 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">Exclusive Collection</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">FULL SETS</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-[#00D4AA] rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {footwearPlaceholders.map((p) => (
              <a key={p.id} href="#" className="group block">
                <div className="relative aspect-[4/5] bg-[#111] border border-[#2a2a2a] overflow-hidden mb-3 rounded-lg flex items-center justify-center group-hover:border-[#00D4AA]/30 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#00D4AA]/40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                    </div>
                    <p className="text-gray-600 text-xs font-semibold tracking-wider uppercase">{p.label}</p>
                  </div>
                </div>
                <div className="h-2 w-20 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-32 bg-[#1a1a1a] rounded mb-1.5"></div>
                <div className="h-2 w-16 bg-[#1a1a1a] rounded"></div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-block border-2 border-[#00D4AA] text-[#00D4AA] text-xs font-bold tracking-wider uppercase px-10 py-3 hover:bg-[#00D4AA] hover:text-black transition-all duration-300 rounded-full">VIEW ALL FULL SETS</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-[#0A0A0A]">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, j) => (
              <svg key={j} className="w-6 h-6 text-[#00B67A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[#00B67A] text-sm font-bold mb-2">Rated Excellent on Trustpilot</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">CHECK OUT OUR LATEST REVIEWS</h2>
        </div>
        <div className="overflow-hidden">
          <div className="review-marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 flex-shrink-0 px-2">
                {testimonials.map((review, i) => (
                  <div key={`${setIdx}-${i}`} className="bg-[#f5f5f5] w-[300px] sm:w-[400px] flex-shrink-0 p-8 rounded-lg text-center">
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-[#00B67A]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{review.text}</p>
                    <p className="font-bold text-black text-sm">{review.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">Got Questions?</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white">FREQUENTLY ASKED</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How Long Is Delivery?",
                a: "FREE SHIPPING ON ALL ORDERS OVER $50. Standard Delivery (3-5 Days) - $3.99. Express Delivery (Next Day) - $9.99. Order by 2 PM for same day dispatch Monday to Friday only. International shipping available - contact us for rates.",
              },
              {
                q: "Do You Accept Returns?",
                a: "We are happy to offer refunds provided the item is returned in the same condition it was received, with all tags still attached. Items must be returned clean, unworn, and in a resellable condition within 14 days of the delivery date. Please contact us at support@northcollective.com with your order number and tracking. Return shipping costs are the responsibility of the customer.",
              },
              {
                q: "What Makes NorthCollective Different?",
                a: "We specialize in premium activewear with careful curation of every item. All pieces are authentic, quality-tested, and designed for performance. Our team is dedicated to helping you find the perfect fit for your lifestyle. Customer satisfaction is our priority.",
              },
              {
                q: "Can I Track My Order?",
                a: "Yes! Every order comes with a tracking number sent to your email upon shipment. You can track your package in real-time. If you have any questions about your order, reach out to us on Instagram @northcollective or email support@northcollective.com.",
              },
            ].map((item, i) => (
              <details key={i} className="group border border-[#2a2a2a] rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-[#111] transition-colors">
                  <span className="text-sm sm:text-base font-semibold text-white">{item.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] border-t border-[#2a2a2a]">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white">CONTACT US</h2>
          </div>
          <form
            action="mailto:support@northcollective.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-3.5 rounded-lg outline-none focus:border-white/40 transition-colors placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-3.5 rounded-lg outline-none focus:border-white/40 transition-colors placeholder-gray-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-3.5 rounded-lg outline-none focus:border-white/40 transition-colors placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-3.5 rounded-lg outline-none focus:border-white/40 transition-colors placeholder-gray-500 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black text-xs font-bold tracking-[0.2em] uppercase py-4 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="NorthCollective" width={40} height={40} className="rounded-full" />
              <span className="font-display text-sm font-bold tracking-wider uppercase text-white">
                NorthCollective
              </span>
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-[10px] tracking-wider">
              <a href="#products" className="hover:text-white transition-colors">Shop</a>
              <a href="#faq" className="hover:text-white transition-colors">Delivery Policy</a>
              <a href="#faq" className="hover:text-white transition-colors">Returns Policy</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <span>&copy; 2026 NorthCollective</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
