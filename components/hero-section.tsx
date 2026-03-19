'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection({ onContact }: { onContact?: () => void }) {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center pt-16 md:pt-20">
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="#CAFF00"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 items-center py-4 lg:py-0">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#CAFF00] text-xs tracking-[0.3em] uppercase mb-3 md:mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span className="w-8 h-px bg-[#CAFF00]" />
            DigitalFrame
          </motion.span>

          <h1
            className="font-bold leading-[0.88] tracking-tight text-[#F0EDE8]"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
            }}
          >
            Websites
            <br />
            die{" "}
            <span className="text-[#CAFF00]">bewegen.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 md:mt-8 text-[#aaa] text-base md:text-lg leading-relaxed max-w-md"
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
              className="group flex items-center gap-3 bg-[#CAFF00] text-[#080808] font-bold px-6 md:px-8 py-3.5 md:py-4 text-sm tracking-widest uppercase hover:bg-white active:scale-95 transition-all duration-300 touch-manipulation"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Projekt Starten
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#aaa] text-sm hover:text-[#CAFF00] active:text-[#CAFF00] transition-colors underline underline-offset-4 touch-manipulation py-2"
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
            className="mt-5 md:mt-14 flex gap-5 md:gap-10 border-t border-[#1a1a1a] pt-4 md:pt-8"
          >
            {[
              { num: "50+", label: "Projekte" },
              { num: "100%", label: "Zufrieden" },
              { num: "3×", label: "Conversions" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-bold text-xl md:text-2xl text-[#F0EDE8]" style={{ fontFamily: "var(--font-syne)" }}>
                  {stat.num}
                </div>
                <div className="text-xs text-[#999] mt-0.5 tracking-wider uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Robot — hidden on mobile, right column on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 relative hidden sm:block h-[360px] md:h-[440px] lg:h-[680px] w-full"
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
