const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="text-3xl font-bold font-mono bg-gradient-hero bg-clip-text text-transparent">
            &lt;DEV/&gt;
          </div>
          
          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © {currentYear} Todos os direitos reservados
            </p>
            <p className="text-sm text-muted-foreground/80">
              Desenvolvido com <span className="text-red-500">❤️</span> e muito{" "}
              <span className="font-mono text-primary">TypeScript</span>
            </p>
          </div>
          
          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
