import "./inicio.css";
import { useState } from "react";

import esquinaDerecha from "./imagenesinicio/esquina_derecha_arriba.png";
import esquinaIzquierda from "./imagenesinicio/esquina_izquierda_abajo.png";

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="pagina">
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
        <a className="menu-boton menu-boton-activo" href="/" onClick={() => setMenuAbierto(false)}>
          Inicio
        </a>
        <a className="menu-boton" href="/especialidades" onClick={() => setMenuAbierto(false)}>
          Especialidades
        </a>
        <a className="menu-boton" href="/blog" onClick={() => setMenuAbierto(false)}>
          Blog
        </a>
        <a className="menu-boton" href="/contacto" onClick={() => setMenuAbierto(false)}>
          Contacto
        </a>
      </nav>

      <img
        src={esquinaDerecha}
        className="decoracion derecha-arriba"
        alt=""
        aria-hidden="true"
      />
      <img
        src={esquinaIzquierda}
        className="decoracion izquierda-abajo"
        alt=""
        aria-hidden="true"
      />
      <span className="forma espiral-centro" aria-hidden="true" />
      <span className="forma espiral-arriba" aria-hidden="true" />
      <span className="forma espiral-abajo" aria-hidden="true" />
      <span className="flor flor-1" aria-hidden="true" />
      <span className="flor flor-2" aria-hidden="true" />
      <span className="flor flor-3" aria-hidden="true" />
      <span className="flor flor-4" aria-hidden="true" />

      <div className="contenido">
        <h1>CONÓCENOS</h1>
        <p>Centro Clínico de Salud Mental "Muñoz"</p>
      </div>

    </div>
  );
}
