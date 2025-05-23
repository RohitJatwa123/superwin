// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     title: 'Live Leaderboards',
//     description: 'Compete with players worldwide and track your ranking in real-time',
//     icon: '🏆'
//   },
//   {
//     title: 'Daily Winners',
//     description: 'New opportunities to win big prizes every single day',
//     icon: '💰'
//   },
//   {
//     title: 'Instant Withdrawals',
//     description: 'Get your winnings instantly with secure payment processing',
//     icon: '⚡'
//   },
//   {
//     title: 'Secure Gaming',
//     description: 'Play with confidence with our advanced security measures',
//     icon: '🔒'
//   }
// ];

// export default function Features() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Fade in title
//     gsap.from(titleRef.current, {
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top bottom-=100",
//         toggleActions: "play none none reverse"
//       },
//       y: 30,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     });

//     // Stagger cards animation
//     const cards = cardsRef.current?.children || [];
//     gsap.from(cards, {
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top bottom-=50",
//         toggleActions: "play none none reverse"
//       },
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.2,
//       ease: "power3.out"
//     });

//     // Parallax effect
//     gsap.to(sectionRef.current, {
//       backgroundPosition: "50% 30%",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true
//       }
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-12 sm:py-16 section-overlay">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <h2 
//           ref={titleRef}
//           className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-white"
//         >
//           Why Choose SuperWin?
//         </h2>
//         <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="feature-card bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-sm sm:text-base text-gray-200">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }