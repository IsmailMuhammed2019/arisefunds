import AnimatedWrapper from "./AnimatedWrapper";

export default function ICBMModel() {
  const steps = [
    {
      label: "Discover",
      description:
        "Assess employer demand, workforce gaps, and operating potential.",
    },
    {
      label: "Prepare",
      description: "Build intake, employer alignment, and operational systems.",
    },
    {
      label: "Train",
      description:
        "Deliver project-driven learning inside employer-connected pathways.",
    },
    {
      label: "Certify",
      description:
        "Validate skills with market-recognized credentials and outcomes.",
    },
    {
      label: "Employ",
      description:
        "Place talent into high-value employers and growth operators.",
    },
    {
      label: "Advance",
      description:
        "Enable career progression, upskilling, and enterprise value creation.",
    },
    {
      label: "Reinvent",
      description:
        "Reinvest learning back into new talent infrastructure and expansion.",
    },
  ];

  return (
    <section className="py-24 bg-[#021024] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
            The ICBM Model
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            ICBM is a strategic workforce development flywheel — not a training
            program.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedWrapper
              key={index}
              type="scale"
              delay={index * 0.08}
              hover
              tap
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-xl font-semibold text-cyan-300">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.label}</h3>
              <p className="mt-3 text-slate-300 leading-7">
                {step.description}
              </p>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
