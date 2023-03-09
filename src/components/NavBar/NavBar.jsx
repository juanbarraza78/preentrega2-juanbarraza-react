import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link 
          to={"/"}
          className="navbar-brand text-light fs-1 me-5" href="#">
            Lila
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item text-light ms-5">
                <Link to={"/contactos"}>Contactos</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/arte"}>Arte</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/educacion"}>Educacion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
