import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, MessageCircle, Calendar, TrendingUp, Brain, Smartphone, BookOpen, CheckCircle2, Cpu, Sparkles, Waves } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Agentes de IA",
      description: "Assistentes inteligentes que aprendem e evoluem com suas necessidades",
      color: "glow-cyan"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp IA",
      description: "Atendimento automático com respostas inteligentes em tempo real",
      color: "glow-green"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Gestão de Agenda",
      description: "Agente que gerencia sua agenda e otimiza seu tempo automaticamente",
      color: "glow-pink"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Captura de Leads",
      description: "Sistema que identifica e qualifica prospects automaticamente",
      color: "glow-purple"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Posts em Redes Sociais",
      description: "Geração automática de conteúdo otimizado com IA generativa",
      color: "glow-cyan"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cursos & Treinamentos",
      description: "Programas especializados em IA e desenvolvimento profissional",
      color: "glow-green"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)",
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          transition: "all 0.1s ease-out"
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-glow-cyan">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-neon rounded-lg flex items-center justify-center glow-cyan">
              <Cpu className="w-6 h-6 text-background" />
            </div>
            <span className="font-bold text-xl text-gradient-neon">Fluxo Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary smooth-transition">Serviços</a>
            <a href="#stats" className="text-sm hover:text-primary smooth-transition">Impacto</a>
            <a href="#cta" className="text-sm hover:text-primary smooth-transition">Contato</a>
          </div>
          <Button className="bg-primary text-background hover:bg-primary/80 smooth-transition glow-cyan">
            Começar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow-cyan mb-8 bg-background/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Inteligência Artificial Avançada</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Automação <span className="text-gradient-cyber">Inteligente</span> para seu Negócio
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Agentes de IA que trabalham 24/7, aumentam vendas e liberam seu tempo para estratégia. Tecnologia de ponta ao alcance de todos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/80 smooth-transition glow-cyan">
                Solicitar Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary smooth-transition">
                Conhecer Planos
              </Button>
            </div>

            {/* Stats Grid */}
            <div id="stats" className="grid grid-cols-3 gap-4 pt-12 border-t border-primary/20">
              <div className="group">
                <div className="text-3xl font-bold text-primary group-hover:text-accent smooth-transition">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Ativas</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-primary group-hover:text-accent smooth-transition">10M+</div>
                <div className="text-sm text-muted-foreground">Interações/Mês</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-primary group-hover:text-accent smooth-transition">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções <span className="text-gradient-neon">Futuristas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta para transformar sua operação em tempo real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 smooth-transition ${service.color} hover:scale-105`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 smooth-transition" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 smooth-transition text-primary group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 smooth-transition">
                    Explorar <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Por que <span className="text-gradient-cyber">Fluxo Pro</span>?
              </h2>
              <ul className="space-y-4">
                {[
                  "Redução de 80% em tempo operacional",
                  "Atendimento 24/7 sem custos adicionais",
                  "Aumento de 60% na captura de leads",
                  "ROI positivo em até 30 dias",
                  "Escalabilidade sem limite",
                  "Suporte especializado 24/7"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:text-accent smooth-transition" />
                    <span className="text-lg group-hover:text-primary smooth-transition">{benefit}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cyber rounded-2xl opacity-10 blur-2xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-glow-cyan rounded-2xl p-8">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-primary/10 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cyber opacity-10" />
        <div className="absolute inset-0 overflow-hidden">
          <Waves className="absolute -bottom-20 -right-20 w-96 h-96 text-primary/10 animate-float" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pronto para <span className="text-gradient-neon">Transformar</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Comece sua jornada de automação com IA hoje. Primeira consulta é gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/80 smooth-transition glow-cyan">
                Agendar Consulta <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary smooth-transition">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-neon rounded-lg flex items-center justify-center glow-cyan">
                  <Zap className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold text-gradient-neon">Fluxo Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">Soluções inteligentes para seu negócio crescer.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Recursos</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Preços</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Sobre</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary smooth-transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Termos</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fluxo Pro Soluções Inteligentes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
