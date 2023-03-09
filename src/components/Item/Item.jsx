import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={producto.url} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h3 className="text-center"> {producto.nombre} </h3>
        <p className="text-center"> Precio: ${producto.precio} </p>
      </div>
      <Link
        className="btn btn-primary text-center"
        to={`/producto/${producto.id}`}
      >
        Ver producto
      </Link>
    </div>
  );
};

export default Item;
