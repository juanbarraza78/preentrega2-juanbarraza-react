import React, { useEffect, useState } from 'react'
import { getProducts } from "../../mock/data";
import Category from '../Category/Category';

const CategoryContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductos(res));
  }, []);

  return (
    <Category productos={productos}></Category>
  )
}

export default CategoryContainer
