import viaeLogo from "@/assets/viae-logo.svg";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={viaeLogo} alt="Viae" className="h-8" />
          <span className="text-xl font-semibold tracking-tight text-primary">Viae</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#philosophie" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            L'Approche Viae
          </a>
          <a href="#mission" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Notre Mission
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Nous Contacter
          </a>
        </div>
      </div>
    </nav>
  );
}
