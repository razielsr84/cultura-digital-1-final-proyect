import "./galery.css";

interface GaleryInterface {
  paths: string[];
  type: number;
}

function Galery({ paths, type }: GaleryInterface) {
  if (type === 1) {
    return (
      <div className="galery1">
        <img src={paths[0]} alt="Imagen del artículo" />
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="galery2">
        <img src={paths[0]} alt="primera imagen del artículo" />
        <img src={paths[1]} alt="segunda imagen del artículo" />
      </div>
    );
  }
  if (type === 3) {
    return (
      <div className="galery3">
        <img src={paths[0]} alt="Imagen subtema" />
      </div>
    );
  }
  return <p>No hay un tipo definido de galeria</p>;
}

export default Galery;
