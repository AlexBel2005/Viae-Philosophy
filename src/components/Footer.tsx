import viaeLogo from "../assets/viae-logo.svg";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <img src={viaeLogo} alt="Viae" className="h-10 mx-auto mb-6 brightness-0 invert" />
        <p className="text-primary-foreground/70 text-sm">
          © {new Date().getFullYear()} Viae. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
