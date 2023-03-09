// cuenta con un producto en especifico
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto]=useState({})
  const { id } = useParams();
  useEffect(()=>{
    getProducts()
    .then((res)=> setProducto(res.find((prod)=> prod.id === parseInt(id))))
  },[id])

  return <div> <ItemDetail producto={producto}/> </div>;
};

export default ItemDetailContainer;