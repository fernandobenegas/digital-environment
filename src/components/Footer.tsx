import { useEffect } from "react"

export default function Footer() {
  useEffect(() => {
    const actualizarHora = () => {

    }

    actualizarHora()
    const interval = setInterval(actualizarHora, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="w-full h-20 border-t border-gray-800 bg-gray-950 mt-auto justify-center items-center flex">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Marca */}
        <div className="flex items-center gap-3">
        
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-md opacity-70 rounded-full" />
            <svg
              className="relative w-6 h-6 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-emerald-400 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]">
              Digital Environment
            </span>
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} Derechos Reservados(FB)
            </span>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
