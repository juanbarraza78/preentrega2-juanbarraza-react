// cuenta con un producto en especifico
import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
