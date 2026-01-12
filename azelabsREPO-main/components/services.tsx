import { Smartphone, Globe, Layers, Settings, RefreshCw, Code2, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const services = [
  {
    icon: Smartphone,
    title: "Aplicativos Moveis",
    description: "Criamos aplicativos para celular (Android e iOS) que funcionam de forma rapida e intuitiva.",
    explanation: "Aplicativos sao programas que voce baixa na loja do celular, como WhatsApp ou Instagram.",
  },
  {
    icon: Globe,
    title: "PWA",
    titleInfo: "Progressive Web App",
    description:
      "Sites que funcionam como aplicativos. Podem ser instalados no celular sem precisar ir na loja de apps.",
    explanation: "E como um site turbinado que voce pode 'instalar' direto do navegador e usar mesmo offline!",
  },
  {
    icon: Layers,
    title: "TWA",
    titleInfo: "Trusted Web Activity",
    description: "Transformamos seu site em um app disponivel na Google Play Store, mantendo todos os recursos web.",
    explanation: "Imagine colocar seu site na loja do Google Play como se fosse um app tradicional!",
  },
  {
    icon: Code2,
    title: "Sites em Node.js",
    description: "Desenvolvemos sites modernos e rapidos utilizando tecnologia de ponta para o seu negocio.",
    explanation: "Node.js e uma tecnologia que deixa os sites super rapidos e preparados para crescer.",
  },
  {
    icon: Settings,
    title: "Integracao de Sistemas",
    description: "Conectamos diferentes sistemas e plataformas para trabalharem juntos de forma automatica.",
    explanation: "E como fazer diferentes programas 'conversarem' entre si, economizando tempo e trabalho manual.",
  },
  {
    icon: RefreshCw,
    title: "Manutencao",
    description: "Cuidamos do seu site ou sistema para que funcione sempre, com atualizacoes e suporte continuo.",
    explanation: "Assim como um carro precisa de revisao, seu site precisa de cuidados para funcionar bem.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium mb-4">Nossos Servicos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">O que fazemos</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferecemos solucoes completas em desenvolvimento de software. Passe o mouse sobre o{" "}
            <Info className="inline w-4 h-4" /> para entender melhor cada servico.
          </p>
        </div>

        {/* Services Grid */}
        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    {service.title}
                    {service.titleInfo && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{service.titleInfo}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-medium">Em termos simples:</span> {service.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
