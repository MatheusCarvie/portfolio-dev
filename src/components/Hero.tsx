import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIxNCAzMiUgOTElKSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:opacity-20 opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm font-medium tracking-wide">
              Apaixonado por código e inovação
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Backend
            </span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Backend orientado a qualidade: APIs estáveis, sistemas escaláveis,
            código limpo e desempenho que transforma desafios em soluções
          </p>

          {/* Tech Stack Pills */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              "Go",
              "Asp.Net",
              "Spring Boot",
              "Node.js",
              "React",
              "Angular",
              "Flutter",
              "React Native",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              <Code2 className="mr-2 w-5 h-5" />
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white hover:border-primary font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Fale Comigo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group animate-fade-in"
            style={{ animationDelay: "0.5s" }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Role para baixo</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
