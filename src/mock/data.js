import art1 from "../img/art1.jpeg";
import art2 from "../img/art2.jpeg";
import edu1 from "../img/edu1.jpeg";
import edu2 from "../img/edu2.jpeg";

const productos = [
    {
      nombre: "art1",
      id: 1,
      url: art1,
      detail: "blabla",
      precio: 40,
    },
    {
      nombre: "art1",
      id: 2,
      url: art2,
      detail: "blabla",
      precio: 40,
    },
    {
      nombre: "edu1",
      id: 3,
      url: edu1,
      detail: "blabla",
      precio: 40,
    },
    {
      nombre: "edu2",
      id: 4,
      url: edu2,
      detail: "blabla",
      precio: 40,
    },
  ];

  export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
  }