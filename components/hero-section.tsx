'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection({ onContact }: { onContact?: () => void }) {
  return (
    <section className="relative min-h-[100dvh] bg-[var(--c-bg)] overflow-hidden flex flex-col pt-14 md:pt-20">
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="#CAFF00"
      />

      {/* Content — flex col on mobile, grid on desktop */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center lg:py-8">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 pt-6 pb-0 lg:py-0"
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
            className="mt-4 md:mt-12 flex gap-5 md:gap-10 border-t border-[var(--c-border-2)] pt-4 md:pt-8"
          >
            {[
              { num: "50+", label: "Projekte" },
              { num: "100%", label: "Zufrieden" },
              { num: "3×", label: "Conversions" },
            ].map((stat) => (
              <div key={stat.label}>
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

        {/* 3D Robot — fills remaining height on mobile, right column on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 flex-1 lg:flex-none relative lg:h-[680px] min-h-[55vh] lg:min-h-0 w-full"
        >
          <div className="spline-wrapper w-full h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
