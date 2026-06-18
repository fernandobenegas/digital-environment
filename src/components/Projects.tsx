import { useState } from "react";
import ventasVideo from "../assets/videos/ventas.mp4";
import combosVideo from "../assets/videos/combos.mp4";

const projects = [
  {
    video: ventasVideo,
    title: "Sistema de Gestión para Minimercado",
    description:
      "Plataforma integral para administrar ventas, controlar inventario en tiempo real, gestionar productos, registrar movimientos de stock y acceder a reportes avanzados.",
  },
  {
    video: combosVideo,
    title: "Menú Digital para Bares y Restaurantes",
    description:
      "Aplicación diseñada para gestionar promociones, combos, pedidos y precios automáticamente, agilizando la atención al cliente.",
  },
  /*{
    //video: landingVideo,
    title: "Landing Pages Profesionales",
    description:
      "Sitios web modernos, rápidos y optimizados para captar clientes, mostrar servicios y aumentar las conversiones mediante formularios y WhatsApp.",
  },
  {
    //video: iaVideo,
    title: "Agentes Inteligentes con IA",
    description:
      "Asistentes virtuales entrenados para responder consultas, atender clientes, automatizar tareas y brindar soporte las 24 horas.",
  },
  {
    //video: stockVideo,
    title: "Sistema de Control de Stock",
    description:
      "Gestión completa de inventario con alertas de faltantes, historial de movimientos, estadísticas y control en tiempo real.",
  },
  {
    //video: camarasVideo,
    title: "Cámaras Inteligentes con IA",
    description:
      "Monitoreo avanzado mediante visión artificial con detección de personas, vehículos y objetos, generación de alertas y análisis en tiempo real.",
  },
  {
    //video: crmVideo,
    title: "CRM para Gestión de Clientes",
    description:
      "Centralización de contactos, seguimiento de oportunidades comerciales, historial de clientes y automatización de tareas de ventas.",
  },
  {
    //video: farmaciaVideo,
    title: "Automatización para Farmacias",
    description:
      "Soluciones para optimizar procesos internos, control de stock, gestión de medicamentos y reducción de errores operativos.",
  },
  {
    //video: ecommerceVideo,
    title: "Tiendas Online y E-commerce",
    description:
      "Desarrollo de plataformas de venta online integradas con medios de pago, catálogos de productos y gestión de pedidos.",
  },
  {
    //video: dashboardVideo,
    title: "Dashboards y Business Intelligence",
    description:
      "Paneles interactivos para visualizar métricas, indicadores clave y reportes estratégicos que facilitan la toma de decisiones.",
  },*/
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const project = projects[current];

  return (
    <section
      id="proyectos"
      className="py-20 px-4 md:px-8"
      style={{ marginBottom: "4rem" }}
    >
      {/* Título */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h2
          className="
            text-3xl md:text-5xl lg:text-6xl
            font-semibold leading-tight
            underline underline-offset-8
            decoration-[#8dff4f]
          "
        >
          Algunos de nuestros proyectos
        </h2>

        <p
          style={{
            marginTop: "1.5rem",
            color: "#a1a1aa",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.8",
          }}
        >
          Soluciones desarrolladas para optimizar procesos, automatizar tareas
          y mejorar la experiencia de clientes y negocios.
        </p>
      </div>

      {/* Video */}
      <div className="flex justify-center h-[220px] sm:h-[280px] md:h-[500px]">
        <video
          key={project.video}
          className="
            w-full max-w-6xl
            h-[220px] sm:h-[280px] md:h-[500px]
            object-cover rounded-2xl shadow-lg
            border border-zinc-800
          "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      {/* Información del proyecto */}
      <div
        style={{
          maxWidth: "900px",
          margin: "1.5rem auto 0",
          padding: "1.5rem",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#a1a1aa",
            lineHeight: "1.9",
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Indicadores */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          marginTop: "1.5rem",
        }}
      >
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? "32px" : "10px",
              height: "10px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background:
                current === index ? "#8dff4f" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
