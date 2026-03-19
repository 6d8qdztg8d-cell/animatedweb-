'use client'

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { LumiereMockup, VertexMockup, TerraMockup } from "@/components/project-mockups"
import { ContactModal } from "@/components/contact-modal"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight, X } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  "Web Design", "3D Experiences", "Next.js", "Motion Design",
  "React", "Performance", "Tailwind CSS", "UI/UX", "TypeScript", "Branding",
]

const NAV_LINKS = [
  { label: "Leistungen", href: "leistungen" },
  { label: "Styles", href: "styles" },
  { label: "Projekte", href: "projects" },
  { label: "Kontakt", href: "contact" },
]

const STYLES = [
  {
    id: "elegant",
    label: "Elegant",
    tagline: "Clean. Minimal. Premium.",
    description: "Feines Typografie-System, viel Weißraum und dezente Akzente. Ideal für Luxusmarken, Kanzleien und Premium-Dienstleister.",
    bg: "#F5F0E8", text: "#1a1a1a", accent: "#B8860B", font: "serif",
  },
  {
    id: "modern",
    label: "Modern",
    tagline: "Smooth. Bold. Apple-inspired.",
    description: "Dunkle Glasmorphismus-Effekte, saubere Linien und flüssige Animationen. Für Tech-Startups und innovative Marken.",
    bg: "#0A0A0F", text: "#ffffff", accent: "#2563EB", font: "var(--font-syne)",
  },
  {
    id: "nature",
    label: "Nature",
    tagline: "Organic. Calm. Authentic.",
    description: "Erdtöne, organische Formen und ruhige Typografie. Perfekt für Bio-Brands, Coaches und nachhaltige Unternehmen.",
    bg: "#F0EDE4", text: "#2D3B1F", accent: "#5C7A3E", font: "Georgia, serif",
  },
]

