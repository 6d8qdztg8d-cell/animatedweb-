'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect } from "react"

const DARK_BG  = 0x080808
const LIGHT_BG = 0xF7F7F3

export function HeroSection({ onContact, theme }: { onContact?: () => void; theme?: 'dark' | 'light' }) {
  const splineRef = useRef<any>(null)

  // Sync Spline renderer clear-color with theme — no CSS delay mismatch
  useEffect(() => {
    const app = splineRef.current
    if (!app) return
    try {
      const renderer = app.renderer ?? app._renderer
      if (renderer?.setClearColor) {
        renderer.setClearColor(theme === 'light' ? LIGHT_BG : DARK_BG, 1)
      }
    } catch (_) {}
  }, [theme])

  function handleSplineLoad(splineApp: any) {
    splineApp.setZoom(0.65)
    splineRef.current = splineApp
    // Set initial color immediately on load
    try {
      const renderer = splineApp.renderer ?? splineApp._renderer
      if (renderer?.setClearColor) {
        renderer.setClearColor(theme === 'light' ? LIGHT_BG : DARK_BG, 1)
      }
    } catch (_) {}
  }

  return (
    <section className="relative min-h-[100dvh] bg-[var(--c-bg)] flex flex-col pt-14 md:pt-20">
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="#CAFF00"
      />

      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-10 flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center lg:py-8">

        {/* Text — z-10 so it renders above robot arms */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 pt-6 pb-0 lg:py-0 relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[var(--c-accent-text)] text-xs tracking-[0.3em] uppercase mb-3 md:mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span className="w-8 h-px bg-[var(--c-accent)]" />
            DigitalFrame
          </motion.span>

          <h1
            className="font-bold leading-[0.88] tracking-tight text-[var(--c-text)]"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
            }}
          >
            Websites
            <br />
            die{" "}
            <span className="text-[var(--c-accent-text)]">bewegen.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 md:mt-8 text-[var(--c-text-2)] text-base md:text-lg leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Moderne, leistungsstarke Websites mit interaktiven 3D-Erlebnissen — designed, um Ihre Marke auf das nächste Level zu bringen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-4 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4"
          >
            <button
              onClick={onContact}
              className="group flex items-center gap-3 bg-[var(--c-accent)] text-[var(--c-accent-bg)] font-bold px-6 md:px-8 py-3.5 md:py-4 text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all duration-300 touch-manipulation"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Projekt Starten
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[var(--c-text-2)] text-sm hover:text-[var(--c-accent-text)] active:text-[var(--c-accent-text)] transition-colors underline underline-offset-4 touch-manipulation py-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Arbeiten ansehen
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-4 md:mt-12 flex gap-2 md:gap-3"
          >
            {[
              { num: "50+", label: "Projekte" },
              { num: "100%", label: "Zufrieden" },
              { num: "3×", label: "Conversions" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 bg-[var(--c-num)] px-3 md:px-4 py-3 md:py-3.5 rounded-md text-center md:text-left">
                <div className="font-bold text-xl md:text-2xl text-[var(--c-text)]" style={{ fontFamily: "var(--font-syne)" }}>
                  {stat.num}
                </div>
                <div className="text-xs text-[var(--c-text-3)] mt-0.5 tracking-wider uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Robot — canvas bleeds left into text column on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 relative h-[55vh] w-full lg:h-[560px]"
        >
          <div className="spline-wrapper absolute inset-0 lg:-left-12 lg:-right-4">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              onLoad={handleSplineLoad}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
