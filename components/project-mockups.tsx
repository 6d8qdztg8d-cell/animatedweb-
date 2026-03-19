// Inline website mockups rendered as React components
// Each simulates a real website design style

export function LumiereMockup() {
  return (
    <div className="w-full h-full bg-[#FAF8F4] overflow-hidden" style={{ fontFamily: "Georgia, serif" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-[#E8E0D0]">
        <span className="text-xs tracking-[0.3em] text-[#888] uppercase">Lumière</span>
        <div className="flex gap-6">
          {["Collection","Lookbook","About","Contact"].map(n => (
            <span key={n} className="text-[10px] tracking-widest text-[#999] uppercase">{n}</span>
          ))}
        </div>
        <span className="text-[10px] tracking-widest text-[#999] uppercase">Cart (0)</span>
      </div>

      {/* Hero */}
      <div className="flex h-[62%]">
        {/* Left image block */}
        <div className="w-1/2 bg-[#E8E0D0] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4C9B5] to-[#B8A898]" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="w-16 h-px bg-[#8B7355] mb-3" />
            <div className="text-[10px] tracking-[0.2em] text-[#6B5B45] uppercase">New Collection</div>
          </div>
        </div>
        {/* Right text */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="text-[10px] tracking-[0.3em] text-[#B8A898] uppercase mb-4">Printemps 2025</div>
          <div className="text-4xl text-[#2C2416] leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
            L'Art de<br />la Légèreté
          </div>
          <div className="text-[10px] text-[#999] leading-relaxed mb-6 max-w-[200px]">
            Discover our latest haute couture pieces, crafted with the finest fabrics.
          </div>
          <div className="inline-flex items-center gap-3">
            <div className="text-[10px] tracking-[0.2em] text-[#2C2416] uppercase border-b border-[#2C2416] pb-0.5">
              Explore Now
            </div>
          </div>
        </div>
      </div>

      {/* Product row */}
      <div className="flex gap-4 px-8 pt-4">
        {["#D4C9B5","#C4B9A5","#B4A998"].map((c, i) => (
          <div key={i} className="flex-1">
            <div className="w-full h-12 rounded-sm" style={{ backgroundColor: c }} />
            <div className="mt-2 text-[8px] text-[#999] tracking-widest uppercase">Robe Étoile {i + 1}</div>
            <div className="text-[9px] text-[#2C2416] mt-0.5">€ {420 + i * 80}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function VertexMockup() {
  return (
    <div className="w-full h-full bg-[#070711] overflow-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#2563EB] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          <span className="text-white text-xs font-semibold tracking-tight">Vertex</span>
        </div>
        <div className="flex gap-5">
          {["Product","Pricing","Docs","Blog"].map(n => (
            <span key={n} className="text-[10px] text-white/40">{n}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/40">Log in</span>
          <div className="bg-[#2563EB] text-white text-[9px] px-3 py-1.5 rounded font-semibold">Get started</div>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center pt-8 px-6">
        <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#60A5FA] text-[9px] px-3 py-1 rounded-full mb-4">
          <div className="w-1 h-1 rounded-full bg-[#2563EB]" />
          Now in Public Beta
        </div>
        <div className="text-white text-3xl font-bold tracking-tight leading-tight mb-3">
          Ship faster.<br />
          <span className="text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#2563EB,#7C3AED)", WebkitBackgroundClip: "text" }}>
            Scale smarter.
          </span>
        </div>
        <div className="text-white/40 text-[10px] max-w-[220px] mx-auto leading-relaxed mb-5">
          The all-in-one platform for modern engineering teams to build, deploy, and monitor.
        </div>
        <div className="flex justify-center gap-2 mb-6">
          <div className="bg-[#2563EB] text-white text-[9px] px-4 py-2 rounded font-semibold">Start for free</div>
          <div className="border border-white/10 text-white/60 text-[9px] px-4 py-2 rounded">View demo →</div>
        </div>
      </div>

      {/* Dashboard card */}
      <div className="mx-6 rounded-lg border border-white/10 bg-white/[0.03] p-3 overflow-hidden">
        <div className="flex gap-2 mb-2">
          {["#FF5F57","#FEBC2E","#28C840"].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="w-1/3 space-y-1.5">
            {[80, 55, 90, 40].map((w, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60" />
                <div className="h-1.5 bg-white/10 rounded-full" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[#0D1117] rounded p-2 flex items-end gap-1">
            {[30,55,40,70,50,85,60,95,75,88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === 9 ? "#2563EB" : "rgba(37,99,235,0.2)"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TerraMockup() {
  return (
    <div className="w-full h-full bg-[#F4F0E8] overflow-hidden" style={{ fontFamily: "Georgia, serif" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#5C7A3E]" />
          <span className="text-[#2D3B1F] text-xs font-semibold tracking-tight">Terra Organics</span>
        </div>
        <div className="flex gap-5">
          {["Shop","Our Farm","Recipes","About"].map(n => (
            <span key={n} className="text-[10px] text-[#5C7A3E]/70">{n}</span>
          ))}
        </div>
        <div className="bg-[#5C7A3E] text-white text-[9px] px-3 py-1.5 rounded-full">Order Now</div>
      </div>

      {/* Hero */}
      <div className="flex h-[55%]">
        {/* Left */}
        <div className="w-1/2 flex flex-col justify-center px-8">
          <div className="text-[10px] tracking-[0.2em] text-[#5C7A3E] uppercase mb-3">Farm to Table</div>
          <div className="text-[#2D3B1F] text-3xl leading-tight mb-4">
            Pure Nature.<br />Pure Taste.
          </div>
          <div className="text-[#7A8A6A] text-[10px] leading-relaxed mb-5 max-w-[200px]">
            Certified organic produce delivered fresh from our family farm every week.
          </div>
          <div className="flex gap-2">
            <div className="bg-[#5C7A3E] text-white text-[9px] px-4 py-2 rounded-full">Start your box</div>
            <div className="border border-[#5C7A3E]/30 text-[#5C7A3E] text-[9px] px-4 py-2 rounded-full">Learn more</div>
          </div>
        </div>
        {/* Right image */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A9E55] via-[#5C7A3E] to-[#3D5228]" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #A8C875 0%, transparent 60%), radial-gradient(circle at 70% 80%, #3D5228 0%, transparent 40%)"
            }}
          />
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-3 py-2">
            <div className="text-[8px] text-[#5C7A3E] font-semibold">✓ 100% Organic Certified</div>
          </div>
        </div>
      </div>

      {/* Product row */}
      <div className="flex gap-3 px-6 pt-4">
        {[
          { label: "Seasonal Box", price: "€29/week", color: "#A8C875" },
          { label: "Herb Garden", price: "€14/week", color: "#7A9E55" },
          { label: "Root Veggies", price: "€19/week", color: "#8B9E6A" },
        ].map((p) => (
          <div key={p.label} className="flex-1 bg-white rounded-lg p-3">
            <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: p.color + "40" }} />
            <div className="text-[9px] text-[#2D3B1F] font-semibold">{p.label}</div>
            <div className="text-[8px] text-[#5C7A3E] mt-0.5">{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
