
export default function Hero() {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-transparent
      px-6
      pt-24
     
    "
    >
       
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
  <div
  className="
    absolute
    inset-0
    -z-10
    bg-[#050505]/20
   
    rounded-3xl
  "
/>
 <h1
  className="
    text-3xl md:text-5xl lg:text-6xl
    font-semibold tracking-tight leading-[1.1]
    text-white
  "
>
  
  Software de gestion y Agentes de IA
  <span className="block mt-2 text-[#8dff4f] font-medium">
    para agilizar y automatizar procesos 
  </span>
</h1>

<p
  style={{
    marginTop: "2.5rem",       // mt-10
    maxWidth: "42rem",         // max-w-2xl
    marginLeft: "auto",        // mx-auto
    marginRight: "auto",       // mx-auto
    fontWeight: 300,           // font-light
    color: "#d4d4d8",          // text-zinc-300
    fontSize: "1.125rem",      // text-lg
    lineHeight: "1.75rem",     // leading-relaxed
    textAlign: "center",       // text-center
    marginBottom: "2.5rem"     // mb-10
    
  }}
>
  Desarrollamos software a medida, diseñado y adaptado
  a las necesidades únicas de tu negocio.
  
</p>

  <div
    className="
      mt-12
      flex
      flex-col
      sm:flex-row
      justify-center
      gap-5
    "
  >
    {/* botones */}
  </div>

{/* Iconos de confianza */}
<div
  style={{
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
    marginTop: "4rem",
    width: "100%",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  {[
    { icon: "⚡", label: "Entrega rápida" },
    { icon: "🔒", label: "Código seguro" },
    { icon: "🛠️", label: "Soporte continuo" },
    { icon: "🎯", label: "A medida" },
  ].map((item) => (
    <div
      key={item.label}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        flex: 1,
        minWidth: 0,
        textAlign: "center",
      }}
    >
      
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "9999px",
          background: "rgba(141, 255, 79, 0.08)",
          border: "1px solid rgba(141, 255, 79, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.3rem",
          backdropFilter: "blur(10px)",
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>

      <span
        style={{
          color: "#a1a1aa",
          fontSize: "0.7rem",
          letterSpacing: "0.03em",
          lineHeight: "1.2",
        }}
      >
        {item.label}
      </span>
    </div>
    
  ))}
</div>
</div>

    </section>
  );
}