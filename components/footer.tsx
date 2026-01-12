import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/lablogo.png"
                alt="Azelabs"
                width={32}
                height={32}
                className="rounded-lg"
                priority
              />
              <span className="text-xl font-bold text-foreground">
                Azelabs
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Desenvolvimento de soluções tecnológicas com IA, focadas em performance e segurança.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Azelabs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
