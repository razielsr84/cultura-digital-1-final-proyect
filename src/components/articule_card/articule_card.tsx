import { Link } from "react-router";
import type { ArticuleCardProps } from "../../types/articule_interface";
import "./articule_card.css";

function ArticuleCard({ articule }: ArticuleCardProps) {
  return (
    <li className="articule-card">
      <h3 className="articule-card__title">{articule.title}</h3>

      {articule.images_path[0] && (
        <img
          src={articule.images_path[0]}
          alt={articule.title}
          className="articule-card__image"
        />
      )}

      <p className="articule-card__info">{articule.info.slice(0, 80)}...</p>

      <Link to={`/article/${articule.slug}`} className="articule-card__link">
        Leer artículo completo →
      </Link>
    </li>
  );
}

export default ArticuleCard;
