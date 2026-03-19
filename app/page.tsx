'use client'

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { LumiereMockup, VertexMockup, TerraMockup } from "@/components/project-mockups"
import { ContactModal } from "@/components/contact-modal"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight, X, Sun, Moon } from "lucide-react"
import { CinematicThemeSwitcher } from "@/components/ui/cinematic-theme-switcher"

// ─── Data ────────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = [
  "Web Design", "3D Experiences", "Next.js", "Motion Design",
  "React", "Performance", "Tailwind CSS", "UI/UX", "TypeScript", "Branding",
]

const NAV_LINKS = [
  { label: "Leistungen", href: "leistungen" },
  { label: "Über mich", href: "about" },
  { label: "Projekte", href: "projects" },
  { label: "Kontakt", href: "contact" },
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

function Navbar({ onContact, theme, onThemeToggle }: {
  onContact: () => void
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNav(href: string, label: string) {
    setMenuOpen(false)
    if (label === "Kontakt") { onContact(); return }
    scrollTo(href)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--c-border)]"
        style={{ backgroundColor: "var(--c-nav)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-[var(--c-text)] font-bold text-base md:text-lg tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            DigitalFrame
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href, item.label)}
                className="text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors text-sm tracking-wide"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme toggle */}
            <button
              onClick={onThemeToggle}
              className="w-8 h-8 flex items-center justify-center text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors"
              aria-label="Theme wechseln"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={onContact}
              className="hidden md:block bg-[var(--c-accent)] text-[var(--c-accent-bg)] font-bold text-xs px-5 py-2.5 tracking-widest uppercase hover:opacity-90 transition-opacity"
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
              <span className={`block w-5 h-0.5 bg-[var(--c-text)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[var(--c-text)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[var(--c-text)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            className="fixed top-14 left-0 right-0 z-40 border-b border-[var(--c-border-2)] md:hidden"
            style={{ backgroundColor: "var(--c-nav)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href, item.label)}
                  className="text-left text-[var(--c-text-2)] active:text-[var(--c-accent-text)] text-base py-3.5 border-b border-[var(--c-border)] last:border-0 touch-manipulation"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onContact() }}
                className="mt-3 bg-[var(--c-accent)] text-[var(--c-accent-bg)] font-bold text-sm py-4 tracking-widest uppercase touch-manipulation"
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
    <div className="border-y border-[var(--c-border)] bg-[var(--c-bg-3)] py-3 overflow-hidden">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-sm text-[var(--c-text-3)] tracking-[0.2em] uppercase shrink-0" style={{ fontFamily: "var(--font-outfit)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ThemeShowcaseSection({ theme, onToggle }: { theme: 'dark' | 'light'; onToggle: () => void }) {
  const isDark = theme === 'dark'
  return (
    <section className="relative overflow-hidden border-t border-[var(--c-border)]">
      {/* Split background — full bleed */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-[#080808]" />
        <div className="w-1/2 h-full bg-[#F7F7F3]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 py-10 md:py-14 px-5">

        {/* Label — CAFF00 on both halves */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-[#CAFF00] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          <span className="w-8 h-px bg-[#CAFF00]" />
          Dark &amp; Light Mode
          <span className="w-8 h-px bg-[#CAFF00]" />
        </motion.span>

        {/* Heading — mix-blend-mode: difference → auto white on dark, black on light */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-bold text-center leading-tight text-white select-none"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            mixBlendMode: "difference",
          }}
        >
          Dein Design. Dein Stil.
        </motion.h2>

        {/* Toggle + label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-center gap-3"
        >
          <CinematicThemeSwitcher isDark={isDark} onToggle={onToggle} />
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-outfit)", mixBlendMode: "difference", color: "#ffffff" }}
          >
            {isDark ? 'Dark Mode aktiv' : 'Light Mode aktiv'}
          </span>
        </motion.div>

      </div>
    </section>
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
    <section id="leistungen" className="py-6 md:py-32 bg-[var(--c-bg-2)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-7 md:mb-16">
          <span className="text-[var(--c-accent-text)] text-xs tracking-[0.3em] uppercase inline-flex items-center gap-3" style={{ fontFamily: "var(--font-outfit)" }}>
            <span className="w-8 h-px bg-[var(--c-accent)]" />Leistungen
          </span>
          <h2 className="mt-4 text-[var(--c-text)] font-bold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Was wir<br /><span className="text-[var(--c-accent-text)]">liefern.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--c-border)]">
          {items.map((item) => (
            <motion.div
              key={item.num}
              className="group bg-[var(--c-bg-2)] p-5 md:p-8 flex flex-col gap-2 md:gap-4 hover:bg-[var(--c-bg-3)] active:bg-[var(--c-bg-3)] transition-colors cursor-default touch-manipulation"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-[var(--c-num)] font-bold text-4xl md:text-5xl select-none group-hover:text-[var(--c-num-hover)] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                {item.num}
              </span>
              <h3 className="text-[var(--c-text)] font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                {item.title}
              </h3>
              <p className="text-[var(--c-text-3)] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
                {item.desc}
              </p>
              <div className="mt-auto w-8 h-px bg-[var(--c-num)] group-hover:bg-[var(--c-accent)] group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TEAM = [
  {
    name: "Altin Ramadani",
    role: "Design & Development",
    photo: "/projects/porträit.jpg",
    initials: "AR",
    bio: "Spezialist für moderne Web-Erlebnisse mit Fokus auf 3D & Performance.",
    facts: [
      { label: "Standort", value: "Schweiz" },
      { label: "Sprachen", value: "DE · EN · ALB" },
      { label: "Hobbys", value: "Design, Sport, Tech" },
      { label: "Erfahrung", value: "4+ Jahre" },
    ],
  },
  {
    name: "Mark Mirakaj",
    role: "Design & Development",
    photo: null,
    initials: "MM",
    bio: "Kreativer Kopf für visuelle Konzepte und starke Markenerlebnisse.",
    facts: [
      { label: "Standort", value: "Schweiz" },
      { label: "Sprachen", value: "DE · EN · ALB" },
      { label: "Hobbys", value: "Kreativität, Musik, Design" },
      { label: "Erfahrung", value: "4+ Jahre" },
    ],
  },
]

function AboutSection({ onContact }: { onContact: () => void }) {
  return (
    <section id="about" className="py-12 md:py-32 bg-[var(--c-bg)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* Team profiles + tags + button — spans 2/3 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {TEAM.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="flex flex-col bg-[var(--c-bg-card)] border border-[var(--c-border-2)] rounded-xl p-4 md:p-6 gap-4"
              >
                {/* Circle photo */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 mx-auto"
                  style={{ boxShadow: "0 0 0 3px var(--c-border-2)" }}
                >
                  {person.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[var(--c-bg-3)]">
                      <span
                        className="font-bold text-xl text-[var(--c-accent-text)]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {person.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name + role */}
                <div className="text-center">
                  <div
                    className="text-[var(--c-text)] font-bold text-sm md:text-base leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {person.name}
                  </div>
                  <div
                    className="text-[var(--c-accent-text)] text-[10px] md:text-xs tracking-wider uppercase mt-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {person.role}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--c-border-2)]" />

                {/* Bio */}
                <p
                  className="text-[var(--c-text-3)] text-xs leading-relaxed text-center"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {person.bio}
                </p>

                {/* Facts */}
                <div className="flex flex-col gap-2 mt-auto">
                  {person.facts.map((fact) => (
                    <div key={fact.label} className="flex items-center justify-between gap-2 py-1.5 border-t border-[var(--c-border-2)]">
                      <span
                        className="text-[var(--c-text-4)] text-[10px] tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {fact.label}
                      </span>
                      <span
                        className="text-[var(--c-text)] text-xs font-medium text-right"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

            {/* Tags + button under cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 md:gap-3"
            >
              {["Next.js", "React", "3D Design", "UI/UX", "Branding", "SEO"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 border border-[var(--c-border-3)] text-[var(--c-text-3)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent-text)] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {tag}
                </span>
              ))}
              <button
                onClick={onContact}
                className="ml-auto group flex items-center gap-3 bg-[var(--c-accent)] text-[var(--c-accent-bg)] font-bold px-5 py-2.5 text-xs tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all touch-manipulation"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Zusammenarbeiten
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <span className="text-[var(--c-accent-text)] text-xs tracking-[0.3em] uppercase inline-flex items-center justify-center md:justify-start gap-3 mb-4 w-full" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="w-8 h-px bg-[var(--c-accent)]" />Über uns
            </span>
            <h2 className="text-[var(--c-text)] font-bold leading-tight mb-6 text-center md:text-left" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Wir bauen Websites,<br />die <span className="text-[var(--c-accent-text)]">verkaufen.</span>
            </h2>

            <div className="flex flex-col gap-4 text-[var(--c-text-3)] text-sm md:text-[0.95rem] leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
              <p className="text-justify md:text-left">
                Wir sind Altin & Mark — das Team hinter DigitalFrame. Mit Leidenschaft für modernes Web-Design und Technologie helfen wir Unternehmen, ihre digitale Präsenz auf das nächste Level zu bringen.
              </p>
              <p className="text-justify md:text-left">
                Von der ersten Idee bis zum fertigen Produkt — wir begleiten dich durch den gesamten Prozess und sorgen dafür, dass deine Website nicht nur schön aussieht, sondern auch messbare Ergebnisse liefert.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [lightbox, setLightbox] = useState<typeof PROJECTS[number] | null>(null)

  return (
    <section id="projects" className="py-6 md:py-32 bg-[var(--c-bg-2)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="mb-7 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[var(--c-accent-text)] text-xs tracking-[0.3em] uppercase inline-flex items-center gap-3" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="w-8 h-px bg-[var(--c-accent)]" />Ausgewählte Arbeiten
            </span>
            <h2 className="mt-4 text-[var(--c-text)] font-bold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Projekte, die<br /><span className="text-[var(--c-accent-text)]">konvertieren.</span>
            </h2>
          </div>
          <p className="text-[var(--c-text-2)] max-w-sm leading-relaxed text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
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
              <div className="rounded-lg overflow-hidden border border-[var(--c-border-2)] bg-[var(--c-bg-card)] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-[var(--c-bg-card-2)] border-b border-[var(--c-border-2)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="ml-3 flex-1 bg-[var(--c-border-2)] rounded text-[var(--c-text-3)] text-xs px-3 py-1 truncate" style={{ fontFamily: "var(--font-outfit)" }}>
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
                  <h3 className="text-[var(--c-text)] font-bold text-lg" style={{ fontFamily: "var(--font-syne)" }}>{project.name}</h3>
                  <span className="text-[var(--c-text-3)] text-xs tracking-widest uppercase mt-1 block" style={{ fontFamily: "var(--font-outfit)" }}>{project.category} · {project.year}</span>
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
            <motion.div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} />
            <motion.div
              className="fixed inset-4 md:inset-12 z-50 rounded-xl overflow-hidden border border-[var(--c-border-2)] shadow-2xl flex flex-col bg-[var(--c-bg-card)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[var(--c-bg-card-2)] border-b border-[var(--c-border-2)] shrink-0">
                <button onClick={() => setLightbox(null)} className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-4 flex-1 bg-[var(--c-border-2)] rounded text-[var(--c-text-2)] text-xs px-4 py-1.5 text-center truncate" style={{ fontFamily: "var(--font-outfit)" }}>
                  {lightbox.name.toLowerCase().replace(" ", "-")}.com
                </div>
                <button onClick={() => setLightbox(null)} className="ml-4 text-[var(--c-text-2)] hover:text-[var(--c-text)] transition-colors">
                  <X size={16} />
                </button>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lightbox.image} alt={lightbox.name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Footer bar */}
              <div className="px-5 py-3 bg-[var(--c-bg)] border-t border-[var(--c-border-2)] flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[var(--c-text)] font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>{lightbox.name}</span>
                  <span className="text-[var(--c-text-3)] text-xs ml-3" style={{ fontFamily: "var(--font-outfit)" }}>{lightbox.category}</span>
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
    <section id="contact" className="py-6 md:py-32 bg-[var(--c-bg)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 text-center">
        <span className="text-[var(--c-accent-text)] text-xs tracking-[0.3em] uppercase inline-flex items-center justify-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
          <span className="w-8 h-px bg-[var(--c-accent)]" />Bereit loszulegen?<span className="w-8 h-px bg-[var(--c-accent)]" />
        </span>
        <h2 className="text-[var(--c-text)] font-bold leading-tight mx-auto" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.5rem, 6vw, 5.5rem)", maxWidth: "14ch" }}>
          Ihr nächstes Projekt.{" "}<span className="text-[var(--c-accent-text)]">Außergewöhnlich.</span>
        </h2>
        <p className="mt-8 text-[var(--c-text-2)] text-lg max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>
          Erzählen Sie uns von Ihrer Idee. Wir machen daraus eine Website, die Besucher in Kunden verwandelt.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={onContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-[var(--c-accent)] text-[var(--c-accent-bg)] font-bold px-8 md:px-10 py-4 md:py-5 text-sm tracking-widest uppercase w-full sm:w-auto justify-center touch-manipulation active:scale-95 hover:opacity-90 transition-opacity"
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
    <footer className="border-t border-[var(--c-border)] bg-[var(--c-bg-2)] py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[var(--c-text)] font-bold text-base" style={{ fontFamily: "var(--font-syne)" }}>
          DigitalFrame
        </span>
        <button onClick={onContact} className="text-[var(--c-text-4)] hover:text-[var(--c-accent-text)] text-xs tracking-wide transition-colors" style={{ fontFamily: "var(--font-outfit)" }}>
          © 2025 DigitalFrame · Kontakt aufnehmen →
        </button>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('df-theme') as 'dark' | 'light' | null
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
    localStorage.setItem('df-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onContact={() => setModalOpen(true)} theme={theme} onThemeToggle={toggleTheme} />
      <div id="hero"><HeroSection onContact={() => setModalOpen(true)} /></div>
      <Marquee />
      <ThemeShowcaseSection theme={theme} onToggle={toggleTheme} />
      <LeistungenSection />
      <AboutSection onContact={() => setModalOpen(true)} />
      <ProjectsSection />
      <CtaSection onContact={() => setModalOpen(true)} />
      <Footer onContact={() => setModalOpen(true)} />
    </>
  )
}
