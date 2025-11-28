import { Code2, Database, Server, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Server,
      title: "Backend",
      description: "APIs REST, autenticação e autorização robustas",
    },
    {
      icon: Database,
      title: "Database",
      description: "SQL e NoSQL, modelagem de dados e migrations",
    },
    {
      icon: Code2,
      title: "Fullstack",
      description:
        "React, Angular, TypeScript e integração completa frontend-backend",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Código limpo, otimizado e caching estratégico",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Práticas de segurança, hash, criptografia e proteção de dados",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "AWS, Oracle Cloud, Docker",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Sou desenvolvedor fullstack com 5 anos de trajetória na área e 2
                anos de experiência profissional, focado em backend e na criação
                de{" "}
                <span className="text-primary font-semibold">
                  sistemas confiáveis
                </span>
                .
              </p>
              <p>
                Já trabalhei com{" "}
                <span className="text-primary font-semibold">
                  Go, ASP.NET, Spring Boot, Node.js, React, Angular, Flutter e
                  React Native
                </span>
                {""}, adquirindo uma visão ampla do desenvolvimento web e
                mobile. Também possuo conhecimento em desenvolvimento de jogos
                com <span className="text-primary font-semibold">C# e C++</span>
                , o que ajudou a fortalecer minha lógica e paixão por
                tecnologia.
              </p>
              <p>
                Estou sempre em busca de aprender mais e evoluir para criar
                aplicações que realmente agregam valor ao negócio.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
