import type {
  Articule,
  ArticuleListProps,
} from "../../types/articule_interface";
import ArticuleCard from "../articule_card/articule_card";
import "./articule_list.css";

function ArticuleList({ articules }: ArticuleListProps) {
  if (articules.length === 0) {
    return <p>No hay artículos publicados todavía.</p>;
  }
  return (
    <div className="articule-list" id="articules">
      <h2 className="subtitle">Artículos</h2>
      <ul>
        {articules.map((art: Articule) => (
          <ArticuleCard key={art.id} articule={art} />
        ))}
      </ul>
    </div>
  );
}

export default ArticuleList;
