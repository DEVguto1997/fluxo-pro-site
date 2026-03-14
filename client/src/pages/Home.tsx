import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, MessageCircle, Calendar, TrendingUp, Brain, Smartphone, BookOpen, Users, CheckCircle2, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Agentes de IA",
      description: "Assistentes inteligentes que aprendem e evoluem com suas necessidades, automatizando processos complexos.",
      features: ["Atendimento 24/7", "Aprendizado contínuo", "Integração simples"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp IA",
      description: "Atendimento automático via WhatsApp com respostas inteligentes e classificação de leads em tempo real.",
      features: ["Respostas instantâneas", "Classificação de leads", "Histórico completo"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Gestão de Agenda",
      description: "Agente IA que gerencia sua agenda, marca reuniões e otimiza seu tempo automaticamente.",
      features: ["Marcação automática", "Sincronização", "Lembretes inteligentes"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Captura de Leads",
      description: "Sistema inteligente que identifica, qualifica e converte prospects em clientes potenciais.",
      features: ["Qualificação automática", "Scoring avançado", "Relatórios em tempo real"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Posts em Redes Sociais",
      description: "Geração automática de conteúdo otimizado para suas redes sociais com IA generativa.",
      features: ["Conteúdo personalizado", "Agendamento", "Análise de performance"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cursos & Treinamentos",
      description: "Programas especializados em IA, Google Workspace e desenvolvimento profissional com certificação.",
      features: ["Cursos certificados", "Mentoria individual", "Acesso vitalício"]
    }
  ];

  const courses = [
    {
      title: "Fundamentos de IA para Negócios",
      description: "Aprenda como implementar IA em seus processos empresariais",
      level: "Iniciante",
      duration: "4 semanas"
    },
    {
      title: "Ferramentas Google Workspace Avançadas",
      description: "Domine Google Sheets, Docs e Forms para automação",
      level: "Intermediário",
      duration: "3 semanas"
    },
    {
      title: "Criando Seus Próprios Agentes IA",
      description: "Desenvolva agentes personalizados para sua empresa",
      level: "Avançado",
      duration: "6 semanas"
    },
    {
      title: "IA para Desenvolvimento Profissional",
      description: "Potencialize sua carreira com ferramentas de IA",
      level: "Intermediário",
      duration: "2 semanas"
    }
  ];

  const benefits = [
    "Redução de 80% em tempo operacional",
    "Atendimento 24/7 sem custos adicionais",
    "Aumento de 60% na captura de leads",
    "Melhoria de 45% na satisfação do cliente",
    "ROI positivo em até 30 dias",
    "Escalabilidade sem limite"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Poppins" }}>Fluxo Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary smooth-transition">Serviços</a>
            <a href="#courses" className="text-sm hover:text-primary smooth-transition">Cursos</a>
            <a href="#benefits" className="text-sm hover:text-primary smooth-transition">Benefícios</a>
            <a href="#contact" className="text-sm hover:text-primary smooth-transition">Contato</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Começar Agora</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <span className="text-sm font-semibold text-primary">🚀 Transformação Digital com IA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
              Soluções <span className="text-gradient">Inteligentes</span> para seu Negócio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Automatize processos, aumente vendas e libere tempo para estratégia. Agentes de IA que trabalham 24/7 para sua empresa crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Solicitar Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Conhecer Planos
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Ativas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Interações/Mês</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas de automação com IA para transformar sua operação
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg smooth-transition border-border hover:border-primary/50 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
              Cursos & Capacitação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolva suas habilidades com IA e ferramentas modernas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <Card key={idx} className="p-6 border-border hover:border-primary/50 smooth-transition group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm">{course.description}</p>
                  </div>
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{course.level}</span>
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 smooth-transition" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                Por que Escolher Fluxo Pro?
              </h2>
              <p className="text-lg text-muted-foreground">
                Resultados comprovados que transformam negócios
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Comece sua jornada de automação com IA hoje. Primeira consulta é gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Agendar Consulta <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold" style={{ fontFamily: "Poppins" }}>Fluxo Pro</span>
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
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Fluxo Pro Soluções Inteligentes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
