const technologies = [
  {
    name: "GO",
    category: "Backend",
    color: "from-green-500 to-green-600",
  },
  {
    name: "ASP.NET",
    category: "Backend",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "from-green-500 to-green-600",
  },
  {
    name: "TypeScript",
    category: "Language",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Java",
    category: "Language",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "C#",
    category: "Language",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "C++",
    category: "Language",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "MongoDB",
    category: "Database",
    color: "from-green-600 to-green-700",
  },
  { name: "Redis", category: "Cache", color: "from-red-500 to-red-600" },
  { name: "Docker", category: "DevOps", color: "from-blue-400 to-blue-500" },
  { name: "AWS", category: "Cloud", color: "from-orange-500 to-orange-600" },
  {
    name: "Oracle Cloud",
    category: "Cloud",
    color: "from-orange-500 to-orange-600",
  },
  { name: "React", category: "Frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Angular", category: "Frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Flutter", category: "Mobile", color: "from-cyan-400 to-blue-500" },
  {
    name: "React Native",
    category: "Mobile",
    color: "from-cyan-400 to-blue-500",
  },
  { name: "REST API", category: "API", color: "from-primary to-accent" },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-32 bg-card relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Stack{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Tecnológico
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Ferramentas e tecnologias que domino para construir aplicações
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in-up cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />

                <div className="relative flex flex-col items-center text-center gap-3">
                  <span className="text-xs text-primary font-mono font-semibold tracking-wider uppercase">
                    {tech.category}
                  </span>
                  <span className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>

                  {/* Animated dot indicator */}
                  <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Satisfação do Cliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
