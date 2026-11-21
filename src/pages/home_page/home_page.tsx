import ArticuleList from "../../components/articule_list/articule_list";
import { ArticulesListTotal } from "../../utils/articules.ts";
import { useEffect } from "react";
import "./home_page.css";

function HomePage() {
  useEffect(() => {
    return () => {
      document.title = "Home | Revista digital";
    };
  }, []);

  return (
    <>
      <section className="title-box">
        <h1 className="title">Tu Revista Digital</h1>
        <h2 className="subtitle">
          Revista informativa sobre temas de informatica.
        </h2>
      </section>
      <div className="general-info-box">
        <h3>¿Quienes somos?</h3>
        <p>
          Somos una revista digital dedicada a explorar y compartir los
          conocimientos de este fascinante mundo tecnológico. Nuestro objetivo
          es acercar la informática a todos nuestros lectores a través de
          contenido claro, actualizado y práctico. En nuestras páginas digitales
          encontrarás desde artículos especializados en desarrollo de software y
          herramientas de capacitación en tecnologías digitales, hasta guías
          accesibles sobre el uso cotidiano de la tecnología pensadas para el
          público general. Ya seas un programador experimentado o alguien que
          simplemente quiere entender mejor el entorno digital, este es tu
          espacio para aprender, descubrir e innovar.
        </p>
      </div>
      <ArticuleList articules={ArticulesListTotal} />
    </>
  );
}
export default HomePage;
