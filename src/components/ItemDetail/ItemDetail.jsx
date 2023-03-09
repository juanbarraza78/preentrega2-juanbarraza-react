import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  return (
    <div className="d-flex">
      <div style={{ width: "40rem", margin: "3rem"}}>

        <img
          src={producto.url}
          className="card-img-top"
          alt={producto.nombre}
        />

      </div>
      <div className="rounded border " style={{ width: "40rem", margin: "3rem" }}>

        <p className="text-center fs-1 fw-bolder"> {producto.nombre} </p>
        <p className="text-center fs-2"> Precio: ${producto.precio} </p>
        <p className="text-center fs-2"> Cantidad: </p>
        <p className="text-center fs-4"> Descripcion: {producto.detail} </p>

      </div>
    </div>
  );
};

export default ItemDetail;
