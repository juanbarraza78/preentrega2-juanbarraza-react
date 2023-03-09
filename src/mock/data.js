import art1 from "../img/art1.jpeg";
import art2 from "../img/art2.jpeg";
import edu1 from "../img/edu1.jpeg";
import edu2 from "../img/edu2.jpeg";

const productos = [
    {
        nombre: "art1",
        id: 1,
        url: art1,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet augue pharetra, efficitur turpis a, eleifend neque. Vestibulum eu est nec ante sollicitudin efficitur. Nullam sed magna tincidunt, rutrum magna ac, vulputate ex. Integer eros leo, rhoncus at dictum elementum, venenatis porta augue. Donec rhoncus porttitor lobortis. Curabitur sollicitudin laoreet mattis. Aliquam semper fermentum lectus, id varius risus. Aenean ac orci a nulla molestie viverra a ut erat. Vivamus fermentum tincidunt quam pellentesque eleifend. Fusce non turpis ex. Curabitur egestas facilisis sodales. In tristique elit a ante tristique, et semper erat molestie. Vestibulum eu metus imperdiet, aliquet risus ut, rhoncus ipsum.",
        precio: 40,
        categoria: "arte"
    },
    {
        nombre: "art1",
        id: 2,
        url: art2,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet augue pharetra, efficitur turpis a, eleifend neque. Vestibulum eu est nec ante sollicitudin efficitur. Nullam sed magna tincidunt, rutrum magna ac, vulputate ex. Integer eros leo, rhoncus at dictum elementum, venenatis porta augue. Donec rhoncus porttitor lobortis. Curabitur sollicitudin laoreet mattis. Aliquam semper fermentum lectus, id varius risus. Aenean ac orci a nulla molestie viverra a ut erat. Vivamus fermentum tincidunt quam pellentesque eleifend. Fusce non turpis ex. Curabitur egestas facilisis sodales. In tristique elit a ante tristique, et semper erat molestie. Vestibulum eu metus imperdiet, aliquet risus ut, rhoncus ipsum.",
        precio: 40,
        categoria: "arte"
    },
    {
        nombre: "edu1",
        id: 3,
        url: edu1,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet augue pharetra, efficitur turpis a, eleifend neque. Vestibulum eu est nec ante sollicitudin efficitur. Nullam sed magna tincidunt, rutrum magna ac, vulputate ex. Integer eros leo, rhoncus at dictum elementum, venenatis porta augue. Donec rhoncus porttitor lobortis. Curabitur sollicitudin laoreet mattis. Aliquam semper fermentum lectus, id varius risus. Aenean ac orci a nulla molestie viverra a ut erat. Vivamus fermentum tincidunt quam pellentesque eleifend. Fusce non turpis ex. Curabitur egestas facilisis sodales. In tristique elit a ante tristique, et semper erat molestie. Vestibulum eu metus imperdiet, aliquet risus ut, rhoncus ipsum.",
        precio: 40,
        categoria: "educacion"
    },
    {
        nombre: "edu2",
        id: 4,
        url: edu2,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet augue pharetra, efficitur turpis a, eleifend neque. Vestibulum eu est nec ante sollicitudin efficitur. Nullam sed magna tincidunt, rutrum magna ac, vulputate ex. Integer eros leo, rhoncus at dictum elementum, venenatis porta augue. Donec rhoncus porttitor lobortis. Curabitur sollicitudin laoreet mattis. Aliquam semper fermentum lectus, id varius risus. Aenean ac orci a nulla molestie viverra a ut erat. Vivamus fermentum tincidunt quam pellentesque eleifend. Fusce non turpis ex. Curabitur egestas facilisis sodales. In tristique elit a ante tristique, et semper erat molestie. Vestibulum eu metus imperdiet, aliquet risus ut, rhoncus ipsum.",
        precio: 40,
        categoria: "educacion"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}