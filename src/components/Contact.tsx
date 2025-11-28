import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "matheuscarvie@gmail.com",
      href: "mailto:matheuscarvie@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MatheusCarvie",
      href: "https://github.com/MatheusCarvie",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/matheuscarvie",
      href: "https://linkedin.com/in/matheuscarvie",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Vamos{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Conversar
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Tem um projeto em mente? Vamos transformar sua ideia em realidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Estou sempre aberto a discutir novos projetos, ideias
                  criativas ou oportunidades para fazer parte da sua visão. Seja
                  para uma consultoria, desenvolvimento de um projeto ou apenas
                  uma conversa sobre tecnologia.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-6 py-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Disponível para novos projetos
                </span>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-background border-2 border-border rounded-2xl p-8 shadow-card hover:border-primary/30 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Conte-me sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow text-white font-semibold h-12 text-base transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
