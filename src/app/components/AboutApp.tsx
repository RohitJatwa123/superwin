'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { Apple, PlaySquare } from 'lucide-react';

const featureImages = [
  "/images/sup12.png",
  "/images/sup11.png",
  "/images/sup13.png",
  "/images/sup14.png",
  "/images/sup9.jpg",
  "/images/sup10.jpg"
];

export default function AboutApp() {
  const isMobile = useIsMobile();
  const [currentFeatureImage, setCurrentFeatureImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureImage((prev) => (prev + 1) % featureImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featureMainDimensions = {
    width: isMobile ? "260px" : "320px",
    height: isMobile ? "480px" : "600px",
    roundedClass: isMobile ? "rounded-[1.5rem]" : "rounded-[3rem]",
    innerRoundedClass: isMobile ? "rounded-[1.3rem]" : "rounded-[2.5rem]"
  };

  const featureSecondaryDimensions = {
    width: isMobile ? "220px" : "280px",
    height: isMobile ? "420px" : "525px",
    roundedClass: isMobile ? "rounded-xl" : "rounded-[2.5rem]",
    innerRoundedClass: isMobile ? "rounded-lg" : "rounded-[2rem]"
  };

  return (
    <section className="relative py-16 min-h-screen bg-emerald-950">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sup7.png"
          alt="SuperWin Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-900/90 to-emerald-800/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-50 mb-4">
            About SuperWin App
          </h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto mb-8">
            Experience the thrill of gaming with our beautifully designed app. Win real money and collect rewards daily!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>

        {/* Phone Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="container mx-auto px-2 sm:px-4 mt-0 sm:mt-8 mb-0 sm:mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24">
              {/* Previous Image Frame - Hide on small screens */}
              <motion.div
                className="relative flex-col items-center hidden md:flex"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.8, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  className={`bg-gradient-to-b from-emerald-950/70 to-emerald-900/70 ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                  style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
                >
                  {/* Mobile Frame Design */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-emerald-950/70 to-emerald-900/70 rounded-b-xl z-10`}
                    style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                  ></div>
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bg-emerald-800 rounded-full z-10`}
                    style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                  ></div>
                  <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-emerald-950`}>
                    <div className={`absolute inset-0 border-[0.2px] border-emerald-800 ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeatureImage + "-prev"}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={featureImages[(currentFeatureImage - 1 + featureImages.length) % featureImages.length]}
                          alt="Previous Image"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Current Image Frame (Highlighted) */}
              <motion.div
                className="relative flex flex-col items-center z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeatureImage + "-main"}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-b from-emerald-950 to-emerald-900 ${featureMainDimensions.roundedClass} p-2 shadow-2xl flex flex-col items-center justify-center relative`}
                    style={{ width: featureMainDimensions.width, height: featureMainDimensions.height }}
                  >
                    {/* Mobile Frame Design */}
                    <div
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-emerald-950 to-emerald-900 rounded-b-[1.5rem] z-10`}
                      style={{ width: isMobile ? "120px" : "150px", height: isMobile ? "24px" : "30px" }}
                    ></div>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 bg-emerald-800 rounded-full z-10`}
                      style={{ top: isMobile ? "12px" : "15px", width: isMobile ? "50px" : "60px", height: isMobile ? "6px" : "8px" }}
                    ></div>
                    <div className={`w-full h-full ${featureMainDimensions.innerRoundedClass} overflow-hidden relative bg-emerald-950`}>
                      <div className={`absolute inset-0 border-[0.2px] border-emerald-800 ${featureMainDimensions.innerRoundedClass}`}></div>
                      <motion.div
                        key={currentFeatureImage + "-main-img"}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={featureImages[currentFeatureImage]}
                          alt="Current Image"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center items-center gap-2 mt-4">
                  {featureImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentFeatureImage(idx)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-200 ${
                        currentFeatureImage === idx ? "bg-emerald-400 border-emerald-400" : "bg-transparent border-emerald-400 hover:bg-emerald-400/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Next Image Frame - Hide on small screens */}
              <motion.div
                className="relative flex-col items-center hidden md:flex"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.8, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  className={`bg-gradient-to-b from-emerald-950/70 to-emerald-900/70 ${featureSecondaryDimensions.roundedClass} p-[6px] shadow-lg flex flex-col items-center justify-center relative`}
                  style={{ width: featureSecondaryDimensions.width, height: featureSecondaryDimensions.height }}
                >
                  {/* Mobile Frame Design */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-emerald-950/70 to-emerald-900/70 rounded-b-xl z-10`}
                    style={{ width: isMobile ? "100px" : "120px", height: isMobile ? "20px" : "25px" }}
                  ></div>
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bg-emerald-800 rounded-full z-10`}
                    style={{ top: isMobile ? "10px" : "12px", width: isMobile ? "40px" : "50px", height: isMobile ? "5px" : "6px" }}
                  ></div>
                  <div className={`w-full h-full ${featureSecondaryDimensions.innerRoundedClass} overflow-hidden relative bg-emerald-950`}>
                    <div className={`absolute inset-0 border-[0.2px] border-emerald-800 ${featureSecondaryDimensions.innerRoundedClass}`}></div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeatureImage + "-next"}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={featureImages[(currentFeatureImage + 1) % featureImages.length]}
                          alt="Next Image"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
} 