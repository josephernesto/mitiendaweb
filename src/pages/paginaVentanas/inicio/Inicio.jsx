import "./inicio.css";
import { useState } from "react";
import { Brain, HeartHandshake, Mail, MapPin, Phone, Sparkles, Users } from "lucide-react";

import ninaArbol from "./imagenesinicio/nina-arbol.png";

const opcionesMenu = ["Inicio", "Especialidades", "Blog", "Contacto"];

const servicios = [
  {
    titulo: "Contacto Detallado",
    icono: HeartHandshake,
  },
  {
    titulo: "Demostracion Servicios",
    icono: Mail,
  },
  {
    titulo: "Personal y Organizacion",
    icono: Users,
  },
  {
    titulo: "Servicios del Cambio",
    icono: Sparkles,
  },
];

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <main className="pagina-inicio">
      <section className="hero-inicio">
        <header className="encabezado">
          <a className="marca" href="/" aria-label="Salud Mental Munoz">
            <span className="marca-icono">
              <Brain size={42} strokeWidth={1.8} />
            </span>
            <span className="marca-texto">
              <span>Salud Mental</span>
              <strong>Munoz</strong>
            </span>
          </a>

          <button
            className={`menu-toggle ${menuAbierto ? "menu-toggle-abierto" : ""}`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="menu-principal"
            className={`menu-principal ${menuAbierto ? "menu-abierto" : ""}`}
            aria-label="Menu principal"
          >
            {opcionesMenu.map((opcion) => (
              <a
                className={`menu-boton ${opcion === "Inicio" ? "menu-boton-activo" : ""}`}
                href={opcion === "Inicio" ? "/" : `/${opcion.toLowerCase()}`}
                key={opcion}
                onClick={() => setMenuAbierto(false)}
              >
                {opcion}
              </a>
            ))}
          </nav>
        </header>

        <div className="onda onda-clara" aria-hidden="true" />
        <div className="onda onda-oscura" aria-hidden="true" />

        <div className="hero-contenido">
          <div className="hero-texto">
            <p className="hero-etiqueta">Centro Clinico de Salud Mental</p>
            <h1>Conocenos</h1>
            <p>
              Acompanamos tu bienestar emocional con atencion cercana, ordenada y humana.
            </p>
          </div>

          <img
            className="imagen-arbol"
            src={ninaArbol}
            alt="Nina leyendo sobre un arbol"
          />
        </div>
      </section>

      <section className="servicios-section" aria-labelledby="servicios-titulo">
        <div className="contenido-seccion">
          <h2 id="servicios-titulo">Nuestros Servicios</h2>

          <div className="servicios-grid">
            {servicios.map(({ titulo, icono }) => {
              const ServicioIcono = icono;

              return (
              <article className="servicio-card" key={titulo}>
                <span className="servicio-icono">
                  <ServicioIcono size={28} strokeWidth={1.9} />
                </span>
                <h3>{titulo}</h3>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="footer-inicio">
        <div className="footer-contacto">
          <a href="tel:0212345689">
            <Phone size={23} />
            021 234 5689
          </a>
          <a href="mailto:info@smental.com">
            <Mail size={23} />
            info@smental.com
          </a>
        </div>

        <Brain className="footer-icono" size={64} strokeWidth={1.3} aria-hidden="true" />

        <p className="footer-direccion">
          <MapPin size={30} />
          Ejemplo de Salud Mental, Munoz
        </p>
      </footer>
    </main>
  );
}
