import { useEffect } from "react";
import "./creator_page.css";

function GitHubPage() {
  useEffect(() => {
    document.title = "Repositorio | Mi sitio";
  }, []);

  const githubUrl =
    "https://github.com/razielsr84/cultura-digital-1-final-proyect";

  return (
    <main className="github-page">
      <header className="github-header">
        <span className="github-header__tag">PROYECTO FINAL</span>

        <h1 className="github-header__title">Explora el código</h1>

        <p className="github-header__description">
          Conoce cómo está construido este proyecto, explora su código fuente y
          descubre las tecnologías utilizadas en su desarrollo.
        </p>
      </header>

      <section className="github-repository">
        <div className="github-repository__icon">
          <svg
            viewBox="0 0 24 24"
            width="64"
            height="64"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
          </svg>
        </div>

        <h2>Repositorio en GitHub</h2>

        <p>
          Este repositorio contiene los archivos, componentes, estilos y
          recursos necesarios para comprender el funcionamiento del programa.
        </p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          Visitar repositorio
          <span>↗</span>
        </a>
      </section>

      <section className="github-technologies">
        <h2>Tecnologías utilizadas</h2>

        <div className="github-technologies__grid">
          <div className="technology-card">
            <h3>React</h3>
            <p>Construcción de interfaces interactivas.</p>
          </div>

          <div className="technology-card">
            <h3>TypeScript</h3>
            <p>Desarrollo con tipado estático.</p>
          </div>

          <div className="technology-card">
            <h3>CSS</h3>
            <p>Diseño y estilos de la aplicación.</p>
          </div>

          <div className="technology-card">
            <h3>React Router</h3>
            <p>Navegación entre páginas.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GitHubPage;
