import type { ArticuleListProps } from "../../types/articule_interface";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import "./articule_page.css";
import Galery from "../../components/galery/galery";
import SubthemeList from "../../components/subthemes_list/subthemes_list";

function ArticulePage({ articules }: ArticuleListProps) {
  const { titulo } = useParams();

  // Busca el artículo cuyo slug coincida con el parámetro de la URL
  const articule = articules.find(
    (art) => art.slug.toLowerCase() === titulo?.toLowerCase(),
  );

  useEffect(() => {
    if (articule) {
      document.title = `${articule.title} | Revista digital`;
    }

    return () => {
      document.title = "Revista digital";
    };
  }, [articule]);

  if (!articule) {
    return (
      <div>
        <h2>Artículo "{titulo}" no encontrado</h2>
        <Link to="/">Volver a la lista</Link>
      </div>
    );
  }

  const image_paths: string[] = [
    articule.images_path[1],
    articule.images_path[2],
  ];

  return (
    <article className="articule-body">
      {/* ENCABEZADO */}
      <header className="title-box">
        <h1 className="title">{articule.title}</h1>
      </header>

      {/* IMAGEN PRINCIPAL */}
      <section className="article-hero">
        <Galery paths={[articule.images_path[0]]} type={1} />
      </section>

      {/* INFORMACIÓN GENERAL */}
      <section className="general-info-box">
        <h2>Información sobre lo investigado</h2>
        <p>{articule.info}</p>
      </section>

      {/* GALERÍA SECUNDARIA */}
      <section className="article-gallery">
        <Galery paths={image_paths} type={2} />
      </section>

      {/* SUBTEMAS */}
      <SubthemeList subthemes={articule.subthemes} />

      {/* REGRESAR */}
      <footer className="article-footer">
        <Link to="/" className="article-back-link">
          ← Volver a la lista
        </Link>
      </footer>
    </article>
  );
}

export default ArticulePage;
