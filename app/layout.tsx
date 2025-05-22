"use client";

import Dialogbox from "@/components/Dialogbox";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // adjust based on your preloader animation duration
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for preloader container
  const preloaderVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for the brand text container
  const brandContainerVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for individual brand elements
  const brandTextVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the "Yum" highlight
  const yumVariants = {
    initial: { scale: 0, rotate: -10 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  // Pulsing animation for the entire brand
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.2
      }
    }
  };

  // Loading dots animation
  const dotsVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.2
      }
    }
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 0, -5],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Main layout entrance animation
  const layoutVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // Floating button animation
  const floatingButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isLoading ? 'overflow-hidden' : 'overflow-auto'} scrollbar-hidden`}
        style={{ overflowX: 'hidden', overflowY: isLoading ? 'hidden' : 'auto' }}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            // ✅ Animated Preloader
            <motion.div 
              key="preloader"
              className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden"
              variants={preloaderVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ overflow: 'hidden' }}
            >
              <motion.div 
                className="text-white text-xl font-bold"
                variants={brandContainerVariants}
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                >
                  <motion.span 
                    className="bg-white text-black px-4 py-2 rounded-full inline-block"
                    variants={brandTextVariants}
                  >
                    da
                    <motion.span 
                      className="text-purple-600 font-bold"
                      variants={yumVariants}
                    >
                      Yum
                    </motion.span>
                    meals
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Loading dots */}
              <motion.div 
                className="flex space-x-1 mt-8"
                variants={dotsVariants}
                initial="initial"
                animate="animate"
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-white rounded-full"
                    variants={dotVariants}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // ✅ Animated Main layout after preloading
            <motion.div 
              key="main-layout"
              className="flex flex-col min-h-screen relative"
              variants={layoutVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Navbar />
              </motion.div>
              
              <motion.main 
                className="flex-1 pt-[5vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {children}
              </motion.main>

              {/* Animated Floating Button */}
              <motion.div 
                className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-60"
                variants={floatingButtonVariants}
                initial="initial"
                animate="animate"
              >
                <AnimatePresence mode="wait">
                  {openDialog ? (
                    <motion.button
                      key="close-button"
                      onClick={() => setOpenDialog(false)}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-200 transition z-70"
                      aria-label="Close dialog"
                      variants={floatingButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-black text-2xl leading-none select-none">&times;</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      key="open-button"
                      onClick={() => setOpenDialog(true)}
                      className="px-4 py-1 sm:px-6 sm:py-2 text-white rounded-full border-2 border-white bg-black 
                                relative overflow-hidden group transition-all duration-300 shadow-lg"
                      variants={floatingButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <span className="relative z-10 font-medium text-xs sm:text-sm group-hover:text-black transition-colors duration-300">
                        Kal ka kya plan hai?
                      </span>
                      <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Animated Dialog Box with Blurred Overlay */}
              <AnimatePresence>
                {openDialog && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Dialogbox open={openDialog} onClose={() => setOpenDialog(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}