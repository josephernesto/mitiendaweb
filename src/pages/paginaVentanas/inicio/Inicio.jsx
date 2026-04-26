import "./inicio.css";
import arbol from "./imagenesinicio/nina-arbol.PNG"; // ruta correcta

export default function Inicio() {
  return (
    <>
      {/* HERO (parte azul de arriba) */}
      <section className="hero-section">
        <div className="hero-texto">
          <h1>CONÓCENOS</h1>
          <p>Centro Clínico de Salud Mental "Muñoz"</p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios-section">
        <h2>NUESTROS SERVICIOS</h2>

        <div className="cards">
          <div className="card">Contacto Detallados</div>
          <div className="card">Demostración Servicios</div>
          <div className="card">Personal y Organización</div>
          <div className="card">Servicios del Cambio</div>
        </div>
      </section>

      {/* FOOTER (tierra + árbol) */}
      <footer className="inicio-footer">
        <div className="footer-contenido">
          <p>📞 021 234 5689</p>
          <p>✉️ info@snental.com</p>
        </div>

        {/* 🌳 ÁRBOL */}
        <div className="arbol-container">
          <img src={arbol} alt="Árbol con niña" className="imagen-nina" />
        </div>
      </footer>
    </>
  );
}