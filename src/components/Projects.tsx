import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface IProjects {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: IProjects[] = [
  {
    title: "iStub",
    description:
      "Sistema completo de agendamento e gestão de eventos, com controle de ingressos, totens de check-in, avaliações de exposições e fluxo operacional integrado.",
    tech: [
      "Angular",
      "Asp.Net",
      "keycloak",
      "Docker",
      "SQL Server",
      "Tailwind CSS",
      "DevExtreme",
      "PWA",
    ],
  },
  {
    title: "Dohma",
    description:
      "Cardápio digital completo para restaurante, com componentes personalizados em Angular e Tailwind, totalmente estático e otimizado para rápida navegação.",
    tech: ["Angular", "Tailwind CSS"],
  },
  {
    title: "Logs",
    description:
      "Dashboard para leitura e visualização de logs do ASP.NET, exibindo erros, avisos e informações em uma interface organizada para facilitar monitoramento e análise",
    tech: ["Angular", "Asp.Net", "SCSS", "Angular Material"],
  },
  {
    title: "Portal do Cliente",
    description:
      "Portal para clientes de postos, com gestão de frotas, vendas e notas fiscais. A comunicação entre servidores é unificada via SignalR, garantindo dados em tempo real.",
    tech: [
      "Angular",
      "Asp.Net",
      "SCSS",
      "Angular Material",
      "MongoDB",
      "SignalR",
    ],
  },
  {
    title: "Projetos Pessoais",
    description:
      "Conjunto de aplicações criadas ao longo dos estudos, incluindo sistemas como pizzaria, e-commerce e projetos do Oracle Next Education.",
    tech: [
      "Go",
      "Node.js",
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Flutter",
      "React Native",
    ],
  },
  {
    title: "Games & Engines",
    description:
      "Desenvolvimento de jogos com Unity e Unreal, além da criação de uma game engine própria em C++ utilizando OpenGL e bibliotecas gráficas.",
    tech: ["Unity", "Unreal Engine", "C++", "C#", "OpenGL"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Projetos em{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Destaque
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-card hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8">
                  {/* Project Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-mono font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow text-white transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
