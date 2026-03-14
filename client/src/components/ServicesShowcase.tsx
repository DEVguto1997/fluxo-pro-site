import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Calendar, Instagram, Zap, BookOpen } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  delay: number;
}

export function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // WhatsApp Chat Animation
  const whatsappMessages: Message[] = [
    { id: 1, text: "Olá! Gostaria de saber mais sobre seus serviços", sender: "user", delay: 0 },
    { id: 2, text: "Oi! Bem-vindo à Fluxo Pro 👋", sender: "bot", delay: 800 },
    { id: 3, text: "Temos soluções de IA para automação de atendimento", sender: "bot", delay: 1600 },
    { id: 4, text: "Posso agendar uma demonstração?", sender: "user", delay: 2400 },
    { id: 5, text: "Claro! Deixa eu verificar minha agenda...", sender: "bot", delay: 3200 },
    { id: 6, text: "✅ Agendado para amanhã às 10:00", sender: "bot", delay: 4000 },
  ];

  const instagramMessages: Message[] = [
    { id: 1, text: "Oi! Tudo bem? 😊", sender: "user", delay: 0 },
    { id: 2, text: "Oi! Tudo certo! Como posso ajudar?", sender: "bot", delay: 800 },
    { id: 3, text: "Gostaria de conhecer mais sobre seus produtos", sender: "user", delay: 1600 },
    { id: 4, text: "Perfeito! Você tem interesse em qual solução?", sender: "bot", delay: 2400 },
    { id: 5, text: "Atendimento automático com IA", sender: "user", delay: 3200 },
    { id: 6, text: "Excelente escolha! 🚀 Vou enviar mais detalhes", sender: "bot", delay: 4000 },
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
                {isAnimating && activeTab === "whatsapp" ? "Animando..." : "Ver Animação"}
              </button>
            </div>

            {/* Chat Simulator */}
            <div className="bg-card/50 border border-glow-cyan rounded-xl p-4 h-96 overflow-y-auto space-y-3">
              {messages.length === 0 && activeTab === "whatsapp" && (
                <div className="text-center text-muted-foreground mt-32">
                  <p>Clique em "Ver Animação" para começar</p>
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
                {isAnimating && activeTab === "instagram" ? "Animando..." : "Ver Animação"}
              </button>
            </div>

            {/* Instagram Chat Simulator */}
            <div className="bg-card/50 border border-glow-pink rounded-xl p-4 h-96 overflow-y-auto space-y-3">
              {messages.length === 0 && activeTab === "instagram" && (
                <div className="text-center text-muted-foreground mt-32">
                  <p>Clique em "Ver Animação" para começar</p>
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
              {[
                {
                  title: "Ferramentas Google",
                  items: ["Google Sheets", "Google Docs", "Google Forms", "Google Drive"],
                  color: "border-glow-cyan"
                },
                {
                  title: "Windows & Linux",
                  items: ["Automação Windows", "Shell Script", "Terminal Linux", "Batch Files"],
                  color: "border-glow-green"
                },
                {
                  title: "IA & Criatividade",
                  items: ["ChatGPT", "Canva", "Ferramentas IA", "Prompting"],
                  color: "border-glow-pink"
                },
                {
                  title: "Alinhado com BNCC",
                  items: ["Competências Digitais", "Pensamento Computacional", "Criatividade", "Inovação"],
                  color: "border-glow-cyan"
                },
                {
                  title: "Referencial MEC",
                  items: ["Uso de IA na Educação", "Segurança Digital", "Ética Digital", "Inclusão Digital"],
                  color: "border-glow-green"
                },
                {
                  title: "Edição & Produção",
                  items: ["Edição de Vídeo", "Produção de Conteúdo", "Podcast", "Animação"],
                  color: "border-glow-pink"
                }
              ].map((course, idx) => (
                <div key={idx} className={`bg-card/50 border ${course.color} rounded-xl p-6 hover:scale-105 smooth-transition`}>
                  <h4 className="font-bold mb-4 text-primary">{course.title}</h4>
                  <ul className="space-y-2">
                    {course.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
