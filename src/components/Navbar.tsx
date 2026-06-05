import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-emerald-500/30"
  style={{
    background: "linear-gradient(90deg, #000000 0%, #052e1a 50%, #000000 100%)",
    boxShadow: "0 0 30px rgba(16, 185, 129, 0.3), 0 1px 0 rgba(16, 185, 129, 0.2)",
  }}
>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", height: "5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ position: "relative" }}>
            {/* Banda verde fluorescente */}
            <div style={{ position: "absolute", inset: 0, background: "rgb(16,185,129)", filter: "blur(8px)", opacity: 0.7, borderRadius: "9999px" }} />
            <svg className="relative w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <span className="text-emerald-400 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]">
            Digital Environment
          </span>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex gap-8 font-semibold">
          <a href="#servicios" className="text-white hover:text-emerald-400 transition-colors">Servicios</a>
          <a href="#proyectos" className="text-white hover:text-emerald-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="text-white hover:text-emerald-400 transition-colors">Contacto</a>
        </div>

        {/* Burger mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="flex flex-col p-4 gap-4">
            <a href="#servicios" className="text-white hover:text-emerald-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="text-white hover:text-emerald-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="text-white hover:text-emerald-400 transition-colors">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}