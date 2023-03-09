import React from "react";
import { useParams } from "react-router-dom";
import Item from '../Item/Item'

const Category = ({ productos }) => {

    const {categoria} = useParams()
    console.log(categoria);

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap mt-5">
      {productos.map((prod)=> prod.categoria === categoria && <Item key={prod.id} producto={prod}/>)}
    </div>
  );
};

export default Category;
