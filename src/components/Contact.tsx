import { useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [errores, setErrores] = useState<{ nombre?: string; email?: string; telefono?: string; mensaje?: string }>({});

  const handleSubmit = async () => {
    const nuevosErrores: { nombre?: string; email?: string; telefono?: string; mensaje?: string } = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      nuevosErrores.email = "El email es obligatorio";
    } else if (!regexEmail.test(email)) {
      nuevosErrores.email = "Ingresá un email válido (ej: usuario@email.com)";
    }

    const regexTel = /^\+?[\d\s\-().]{7,20}$/;
    if (telefono.trim() && !regexTel.test(telefono)) {
      nuevosErrores.telefono = "Ingresá un teléfono válido";
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    setEstado("enviando");
    try {
      const res = await fetch("https://formspree.io/f/xbderywr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, telefono, mensaje }),
      });
      if (res.ok) {
        setEstado("ok");
        setNombre(""); setEmail(""); setTelefono(""); setMensaje("");
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1.25rem",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const errorStyle = {
    color: "#ff4f4f",
    fontSize: "0.78rem",
    marginTop: "0.35rem",
  };

  return (
    <section id="contacto" style={{ width: "100%", padding: "8rem 1.5rem" }}>
      <div style={{ width: "100%", maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            ¿Nos contas tu idea para desarrollar
            <span className="text-[#8dff4f]"> tu proyecto?</span>
          </h2>
          <p style={{ marginTop: "1.5rem", maxWidth: "40rem", margin: "1.5rem auto 0", color: "#a1a1aa", fontSize: "1.125rem", lineHeight: "2", textAlign: "center" }}>
            Completá el formulario o escribinos directo por WhatsApp.
          </p>
        </div>

        {/* Card glassmorphism */}
        <div style={{
          maxWidth: "52rem",
          width: "100%",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(141, 255, 79, 0.15)",
          borderRadius: "2rem",
          padding: "clamp(1.5rem, 4vw, 3rem)",
          boxShadow: "0 0 60px rgba(141, 255, 79, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", color: "#8dff4f", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Nombre</label>
            <input type="text" placeholder="Tu nombre" value={nombre}
              onChange={e => setNombre(e.target.value)} style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(141,255,79,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            {errores.nombre && <p style={errorStyle}>⚠ {errores.nombre}</p>}
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", color: "#8dff4f", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Email</label>
            <input type="email" placeholder="@email.com" value={email}
              onChange={e => setEmail(e.target.value)} style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(141,255,79,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            {errores.email && <p style={errorStyle}>⚠ {errores.email}</p>}
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", color: "#8dff4f", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Teléfono</label>
            <input type="tel" placeholder="+54 9 11 1234 5678" value={telefono}
              onChange={e => setTelefono(e.target.value)} style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(141,255,79,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            {errores.telefono && <p style={errorStyle}>⚠ {errores.telefono}</p>}
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", color: "#8dff4f", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Mensaje</label>
            <textarea rows={4} placeholder="Contanos sobre tu proyecto..." value={mensaje}
              onChange={e => setMensaje(e.target.value)}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={e => e.target.style.borderColor = "rgba(141,255,79,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            {errores.mensaje && <p style={errorStyle}>⚠ {errores.mensaje}</p>}
          </div>

          {/* Feedback */}
          {estado === "ok" && (
            <p style={{ color: "#8dff4f", textAlign: "center", marginBottom: "1rem", fontSize: "0.9rem" }}>
              ✅ Mensaje enviado correctamente
            </p>
          )}
          {estado === "error" && (
            <p style={{ color: "#ff4f4f", textAlign: "center", marginBottom: "1rem", fontSize: "0.9rem" }}>
              ❌ Hubo un error, intentá de nuevo
            </p>
          )}

          {/* Botón enviar */}
          <button
            onClick={handleSubmit}
            disabled={estado === "enviando"}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "0.875rem",
              background: estado === "enviando" ? "#555" : "linear-gradient(135deg, #8dff4f, #5edb1f)",
              color: "#000",
              fontWeight: "700",
              fontSize: "1rem",
              border: "none",
              cursor: estado === "enviando" ? "not-allowed" : "pointer",
              boxShadow: "0 0 30px rgba(141, 255, 79, 0.35)",
              marginBottom: "1.25rem",
              transition: "transform 0.2s",
            }}
          >
            {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
            <span style={{ color: "#52525b", fontSize: "0.875rem" }}>o</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
          </div>

        </div>
      </div>
    </section>
  );
}