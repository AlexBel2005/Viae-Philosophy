import viaeLogo from "@/assets/viae-logo.svg";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-warm-tan overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-navy blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cream blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <img src={viaeLogo} alt="Viae" className="h-24 mx-auto mb-8 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground tracking-tight leading-tight mb-6">
          L'Esprit Viae
        </h1>
        <p className="text-lg md:text-xl text-accent-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Apprendre à habiter son chemin de santé 
        </p>
        <div className="mt-10">
          <a
            href="#philosophie"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            Découvrir
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
