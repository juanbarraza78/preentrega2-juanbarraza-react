import React, { useEffect, useState } from "react";
import { getProducts } from "../../mock/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductos(res));
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;