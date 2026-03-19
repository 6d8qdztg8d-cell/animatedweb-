'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, Phone } from "lucide-react"
import { useState } from "react"

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle")
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => setStatus("done"), 2000)
  }

  function handleClose() {
    onClose()
    setTimeout(() => setStatus("idle"), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 md:right-auto md:top-0 md:w-[480px] z-50 bg-[#0E0E0E] border-t md:border-t-0 md:border-r border-[#1a1a1a] flex flex-col max-h-[92dvh] md:max-h-full"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex-1 overflow-y-auto p-6 md:p-10 overscroll-contain">
              {/* Header */}
              <div className="flex items-start justify-between mb-10">
                <div>
                  <span
                    className="text-[#CAFF00] text-xs tracking-[0.3em] uppercase block mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Kontakt
                  </span>
                  <h2
                    className="text-[#F0EDE8] font-bold text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Lass uns
                    <br />
                    sprechen.
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="text-[#777] hover:text-[#F0EDE8] transition-colors p-1 mt-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Direct call */}
              <a
                href="tel:+41766118150"
                className="flex items-center gap-4 border border-[#1f1f1f] px-4 py-3.5 hover:border-[#CAFF00] transition-colors mb-6 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#CAFF00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#CAFF00]/20 transition-colors">
                  <Phone size={15} className="text-[#CAFF00]" />
                </div>
                <div>
                  <div className="text-[#888] text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-outfit)" }}>
                    Direkt anrufen
                  </div>
                  <div className="text-[#F0EDE8] text-sm font-bold tracking-wide" style={{ fontFamily: "var(--font-syne)" }}>
                    +41 76 611 81 50
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-[#1a1a1a]" />
                <span className="text-[#666] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-outfit)" }}>oder</span>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>

              {status === "done" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <CheckCircle size={48} className="text-[#CAFF00]" />
                  <h3
                    className="text-[#F0EDE8] font-bold text-2xl"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Nachricht gesendet!
                  </h3>
                  <p
                    className="text-[#888] text-sm max-w-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Wir melden uns innerhalb von 24 Stunden bei dir.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 text-[#CAFF00] text-sm underline underline-offset-4"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Schließen
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#999] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Max Mustermann"
                      className="bg-[#141414] border border-[#1f1f1f] text-[#F0EDE8] placeholder-[#555] px-4 py-3 text-sm outline-none focus:border-[#CAFF00] transition-colors rounded-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#999] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      E-Mail
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="max@firma.de"
                      className="bg-[#141414] border border-[#1f1f1f] text-[#F0EDE8] placeholder-[#555] px-4 py-3 text-sm outline-none focus:border-[#CAFF00] transition-colors rounded-sm"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    />
                  </div>

                  {/* Type */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#999] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Design-Stil
                    </label>
                    <select
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                      className="bg-[#141414] border border-[#1f1f1f] text-[#F0EDE8] px-4 py-3 text-sm outline-none focus:border-[#CAFF00] transition-colors rounded-sm appearance-none"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      <option value="" className="bg-[#141414]">Auswählen…</option>
                      <option value="elegant" className="bg-[#141414]">Elegant</option>
                      <option value="modern" className="bg-[#141414]">Modern</option>
                      <option value="nature" className="bg-[#141414]">Nature</option>
                      <option value="other" className="bg-[#141414]">Noch nicht sicher</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#999] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Nachricht
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={4}
                      placeholder="Erzähl uns von deinem Projekt…"
                      className="bg-[#141414] border border-[#1f1f1f] text-[#F0EDE8] placeholder-[#555] px-4 py-3 text-sm outline-none focus:border-[#CAFF00] transition-colors rounded-sm resize-none"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 flex items-center justify-center gap-3 bg-[#CAFF00] text-[#080808] font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-white transition-all disabled:opacity-60"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#080808]/30 border-t-[#080808] rounded-full animate-spin" />
                        Senden…
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
