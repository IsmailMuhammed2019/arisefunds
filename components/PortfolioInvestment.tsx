export default function PortfolioInvestment() {
  return (
    <section className="py-24 bg-[#03112c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
            First Portfolio Investment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The model, proven.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 leading-8">
            Arise Funds led, built, and expanded the employer network that
            anchors ICBM graduates and demonstrates the value of workforce
            infrastructure at scale.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center animate-slide-up animation-delay-200">
          <div className="space-y-8">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-4">
                Key outcomes
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-6 animate-scale-in">
                  <p className="text-3xl font-semibold text-white">250%</p>
                  <p className="mt-2 text-slate-400">Growth since launch</p>
                </div>
                <div
                  className="rounded-3xl bg-slate-950/80 p-6 animate-scale-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <p className="text-3xl font-semibold text-white">12+</p>
                  <p className="mt-2 text-slate-400">Employer partners</p>
                </div>
                <div
                  className="rounded-3xl bg-slate-950/80 p-6 animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="text-3xl font-semibold text-white">1,200+</p>
                  <p className="mt-2 text-slate-400">Learners onboarded</p>
                </div>
                <div
                  className="rounded-3xl bg-slate-950/80 p-6 animate-scale-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="text-3xl font-semibold text-white">3x</p>
                  <p className="mt-2 text-slate-400">Average value creation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950/50 shadow-2xl shadow-black/20">
            <div className="aspect-16/10 w-full rounded-4xl bg-slate-950/70" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <button
              aria-label="Play investment video"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg shadow-slate-950/20"
            >
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
