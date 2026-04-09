export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#04122c]">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,197,197,0.15),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_22%)]" />
      
      {/* Background blur effects */}
      <div className="absolute left-1/2 top-16 h-95 w-95 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-8 top-24 h-48 w-48 rounded-full bg-sky-400/10 blur-2xl" />

      {/* Background images layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* heroBacground.png - spiral shapes and connecting lines */}
        <img
          src="/heroBacground.png"
          alt="Background decoration - spirals"
          className="absolute inset-0 w-100 h-100 object-cover opacity-60 pointer-events-none mx-75 mt-80"
        />
        
        {/* heroBackground2.png - curved connecting lines */}
        <img
          src="/heroBackground2.png"
          alt="Background decoration - curves"
          className="absolute inset-0 w-100 h-100 object-cover opacity-50 pointer-events-none mx-75 mt-80"
        />
        
        {/* spiralHead.png - top left spiral */}
        <img
          src="/spiralHead.png"
          alt="Background decoration - spiral"
          className="absolute top-12 left-20 w-10 h-10 opacity-70 pointer-events-none"
        />
        
        {/* spiralHead.png - top center-right spiral (larger) */}
        <img
          src="/spiralHead.png"
          alt="Background decoration - spiral head"
          className="absolute top-16 right-64 w-18 h-18 opacity-70 pointer-events-none"
        />
        
        {/* spiralHead.png - right side spiral */}
        <img
          src="/spiralHead.png"
          alt="Background decoration - spiral"
          className="absolute top-20 right-12 w-12 h-12 opacity-65 pointer-events-none"
        />
        
        {/* Blue dashed lines at top */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-4 z-0">
          <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
          <div className="w-10 h-1 bg-cyan-400 rounded-full opacity-80"></div>
          <div className="w-8 h-1 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8 max-w-2xl animate-slide-left">
            <div
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300 shadow-lg shadow-cyan-500/10 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Impact-led infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight animate-slide-up animation-delay-200">
              Investing in the Infrastructure of{" "}
              <span className="text-cyan-300">Work</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl animate-slide-up animation-delay-400">
              Arise Funds is an impact investment firm. We deploy blended
              capital and operational infrastructure into workforce development
              and technology companies — building the institutional systems that
              generate returns and create employment at scale.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Get In Touch
              </a>
              <span className="text-slate-400">
                Schedule a conversation with the team.
              </span>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-72 w-72 rounded-full bg-slate-900/50 blur-3xl" />
            <img
              src="/hero-image.png"
              alt="Illustration of infrastructure work"
              className="relative mx-auto w-full max-w-xl shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
