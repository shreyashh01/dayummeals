'use client';

import FlipBook from "@/components/Flipbook";
import FlipComponent from "@/components/FlipComponent";
import HeroSection from "@/components/Hero";
import ShowcaseSection from "@/components/Showcase";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden md:snap-y md:snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="h-full overflow-y-scroll md:snap-y md:snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* Hero Section */}
        <div className="flex flex-col flex-1 min-h-screen md:h-screen md:snap-start">
          <HeroSection />
        </div>

        {/* Showcase Section */}
        <div className="min-h-screen md:h-screen md:snap-start">
          <ShowcaseSection />
        </div>

        {/* FlipBook Section */}
        <div className="min-h-screen md:h-screen md:snap-start">
          <FlipBook />
        </div>

        {/* FlipComponent Section */}
        <div className="min-h-screen md:h-screen md:snap-start">
          <FlipComponent />
        </div>
      </div>

      {/* Hide scrollbar (WebKit) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
