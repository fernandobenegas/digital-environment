import {
  MonitorSmartphone,
  Package,
  ShoppingCart,
  Globe,
  Cpu,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: <ShoppingCart size={42} />,
    title: "Sistemas de Ventas",
    description:
      "Automatización de ventas, control de operaciones y reportes para optimizar la gestión diaria.",
  },
  {
    icon: <Package size={42} />,
    title: "Control de Stock",
    description:
      "Inventario inteligente con alertas, historial de movimientos y control en tiempo real.",
  },
  {
    icon: <MonitorSmartphone size={42} />,
    title: "Software a Medida",
    description:
      "Desarrollo de soluciones personalizadas adaptadas a las necesidades específicas de cada negocio.",
  },
  {
    icon: <Globe size={42} />,
    title: "Landing Pages",
    description:
      "Sitios modernos y optimizados para captar clientes y fortalecer tu presencia digital.",
  },
  {
    icon: <Bot size={42} />, // sugerencia: ícono de robot/IA
    title: "Agentes de IA",
    description:
      "Implementación de asistentes inteligentes para atención al cliente, análisis de datos y soporte en la toma de decisiones.",
  },
  {
    icon: <Cpu size={42} />, // sugerencia: ícono de automatización/robotics
    title: "Robótica para Negocios",
    description:
      "Automatización de procesos repetitivos en sectores como farmacias y retail, mejorando eficiencia y reduciendo errores.",
  },
];


export default function Services() {
  return (
    <section
    id="servicios"
    style={{
    width: "100%",
    padding: "4rem 1rem 6rem",
      }}
    >
      {/* Container Principal */}
      <div
        style={{
          width: "100%",
          maxWidth: "72rem",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
        {/* Header */}
        <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
          <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          <hr className="my-8 border-[#8dff4f]  mx-auto" />
          Soluciones para
          <span style={{ color: "#8dff4f" }}>
            {" "}hacer crecer tu negocio
          </span>
        </h2>
        <hr className="my-8 border-[#8dff4f]  mx-auto" />
         <p
          style={{
            marginTop: "1.5rem",
            maxWidth: "48rem",
            fontWeight: 500,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#a1a1aa",
            fontSize: "1rem",
            lineHeight: "1.8",
            padding: "0 0.5rem",
          }}
        >
            Creamos herramientas digitales enfocadas en productividad,
            automatización y crecimiento para empresas y emprendedores.
            </p>
        </div>
        


        {/* Grid */}
        <div
        style={{
          display: "grid",
          gap: "1.5rem",
          width: "100%",
          gridTemplateColumns:
            window.innerWidth < 768
              ? "1fr"
              : "repeat(2, 1fr)",
        }}
      >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                bg-[#0b0b0b]/80
                backdrop-blur-sm
                border
                border-zinc-800
                rounded-3xl
                p-10
                text-center
                transition-all
                duration-300
                hover:border-[#8dff4f]
                hover:-translate-y-2
              "
            >
              <div className="text-[#8dff4f] mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-8">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}