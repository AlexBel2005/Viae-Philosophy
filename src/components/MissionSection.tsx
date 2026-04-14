export function MissionSection() {
  return (
    <section id="mission" className="py-24 px-6 bg-warm-tan/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Notre Mission</h2>

        <div className="space-y-8 text-foreground/85 leading-relaxed text-base">
          <p>
            L'écoute des malades nous a permis de comprendre que le Viae ne pouvais pas être lié si le malade n'était pas en mesure suivre et avancer sur son Viae. Chez Viae, nous sommes convaincus que notre première mission est de créer cet espace de données de santé habitable et protégé, pour que chaque malade puisse sereinement l'habiter.
            <p>
            En tant que professionnels des systèmes d'information, notre rôle dans la Viae est double :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Vous permettre de gagner du temps lié au traitement administratif (à bosser)</h3>
              <p className="text-sm text-muted-foreground">
                Nous vous mettons à disposition des outils numériques sécurisés pour transférer les données de santé de main à main.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Construire un espace numérique habitable pour le malade</h3>
              <p className="text-sm text-muted-foreground">
                Nous construisons un chez soi numérique, cet espace numérique protégé que le malade a la liberté d'habiter et d'organiser, pour y ranger ses données et choisir ou non de les partager. 
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-8 border border-border mt-8">
            <p>
              Nous avons été parmi vous, à vos côtés pour des problèmes administratifs et informatiques, en centre de santé ou à l'hôpital. Nous sommes conscients que votre charge est considérable. Pour autant, nous n'avons pas été soignant.
            </p>
            <p className="mt-4">
              Cette particularité fait notre force. Nous ne choisissons jamais entre le secteur privé et le secteur public. Nous ne choisissons jamais entre un professionnel de santé ou un autre — nous nous en tenons aux recommandations de votre ordre. Cette indépendance nous permet de respecter ce qui est le plus cher pour nous, ce lien de complémentarité entre vous et notre structure.
            </p>
          </div>

          <div className="text-center mt-12 bg-primary rounded-2xl p-10 text-primary-foreground">
            <p className="text-lg font-medium leading-relaxed">
              Afin de pouvoir construire ce lien, nous vous montrerons que vous pouvez compter sur nous, en allégeant vos charges administratives. Si vous l'acceptez, nous vous offrirons votre place dans le monde du malade, sur les Viae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
