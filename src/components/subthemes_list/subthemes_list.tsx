import type {
  Subtheme,
  SubthemeCardProps,
  SubthemeListProps,
} from "../../types/subtheme_interface";
import Galery from "../galery/galery";
import "./subthemes_list.css";

function SubthemeCard({ subtheme }: SubthemeCardProps) {
  return (
    <li className="subtheme-card">
      <div className="subtheme-card__content">
        <h3 className="subtheme-card__title">{subtheme.title}</h3>
        <p className="subtheme-card__info">{subtheme.info}</p>
      </div>
      <Galery paths={[subtheme.image_path]} type={3} />
    </li>
  );
}

function SubthemeList({ subthemes }: SubthemeListProps) {
  if (subthemes.length === 0) {
    return <p>No hay temas relacionados.</p>;
  }
  return (
    <div className="subthemes-list" id="subthemes">
      <h2 className="subtitle">Es importante tambien: </h2>
      <ul>
        {subthemes.map((sub: Subtheme) => (
          <SubthemeCard key={sub.id} subtheme={sub} />
        ))}
      </ul>
    </div>
  );
}

export default SubthemeList;
