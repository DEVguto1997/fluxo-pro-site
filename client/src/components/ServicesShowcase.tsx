import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Calendar, Instagram, Zap, BookOpen, X, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  delay: number;
}

interface Course {
  title: string;
  items: string[];
  color: string;
  ementa: string[];
}

export function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // WhatsApp Chat Animation
  const whatsappMessages: Message[] = [
    { id: 0, text: "Olá! Eu sou a Agente de IA da Fluxo Pro. Como posso ajudá-lo hoje?", sender: "bot", delay: 500 },
    { id: 1, text: "Olá! Gostaria de saber mais sobre seus serviços", sender: "user", delay: 2500 },
    { id: 2, text: "Ótimo! Temos soluções de IA para automação de atendimento", sender: "bot", delay: 4500 },
    { id: 3, text: "Posso agendar uma demonstração?", sender: "user", delay: 6500 },
    { id: 4, text: "Claro! Deixa eu verificar minha agenda...", sender: "bot", delay: 8500 },
    { id: 5, text: "✅ Agendado para amanhã às 10:00", sender: "bot", delay: 10500 },
  ];

  const instagramMessages: Message[] = [
    { id: 1, text: "Oi! Tudo bem? 😊", sender: "user", delay: 0 },
    { id: 2, text: "Oi! Tudo certo! Como posso ajudar?", sender: "bot", delay: 1200 },
    { id: 3, text: "Gostaria de conhecer mais sobre seus produtos", sender: "user", delay: 2400 },
    { id: 4, text: "Perfeito! Você tem interesse em qual solução?", sender: "bot", delay: 3600 },
    { id: 5, text: "Atendimento automático com IA", sender: "user", delay: 4800 },
    { id: 6, text: "Excelente escolha! 🚀 Vou enviar mais detalhes", sender: "bot", delay: 6000 },
  ];

  const courses: Course[] = [
    {
      title: "Ferramentas Google",
      items: ["Google Sheets", "Google Docs", "Google Forms", "Google Drive"],
      color: "border-glow-cyan",
      ementa: [
        "Módulo 1: Introdução ao Google Workspace",
        "Módulo 2: Google Sheets - Fórmulas e Análise de Dados",
        "Módulo 3: Google Docs - Colaboração em Tempo Real",
        "Módulo 4: Google Forms - Criação de Formulários",
        "Módulo 5: Google Drive - Organização e Compartilhamento",
        "Projeto Final: Integração de Ferramentas"
      ]
    },
    {
      title: "Windows & Linux",
      items: ["Automação Windows", "Shell Script", "Terminal Linux", "Batch Files"],
      color: "border-glow-green",
      ementa: [
        "Módulo 1: Fundamentos do Windows",
        "Módulo 2: Automação com Batch Files",
        "Módulo 3: PowerShell Avançado",
        "Módulo 4: Introdução ao Linux",
        "Módulo 5: Shell Script Profissional",
        "Módulo 6: Automatização de Tarefas"
      ]
    },
    {
      title: "IA & Criatividade",
      items: ["ChatGPT", "Canva", "Ferramentas IA", "Prompting"],
      color: "border-glow-pink",
      ementa: [
        "Módulo 1: Introdução à IA Generativa",
        "Módulo 2: ChatGPT - Prompting Efetivo",
        "Módulo 3: Canva - Design Profissional",
        "Módulo 4: Ferramentas IA Complementares",
        "Módulo 5: Criação de Conteúdo com IA",
        "Projeto: Campanha Completa com IA"
      ]
    },
    {
      title: "Alinhado com BNCC",
      items: ["Competências Digitais", "Pensamento Computacional", "Criatividade", "Inovação"],
      color: "border-glow-cyan",
      ementa: [
        "Módulo 1: BNCC - Competências Digitais",
        "Módulo 2: Pensamento Computacional",
        "Módulo 3: Criatividade e Inovação",
        "Módulo 4: Resolução de Problemas",
        "Módulo 5: Colaboração Digital",
        "Avaliação: Projeto Interdisciplinar"
      ]
    },
    {
      title: "Referencial MEC",
      items: ["Uso de IA na Educação", "Segurança Digital", "Ética Digital", "Inclusão Digital"],
      color: "border-glow-green",
      ementa: [
        "Módulo 1: IA na Educação - Referencial MEC",
        "Módulo 2: Segurança Digital e Proteção de Dados",
        "Módulo 3: Ética Digital e Responsabilidade",
        "Módulo 4: Inclusão Digital",
        "Módulo 5: Acessibilidade em Plataformas Digitais",
        "Seminário: Desafios e Oportunidades"
      ]
    },
    {
      title: "Edição & Produção",
      items: ["Edição de Vídeo", "Produção de Conteúdo", "Podcast", "Animação"],
      color: "border-glow-pink",
      ementa: [
        "Módulo 1: Fundamentos de Edição de Vídeo",
        "Módulo 2: Produção de Conteúdo Profissional",
        "Módulo 3: Criação e Edição de Podcast",
        "Módulo 4: Animação e Motion Graphics",
        "Módulo 5: Otimização para Redes Sociais",
        "Projeto Final: Produção Completa"
      ]
    }
  ];

  const startAnimation = (type: string) => {
    setIsAnimating(true);
    setMessages([]);
    const messageList = type === "whatsapp" ? whatsappMessages : instagramMessages;
    
    messageList.forEach((msg) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, msg.delay);
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, messageList[messageList.length - 1].delay + 500);
  };

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-card/50 border border-primary/20">
          <TabsTrigger value="whatsapp" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Agenda</span>
          </TabsTrigger>
          <TabsTrigger value="instagram" className="flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram</span>
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">Custom</span>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Cursos</span>
          </TabsTrigger>
        </TabsList>

        {/* WhatsApp Tab */}
        <TabsContent value="whatsapp" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Atendimento via WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Agente IA que responde mensagens automaticamente, qualifica leads e agenda reuniões em tempo real.
              </p>
              <button
                onClick={() => startAnimation("whatsapp")}
                className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 smooth-transition glow-cyan"
              >
                {isAnimating && activeTab === "whatsapp" ? "Animando..." : "Ver Demonstração"}
              </button>
            </div>

            {/* WhatsApp Chat Simulator */}
            <div className="bg-gradient-to-b from-[#0a4d2f] to-[#0d3b2a] rounded-2xl p-4 h-96 overflow-y-auto space-y-3 border border-[#25d366]/30 shadow-lg">
              {messages.length === 0 && activeTab === "whatsapp" && (
                <div className="text-center text-[#aec9c2] mt-32">
                  <p>Clique em "Ver Demonstração" para começar</p>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-black" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-[#005c4b] text-white rounded-br-none"
                        : "bg-[#1f4d3a] text-[#e1e8e6] rounded-bl-none border border-[#25d366]/20"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-[#0084ff] flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Calendar Tab */}
        <TabsContent value="calendar" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Agenda com Google Calendar</h3>
              <p className="text-muted-foreground mb-6">
                Mensagens do WhatsApp são automaticamente convertidas em eventos no Google Calendar. Sincronização em tempo real.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card/50 border border-primary/20 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Mensagem recebida no WhatsApp</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-8 w-1 bg-gradient-neon" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-card/50 border border-glow-cyan rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Evento criado no Google Calendar</span>
                </div>
              </div>
            </div>

            {/* Calendar Visual */}
            <div className="bg-card/50 border border-glow-cyan rounded-xl p-6">
              <div className="space-y-3">
                <div className="text-center font-bold mb-4">Março 2025</div>
                <div className="grid grid-cols-7 gap-2 text-sm text-center">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => (
                    <div key={day} className="font-semibold text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded ${
                        [14, 15, 21].includes(i + 1)
                          ? "bg-primary/30 border border-primary text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Instagram Tab */}
        <TabsContent value="instagram" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Recepção de Leads via Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Capture leads automaticamente através de DMs do Instagram. Qualificação inteligente e categorização.
              </p>
              <button
                onClick={() => startAnimation("instagram")}
                className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 smooth-transition glow-cyan"
              >
                {isAnimating && activeTab === "instagram" ? "Animando..." : "Ver Demonstração"}
              </button>
            </div>

            {/* Instagram Chat Simulator */}
            <div className="bg-card/50 border border-glow-pink rounded-xl p-4 h-96 overflow-y-auto space-y-3">
              {messages.length === 0 && activeTab === "instagram" && (
                <div className="text-center text-muted-foreground mt-32">
                  <p>Clique em "Ver Demonstração" para começar</p>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-background rounded-br-none"
                        : "bg-secondary text-foreground rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Customization Tab */}
        <TabsContent value="custom" className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">100% Customizável</h3>
              <p className="text-muted-foreground mb-6">
                Cada solução é feita sob medida para sua empresa. Sem templates genéricos.
              </p>
              <ul className="space-y-3">
                {[
                  "Integração com seus sistemas",
                  "Fluxos personalizados",
                  "Treinamento customizado",
                  "Suporte dedicado",
                  "Escalabilidade garantida",
                  "Segurança em primeiro lugar"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-glow-cyan rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">Solução Sob Medida</p>
                <p className="text-muted-foreground mt-2">Desenvolvida especificamente para seu negócio</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-6 mt-8">
          <div>
            <h3 className="text-3xl font-bold mb-6">Programas de Capacitação</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCourse(course)}
                  className={`bg-card/50 border ${course.color} rounded-xl p-6 hover:scale-105 smooth-transition text-left transition-all`}
                >
                  <h4 className="font-bold mb-4 text-primary">{course.title}</h4>
                  <ul className="space-y-2">
                    {course.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-primary mt-4 font-semibold">Clique para ver ementa →</p>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-card/50 rounded-lg smooth-transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-primary mb-4">Ementa do Curso:</h3>
              {selectedCourse.ementa.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">{idx + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedCourse(null)}
              className="w-full mt-6 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 smooth-transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
