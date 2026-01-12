import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Equipe especializada em desenvolvimento web e mobile",
  "Projetos 100% personalizados para cada cliente",
  "Comunicação clara e acompanhamento durante todo o processo",
  "Suporte técnico após a entrega do projeto",
  "Tecnologias modernas e de alta performance",
  "Compromisso com prazos e qualidade",
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-4">Sobre Nós</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem é a Azelabs?
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Somos uma empresa de desenvolvimento de software focada em criar soluções digitais{" "}
                <strong className="text-foreground">sob medida</strong> para nossos clientes.
              </p>

              <p>
                Não trabalhamos com soluções prontas ou genéricas.
                <strong className="text-foreground"> Cada projeto é único</strong>, desenvolvido especialmente para
                atender às necessidades específicas do seu negócio.
              </p>

              <p>
                Nosso objetivo é traduzir suas ideias em tecnologia de forma simples e eficiente, para que você possa
                focar no que realmente importa:
                <strong className="text-foreground"> fazer seu negócio crescer</strong>.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-secondary/50 p-6 lg:p-8">
              <div className="h-full w-full rounded-xl bg-card border border-border p-4 lg:p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-card border border-border">
                    <Image
                      src="/lablogo.png"
                      alt="Azelabs"
                      width={32}
                      height={32}
                      className="rounded-lg"
                      priority
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">Azelabs</h3>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvimento de Software Sob Medida
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      "Transformamos complexidade em simplicidade digital."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