const PROJECTS = [
  { name: "Lumière Boutique", category: "Elegant · E-Commerce", year: "2024", accent: "#B8860B", Mockup: LumiereMockup, image: "/projects/lumiere.jpg" },
  { name: "Vertex Technologies", category: "Modern · SaaS", year: "2024", accent: "#2563EB", Mockup: VertexMockup, image: "/projects/vertex.jpg" },
  { name: "Terra Organics", category: "Nature · Branding", year: "2025", accent: "#5C7A3E", Mockup: TerraMockup, image: "/projects/terra.jpg" },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Navbar({ onContact }: { onContact: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNav(href: string, label: string) {
    setMenuOpen(false)
    if (label === "Kontakt") { onContact(); return }
    scrollTo(href)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#111]" style={{ backgroundColor: "rgba(8,8,8,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-[#F0EDE8] font-bold text-base md:text-lg tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            WEB<span className="text-[#CAFF00]">.</span>STUDIO
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href, item.label)}
                className="text-[#aaa] hover:text-[#F0EDE8] transition-colors text-sm tracking-wide"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onContact}
              className="hidden md:block bg-[#CAFF00] text-[#080808] font-bold text-xs px-5 py-2.5 tracking-widest uppercase hover:bg-white transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Anfrage
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 touch-manipulation"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 border-b border-[#1a1a1a] md:hidden"
            style={{ backgroundColor: "rgba(8,8,8,0.98)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href, item.label)}
                  className="text-left text-[#aaa] active:text-[#CAFF00] text-base py-3.5 border-b border-[#111] last:border-0 touch-manipulation"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onContact() }}
                className="mt-3 bg-[#CAFF00] text-[#080808] font-bold text-sm py-4 tracking-widest uppercase touch-manipulation"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Anfrage stellen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="border-y border-[#111] bg-[#0C0C0C] py-4 overflow-hidden">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-sm text-[#999] tracking-[0.2em] uppercase shrink-0" style={{ fontFamily: "var(--font-outfit)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CAFF00] shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function LeistungenSection() {
  const items = [
    { num: "01", title: "Web Design", desc: "Maßgeschneiderte Designs die deine Marke perfekt widerspiegeln — von der ersten Skizze bis zum fertigen Pixel." },
    { num: "02", title: "3D & Animation", desc: "Interaktive 3D-Erlebnisse und flüssige Animationen, die Besucher begeistern und länger auf der Seite halten." },
    { num: "03", title: "Development", desc: "Schnelle, skalierbare Websites mit Next.js, React und TypeScript. Performance und SEO inklusive." },
    { num: "04", title: "Branding", desc: "Logo, Farbpalette, Typografie — wir entwickeln eine konsistente visuelle Identität für deine Marke." },
    { num: "05", title: "Conversion Optimierung", desc: "Wir analysieren und optimieren deine Seite damit mehr Besucher zu echten Kunden werden." },
    { num: "06", title: "Wartung & Support", desc: "Regelmäßige Updates, Backups und schneller Support — damit deine Website immer reibungslos läuft." },
  ]

  return (
    <section id="leistungen" className="py-16 md:py-32 bg-[#060606] border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-10 md:mb-16">
          <span className="text-[#CAFF00] text-xs tracking-[0.3em] uppercase inline-flex items-center gap-3" style={{ fontFamily: "var(--font-outfit)" }}>
            <span className="w-8 h-px bg-[#CAFF00]" />Leistungen
          </span>
          <h2 className="mt-4 text-[#F0EDE8] font-bold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Was wir<br /><span className="text-[#CAFF00]">liefern.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]">
          {items.map((item) => (
            <motion.div
              key={item.num}
              className="group bg-[#060606] p-6 md:p-8 flex flex-col gap-3 md:gap-4 hover:bg-[#0C0C0C] active:bg-[#0C0C0C] transition-colors cursor-default touch-manipulation"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-[#1f1f1f] font-bold text-4xl md:text-5xl select-none group-hover:text-[#2a2a2a] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                {item.num}
              </span>
              <h3 className="text-[#F0EDE8] font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                {item.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
                {item.desc}
              </p>
              <div className="mt-auto w-8 h-px bg-[#1f1f1f] group-hover:bg-[#CAFF00] group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StylesSection({ onContact }: { onContact: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="styles" className="py-16 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#CAFF00] text-xs tracking-[0.3em] uppercase inline-flex items-center gap-3" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="w-8 h-px bg-[#CAFF00]" />Design Stile
            </span>
            <h2 className="mt-4 text-[#F0EDE8] font-bold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Drei Welten.<br />Eine Qualität.
            </h2>
          </div>
          <p className="text-[#aaa] max-w-sm leading-relaxed text-sm md:text-base" style={{ fontFamily: "var(--font-outfit)" }}>
            Jedes Unternehmen ist einzigartig. Wähle deinen Stil — wir setzen ihn um.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111]">
          {STYLES.map((style) => {
            const isSelected = selected === style.id
            return (
              <motion.div
                key={style.id}
                onClick={() => setSelected(isSelected ? null : style.id)}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[#080808] p-8 flex flex-col gap-6 cursor-pointer transition-colors"
                style={{ backgroundColor: isSelected ? "#0E0E0E" : undefined }}
              >
                {/* Selected border */}
                {isSelected && (
                  <motion.div
                    layoutId="style-border"
                    className="absolute inset-0 border-2 pointer-events-none"
                    style={{ borderColor: style.accent }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                {/* Mini preview */}
                <div className="w-full h-40 rounded-sm overflow-hidden flex items-center justify-center relative" style={{ backgroundColor: style.bg }}>
                  <div className="absolute inset-0 flex flex-col gap-2 p-4 justify-end">
                    <div className="w-2/3 h-3 rounded-full" style={{ backgroundColor: style.text, opacity: 0.15 }} />
                    <div className="w-1/2 h-2 rounded-full" style={{ backgroundColor: style.text, opacity: 0.08 }} />
                  </div>
                  <span className="font-bold text-3xl relative z-10" style={{ color: style.text, fontFamily: style.font, opacity: 0.9 }}>
                    {style.label}
                  </span>
                  <span className="absolute bottom-3 right-3 text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: style.accent, fontFamily: "var(--font-outfit)" }}>
                    {style.tagline.split(".")[0]}
                  </span>
                </div>

                <div>
                  <h3 className="text-[#F0EDE8] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-syne)" }}>{style.label}</h3>
                  <p className="text-[#999] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>{style.description}</p>
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.button
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      onClick={(e) => { e.stopPropagation(); onContact() }}
                      className="mt-auto flex items-center gap-2 font-bold text-xs tracking-widest uppercase px-4 py-3 transition-colors"
                      style={{ backgroundColor: style.accent, color: "#fff", fontFamily: "var(--font-syne)" }}
                    >
                      Diesen Stil wählen <ArrowRight size={13} />
                    </motion.button>
                  )}
                </AnimatePresence>

                {!isSelected && (
                  <div className="mt-auto flex items-center gap-2 text-[#333] group-hover:text-[#CAFF00] transition-colors text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                    Auswählen <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [lightbox, setLightbox] = useState<typeof PROJECTS[number] | null>(null)

  return (
    <section id="projects" className="py-16 md:py-32 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#CAFF00] text-xs tracking-[0.3em] uppercase inline-flex items-center gap-3" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="w-8 h-px bg-[#CAFF00]" />Ausgewählte Arbeiten
            </span>
            <h2 className="mt-4 text-[#F0EDE8] font-bold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Projekte, die<br /><span className="text-[#CAFF00]">konvertieren.</span>
            </h2>
          </div>
          <p className="text-[#aaa] max-w-sm leading-relaxed text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
            Klick auf ein Projekt für eine große Vorschau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              className="group flex flex-col gap-4 cursor-pointer touch-manipulation"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setLightbox(project)}
            >
              <div className="rounded-lg overflow-hidden border border-[#1a1a1a] bg-[#0E0E0E] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#141414] border-b border-[#1a1a1a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="ml-3 flex-1 bg-[#1a1a1a] rounded text-[#999] text-xs px-3 py-1 truncate" style={{ fontFamily: "var(--font-outfit)" }}>
                    {project.name.toLowerCase().replace(" ", "-")}.com
                  </div>
                </div>
                <div className="w-full aspect-[16/10] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-syne)" }}>
                      Vorschau <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[#F0EDE8] font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>{project.name}</h3>
                  <span className="text-[#999] text-xs tracking-widest uppercase mt-1 block" style={{ fontFamily: "var(--font-outfit)" }}>{project.category} · {project.year}</span>
                </div>
                <span className="shrink-0 mt-1 text-xs px-3 py-1 rounded-full border" style={{ borderColor: project.accent, color: project.accent, fontFamily: "var(--font-outfit)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} />
            <motion.div
              className="fixed inset-4 md:inset-12 z-50 rounded-xl overflow-hidden border border-[#222] shadow-2xl flex flex-col bg-[#0E0E0E]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#141414] border-b border-[#1a1a1a] shrink-0">
                <button onClick={() => setLightbox(null)} className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-4 flex-1 bg-[#1a1a1a] rounded text-[#aaa] text-xs px-4 py-1.5 text-center truncate" style={{ fontFamily: "var(--font-outfit)" }}>
                  {lightbox.name.toLowerCase().replace(" ", "-")}.com
                </div>
                <button onClick={() => setLightbox(null)} className="ml-4 text-[#aaa] hover:text-[#F0EDE8] transition-colors">
                  <X size={16} />
                </button>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lightbox.image} alt={lightbox.name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Footer bar */}
              <div className="px-5 py-3 bg-[#0A0A0A] border-t border-[#1a1a1a] flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[#F0EDE8] font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>{lightbox.name}</span>
                  <span className="text-[#999] text-xs ml-3" style={{ fontFamily: "var(--font-outfit)" }}>{lightbox.category}</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: lightbox.accent, color: lightbox.accent, fontFamily: "var(--font-outfit)" }}>Live</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

function CtaSection({ onContact }: { onContact: () => void }) {
  return (
    <section id="contact" className="py-16 md:py-32 bg-[#080808] border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 text-center">
        <span className="text-[#CAFF00] text-xs tracking-[0.3em] uppercase inline-flex items-center justify-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
          <span className="w-8 h-px bg-[#CAFF00]" />Bereit loszulegen?<span className="w-8 h-px bg-[#CAFF00]" />
        </span>
        <h2 className="text-[#F0EDE8] font-bold leading-tight mx-auto" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.5rem, 6vw, 5.5rem)", maxWidth: "14ch" }}>
          Ihr nächstes Projekt.{" "}<span className="text-[#CAFF00]">Außergewöhnlich.</span>
        </h2>
        <p className="mt-8 text-[#aaa] text-lg max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
          Erzählen Sie uns von Ihrer Idee. Wir machen daraus eine Website, die Besucher in Kunden verwandelt.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={onContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-[#CAFF00] text-[#080808] font-bold px-8 md:px-10 py-4 md:py-5 text-sm tracking-widest uppercase w-full sm:w-auto justify-center touch-manipulation active:scale-95"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Kostenloses Gespräch
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="border-t border-[#111] bg-[#060606] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[#F0EDE8] font-bold text-base" style={{ fontFamily: "var(--font-syne)" }}>
          WEB<span className="text-[#CAFF00]">.</span>STUDIO
        </span>
        <button onClick={onContact} className="text-[#333] hover:text-[#CAFF00] text-xs tracking-wide transition-colors" style={{ fontFamily: "var(--font-outfit)" }}>
          © 2025 Web.Studio · Kontakt aufnehmen →
        </button>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onContact={() => setModalOpen(true)} />
      <div id="hero"><HeroSection onContact={() => setModalOpen(true)} /></div>
      <Marquee />
      <LeistungenSection />
      <StylesSection onContact={() => setModalOpen(true)} />
      <ProjectsSection />
      <CtaSection onContact={() => setModalOpen(true)} />
      <Footer onContact={() => setModalOpen(true)} />
    </>
  )
}
