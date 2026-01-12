import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Oliport",
    description:
      "Site institucional completo para a Oliport, empresa do setor de logistica e transporte. Desenvolvido com foco em performance e design moderno.",
    simpleDescription:
      "Um site profissional que apresenta a empresa, seus servicos e permite que clientes entrem em contato facilmente.",
    image: "/oliport.png",
    link: "https://oliport.com.br",
    tags: ["Site Institucional", "Node.js", "Design Responsivo"],
    year: "2025",
  },
  {
    title: "Marketplace NOW",
    description:
      "Plataforma de marketplace completa desenvolvida do zero, com sistema de vendedores, produtos, carrinho de compras e pagamentos integrados.",
    simpleDescription:
      "Uma 'loja virtual' onde varias pessoas ou empresas podem vender seus produtos, como um shopping online.",
    image: "/now.png",
    tags: ["Marketplace", "E-commerce", "Pagamentos", "PWA"],
    year: "2025",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Projetos em destaque</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Conheca alguns dos projetos que desenvolvemos. Cada solucao e unica e criada especialmente para atender as
            necessidades do cliente.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  {project.link && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Visitar site</span>
                      </Link>
                    </Button>
                  )}
                </div>
                <CardDescription className="text-muted-foreground text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Simple explanation */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">💡 Explicando:</span> {project.simpleDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group/link"
                  >
                    Visitar projeto
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
