'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import FlipBook from "@/components/Flipbook";
import FlipComponent from "@/components/FlipComponent";
import HeroSection from "@/components/Hero";
import ShowcaseSection from "@/components/Showcase";

const sections = [
  { id: 'hero', component: <HeroSection /> },
  { id: 'showcase', component: <ShowcaseSection /> },
  { id: 'flipbook', component: <FlipBook /> },
  { id: 'flipcomponent', component: <FlipComponent /> },
];

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full overflow-y-scroll md:snap-y md:snap-mandatory scrollbar-hide">
        {sections.map(({ id, component }) => (
          <AnimatedSection key={id}>
            {component}
          </AnimatedSection>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.6, once: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen md:h-screen md:snap-start"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
        visible: {
          opacity: 1,
          transition: { delay: 0.3, duration: 0.8 },
        },
      }}
    >
      {/* Blackout Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-10 pointer-events-none"
        animate={{ opacity: inView ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
