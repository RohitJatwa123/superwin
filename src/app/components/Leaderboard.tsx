'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Crown, Star, Award, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const topPlayers = [
  { rank: 1, name: "Alex888", points: "2,450,000", icon: Crown },
  { rank: 2, name: "WinMaster", points: "1,890,000", icon: Star },
  { rank: 3, name: "LuckyPro", points: "1,670,000", icon: Trophy },
];

const rankerBenefits = [
  {
    icon: Crown,
    title: "Exclusive VIP Status",
    description: "Top rankers get instant VIP status with premium benefits and personalized support"
  },
  {
    icon: Trophy,
    title: "Special Tournaments",
    description: "Access to high-stakes tournaments with massive prize pools"
  },
  {
    icon: Award,
    title: "Bonus Rewards",
    description: "Earn additional bonuses and rewards based on your ranking"
  },
  {
    icon: Target,
    title: "Monthly Prizes",
    description: "Compete for special monthly prizes exclusive to top performers"
  }
];

export default function Leaderboard() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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
    tl.from(contentRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(listRef.current?.children || [], {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4")
    .from(benefitsRef.current?.children || [], {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");

    // Phone animation
    gsap.from(phoneRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 min-h-screen">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sup8.jpg"
          alt="SuperWin Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/80 to-emerald-800/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32">
          <Image
            src="/images/leaf-decoration.svg"
            alt="Leaf Decoration"
            width={128}
            height={128}
            className="opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 transform rotate-180">
          <Image
            src="/images/leaf-decoration.svg"
            alt="Leaf Decoration"
            width={128}
            height={128}
            className="opacity-30"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title with Decorative Frame */}
        <div className="relative mb-12 text-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-[60px]">
            <Image
              src="/images/title-frame.svg"
              alt="Title Frame"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-50 relative z-10">
            Top Players
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div ref={contentRef} className="text-center lg:text-left bg-emerald-900/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-800/30">
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-lg text-emerald-100">
                Join the elite ranks of SuperWin&apos;s most successful players. Our top rankers have won over <span className="text-emerald-400 font-semibold">₹50,000,000</span> in prizes this month!
              </p>
              <p className="text-base text-emerald-200">
                Top players like <span className="text-white font-medium">Alex888</span> and <span className="text-white font-medium">WinMaster</span> started just like you. Now they&apos;re earning massive rewards daily through tournaments and special events.
              </p>
              <div className="mt-2 flex flex-col sm:flex-row items-center gap-4 text-sm text-emerald-300">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-emerald-400" />
                  <span>Daily Prize Pool: ₹1,000,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span>Weekly Tournaments</span>
                </div>
              </div>
            </div>

            {/* Ranker Benefits */}
            <div className="text-lg font-semibold text-emerald-50 mb-4">Exclusive Benefits</div>
            <div ref={benefitsRef} className="grid sm:grid-cols-2 gap-4 mb-12">
              {rankerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-emerald-800/20 backdrop-blur-sm rounded-xl hover:bg-emerald-800/30 transition-all duration-300 border border-emerald-800/20"
                  >
                    <div className="flex items-center mb-3">
                      <Icon className="w-5 h-5 text-emerald-400 mr-2" />
                      <h3 className="text-lg font-semibold text-emerald-50">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-sm text-emerald-200">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Leaderboard List */}
            <div className="text-lg font-semibold text-emerald-50 mb-4">Current Top Rankings</div>
            <div ref={listRef} className="space-y-4">
              {topPlayers.map((player, index) => {
                const Icon = player.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-emerald-800/20 backdrop-blur-sm rounded-xl hover:bg-emerald-800/30 transition-all duration-300 border border-emerald-800/20"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-full mr-4 border border-emerald-500/20">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{player.name}</h3>
                      <p className="text-emerald-200">{player.points} points</p>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">#{player.rank}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Mobile Frame */}
          <div ref={phoneRef} className="flex justify-center lg:justify-end sticky top-8">
            <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/19]">
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] shadow-xl border border-emerald-800/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[24px] bg-gray-900 rounded-b-[1rem] z-10 border-b border-emerald-800/20">
                  <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[40px] h-[3px] bg-emerald-800/50 rounded-full"></div>
                </div>
                {/* Power Button */}
                <div className="absolute right-[-2px] top-[100px] w-[3px] h-[40px] bg-emerald-800/50 rounded-l-lg"></div>
                {/* Volume Buttons */}
                <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-emerald-800/50 rounded-r-lg"></div>
                <div className="absolute left-[-2px] top-[135px] w-[3px] h-[25px] bg-emerald-800/50 rounded-r-lg"></div>
                
                {/* Screen Content */}
                <div className="absolute top-0 left-0 right-0 bottom-0 m-[10px] rounded-[1.7rem] overflow-hidden border border-emerald-800/20">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/sup5.jpg"
                      alt="Leaderboard Screen"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}