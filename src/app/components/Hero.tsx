'use client';

import { useState, useEffect, useRef } from 'react';
import { Apple, PlaySquare } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Predefined coin positions and animations
const COIN_CONFIGS = [
  { left: "54.4%", delay: "4.68s", duration: "9.34s" },
  { left: "38.0%", delay: "1.60s", duration: "5.70s" },
  { left: "97.7%", delay: "4.21s", duration: "5.51s" },
  { left: "84.6%", delay: "4.30s", duration: "9.32s" },
  { left: "74.4%", delay: "4.62s", duration: "9.86s" },
  { left: "88.9%", delay: "1.27s", duration: "6.04s" },
  { left: "22.4%", delay: "4.25s", duration: "6.70s" },
  { left: "54.0%", delay: "0.56s", duration: "8.44s" },
  { left: "77.5%", delay: "3.27s", duration: "8.61s" },
  { left: "74.8%", delay: "2.71s", duration: "9.43s" }
];

const images = [
  "/images/sup1.png",
  "/images/sup2.png",
  "/images/sup3.png",
  "/images/sup4.png",
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Content animation
    tl.from(headlineRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5")
    .from(buttonsRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    }, "-=0.4")
    .from(featuresRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    }, "-=0.4");

    // Phone animation
    gsap.from(phoneRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 1
      }
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-2rem)] w-full text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sup7.png"
          alt="SuperWin Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-emerald-950/50 to-emerald-950/80" />
      </div>

      {/* Floating Coins Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="coins-animation">
          {COIN_CONFIGS.map((config, i) => (
            <div
              key={i}
              className="coin absolute"
              style={{
                left: config.left,
                '--delay': config.delay,
                '--duration': config.duration
              } as React.CSSProperties}
            >
              <Image
                src="/images/coin.png"
                alt="Floating Coin"
                width={40}
                height={40}
                className="animate-spin-slow"
              />
            </div>
          ))}
        </div>
      </div>

      <section ref={sectionRef} className="relative py-16 section-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-emerald-50">
                SuperWin{" "}
                <span className="text-emerald-400">Play Safe</span>
              </h1>
              <p ref={descriptionRef} className="text-base sm:text-lg md:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                We are an exclusive Rewards Gaming App where you earn real money playing Super Win on your device and for FREE. Collect free coins every day and win coins daily to set a score to win real money every month.
              </p>
              <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#"
                  className="w-full sm:w-auto bg-emerald-600 text-white border-none hover:bg-emerald-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 transition-colors duration-300"
                >
                  <Apple className="h-6 w-6" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs text-emerald-100">Download on the</span>
                    <span>App Store</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto bg-emerald-600 text-white border-none hover:bg-emerald-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 transition-colors duration-300"
                >
                  <PlaySquare className="h-6 w-6" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs text-emerald-100">GET IT ON</span>
                    <span>Play Store</span>
                  </div>
                </a>
              </div>
              <div 
                ref={featuresRef}
                className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base text-emerald-200"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time Updates</span>
                </div>
              </div>
            </div>

            {/* Hero Image with Mobile Frame */}
            <div ref={phoneRef} className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-[160px] sm:w-[180px] md:w-[220px] lg:w-[260px] aspect-[9/19]">
                <div className="absolute inset-0 bg-gray-900 rounded-[1.5rem] shadow-xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[16px] bg-gray-900 rounded-b-[1rem] z-10">
                    <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-[30px] h-[2px] bg-gray-800 rounded-full"></div>
                  </div>
                  {/* Power Button */}
                  <div className="absolute right-[-2px] top-[80px] w-[2px] h-[32px] bg-gray-800 rounded-l-lg"></div>
                  {/* Volume Buttons */}
                  <div className="absolute left-[-2px] top-[80px] w-[2px] h-[20px] bg-gray-800 rounded-r-lg"></div>
                  <div className="absolute left-[-2px] top-[108px] w-[2px] h-[20px] bg-gray-800 rounded-r-lg"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 m-[8px] rounded-[1.3rem] overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={images[currentImage]}
                        alt="SuperWin App Screenshot"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[-2rem] flex justify-center items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      currentImage === idx
                        ? "bg-emerald-400"
                        : "bg-emerald-200/50 hover:bg-emerald-300/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
