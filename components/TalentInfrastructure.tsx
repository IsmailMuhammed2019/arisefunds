// components/TalentInfrastructure.tsx
import React from "react";

const TalentInfrastructure = () => {
  return (
    <section className="bg-[#1A93D9] py-24 px-6 relative overflow-hidden text-center">
      {/* Topographic Side Decorations 
        Note: Ensure these images exist in your public folder or use SVGs 
      */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-56 opacity-40 pointer-events-none">
        <img
          src="/topo-left.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-56 opacity-40 pointer-events-none">
        <img
          src="/topo-right.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 animate-slide-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Where talent meets infrastructure.
        </h2>

        <p className="text-white/90 text-sm md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          From security operations centers to data analytics labs — across
          Nigeria, Sierra Leone, the United States and beyond — Arise Funds
          portfolio companies build the environments where real careers begin.
        </p>

        <button className="bg-white text-[#1A93D9] font-bold px-10 py-4 text-sm rounded-sm shadow-md hover:bg-slate-50 transition-all active:scale-95">
          Get Intouch
        </button>
      </div>
    </section>
  );
};

/** * THE FIX: This line ensures Next.js can find the component
 * when you import it in your page.tsx
 */
export default TalentInfrastructure;
