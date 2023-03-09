import React from "react";
import art1 from "../../img/art1.jpeg";
import art2 from "../../img/art2.jpeg";
import edu1 from "../../img/edu1.jpeg";
import edu2 from "../../img/edu2.jpeg";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  
  return (
    <div class="row mt-5">
      {productos.map((producto) => (
        <div class="bg-white bg-opacity-75 rounded-4 shadow text-center mt-3 p-2 mb-3 col-xl-3 col-md-6 col-xs-12">
          <img
            src={producto.url}
            class="card-img-top"
            alt="${producto.nombre}"
            style={{ width: "50%" }}
          />
          <div class="card-body">
            <h3 class="text-center"> {producto.nombre} </h3>
            <p class="text-center"> Precio: ${producto.precio} </p>
            <Link to={`/producto/${producto.id}`}>
              <button class="btn btn-primary text-center">Ver producto</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
