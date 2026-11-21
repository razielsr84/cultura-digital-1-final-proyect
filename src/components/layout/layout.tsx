import { NavLink, Outlet } from "react-router";
import "./layout.css";

function Layout() {
  return (
    <>
      <header className="navbar-fija">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/creator"
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Creador
        </NavLink>
      </header>

      {/* Aquí cambia el contenido según la ruta, respetando el margen superior */}
      <main className="contenido-principal">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
