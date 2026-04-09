"use client";

import React, { useEffect, useRef, useState } from "react";

/* HOOK */
function useInView() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, show] as const;
}

export default function PartnerBottom() {
  return (
    <section className="w-full bg-[#062B3D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-16">

        {/* ROW 1 */}
        <Row
          image="/partner-images/image2.png"
          label="The Instrument"
          title={
            <>
              Blended <span className="text-[#2BB0ED]">Capital</span> Facility
            </>
          }
          desc="We structure blended capital vehicles combining concessional first-loss capital, income-linked human capital financing, and equity. Capital is patient — structured around employer pipeline depth and verified employment outcomes, not arbitrary program timelines."
          imageLeft
        />

        {/* ROW 2 */}
        <Row
          image="/partner-images/image3.jpg"
          label="Current Raise"
          title={
            <>
              Seeking <span className="text-[#2BB0ED]">Aligned Capital</span> Partners
            </>
          }
          desc="Arise Funds is currently in active conversation with DFIs, impact foundations, and family offices. We are building a blended capital facility to accelerate the ICBM Nigeria deployment and fund expansion into new markets. Minimum engagement and terms are discussed directly — request the Investor Brief to begin that conversation."
        />

        {/* ROW 3 */}
        <Row
          image="/partner-images/image4.png"
          label="Current Focus"
          title={
            <>
              ICBM Nigeria –{" "}
              <span className="text-[#2BB0ED]">50,000 Employment</span> Target
            </>
          }
          desc="Our flagship deployment — currently operating across Abuja and Enugu — is the proof-of-model that anchors our institutional capital raise. Cohort 1 employment confirmed. Cohort 2 active. 50,000 target by 2029."
          imageLeft
        />

        {/* ROW 4 */}
        <Row
          image="/partner-images/image5.png"
          label="For Family Offices"
          title={
            <>
              A Founder-Led Fund with a{" "}
              <span className="text-[#2BB0ED]">Proven Model</span>
            </>
          }
          desc="If you are a family office looking for impact that is measurable, a founder you can meet, and a model you can visit — Arise Funds is built for that conversation. You can see the campuses, meet the graduates, and review the outcomes data directly. Capital is patient, terms are discussed personally, and every serious inquiry is answered by Aisha Lewis directly."
        />

        {/* NEW SECTION (ADDED) */}

<Row
  image="/partner-images/image6.jpg"
  label="For Sovereign & Government Capital"
  title={
    <>
      The <span className="text-[#2BB0ED]">National Economic</span> Case
    </>
  }
  desc="Every ICBM graduate represents a tax-contributing, formally employed citizen. At 50,000 graduates, the model generates measurable GDP contribution, reduces youth unemployment, and builds a nationally competitive digital workforce."
  imageLeft
/>

<Row
  image="/partner-images/image7.jpg"
  label="What We Look For"
  title={
    <>
      Aligned <span className="text-[#2BB0ED]">Capital</span> Partners
    </>
  }
  desc="We are building toward long-term institutional partnerships with DFIs, development banks, and sovereign wealth funds. If you deploy patient capital with an impact mandate — request our Investor Brief."
/>

      </div>
    </section>
  );
}

/* ROW COMPONENT */
interface RowProps {
  image: string;
  label: string;
  title: React.ReactNode;
  desc: string;
  imageLeft?: boolean;
}

function Row({ image, label, title, desc, imageLeft }: RowProps) {
  const [imgRef, imgVisible] = useInView();
  const [textRef, textVisible] = useInView();

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* IMAGE */}
      <div
        ref={imgRef}
        className={`rounded-2xl overflow-hidden transform transition-all duration-700 ease-out
        ${imgVisible ? "opacity-100 translate-x-0" : `opacity-0 ${imageLeft ? "-translate-x-12" : "translate-x-12"}`}
        ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* TEXT */}
      <div
        ref={textRef}
        className={`space-y-4 transform transition-all duration-700 delay-200 ease-out
        ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <p className="text-sm text-gray-400">{label}</p>

        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-sm text-gray-300 leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </div>
  );
}