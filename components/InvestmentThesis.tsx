import React from 'react';

const InvestmentThesis = () => {
  return (
    <section className="bg-[#021526] text-white py-20 px-6 md:px-20 font-sans">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Investment <span className="text-[#4FB3E8]">Thesis</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed tracking-wide px-4">
          Providing the capital, operational infrastructure, and institutional systems that make early-
          stage workforce companies investable
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 animate-slide-up animation-delay-200">
        
        {/* Left: Image with rounded corners and subtle shadow */}
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/thesis-infrastructure.png" // Replace with your actual image path
              alt="Workforce Infrastructure"
              className="w-full h-auto object-cover aspect-[4/3] scale-105"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
            We don't fund projects. <span className="text-[#4FB3E8]">We finance infrastructure.</span>
          </h3>

          <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              The global workforce crisis is not a talent problem. It is
              a systems coordination failure — training programs exist,
              employer demand exists, and worker motivation exists, but
              structural disconnects prevent people from accessing
              dignified, income-generating work at scale. This is true in
              Lagos. It is equally true in Louisville.
            </p>
            
            <p>
              Arise Funds finances the infrastructure that resolves this
              failure: workforce development and technology companies
              with employer-integrated models, AI-enabled operations,
              and capital structures designed to generate returns as
              employer revenue scales. These are not training programs.
              They are human capital enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesis;