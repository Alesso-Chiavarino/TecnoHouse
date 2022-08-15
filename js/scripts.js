const tbody = document.body;
let carrito = [];

// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('carrito')){
//         carrito = JSON.parse(localStorage.getItem('carrito'))
//         actualizarCarrito()
//     }
// })

const botonVaciar = document.getElementById('vaciar-carrito')
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


const productos = [
  { id: 1, nombre: "Placa de video", precio: 500000, imagen: '../img/placadevideo1.jpg'},
  { id: 2, nombre: "Procesador", precio: 30000, imagen: '../img/procesador1.jpeg', id2: 'btnComprar' },
  { id: 3, nombre: "Placa madre", precio: 25000, imagen: '../img/placa1.jpg', id2: 'btnComprar' },
  { id: 4, nombre: "Fuente de poder", precio: 20000, imagen: '../img/fuente1.jpg', id2: 'btnComprar' },
  { id: 5, nombre: "Memoria ram", precio: 5000, imagen: '../img/ram1.png' },
  { id: 6, nombre: "Disco rigido", precio: 7000, imagen: '../img/discoRigido1.jpg' },
  { id: 7, nombre: "Disco solido", precio: 10000, imagen: '../img/discoSolido1.jpg' },
  { id: 8, nombre: "Cooler", precio: 3000, imagen: '../img/cooler1.png' },
  { id: 9, nombre: "Disco M2", precio: 10000, imagen: '../img/discom21.jpg' },
];


//cards

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

let contenedorProductos = document.querySelector(".contenedorProductos");

productos.forEach((producto) => {

    const card=document.createElement("div");
    card.className="card m-5 col-md-3";
    card.innerHTML=`
        <img src="${producto.imagen}" class="card-img-top img-producto" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button id="agregar${producto.id}" class="btn btn-dark">Agregar <i class="fas-fa-shopping-cart"</i></button>
        </div>
    `;
    contenedorProductos.appendChild(card);

    const boton = document.getElementById(`agregar${producto.id}`);
    
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });
    
});

const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodID) => {
    const item = carrito.find((producto) => producto.id === prodID);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        const cardCarrito = document.createElement('div');
        cardCarrito.className = 'card m-5 col-md-3';
        cardCarrito.innerHTML = `
        <div class="d-flex flex-row carrito-item justify-content-between">
            <img class="img-prod-carrito" src="${producto.imagen}" >
            <div>
                <p class="carritoNombre">${producto.nombre}</p>
                <p class="carritoPrecio">$ ${producto.precio}</p>
            </div>
            <button onclick ="eliminarDelCarrito(${producto.id})" class="btn btn-danger">-</button>
        </div>
        `;
        contenedorCarrito.appendChild(cardCarrito);
        //localStorage.setItem('carrito', JSON.stringify(carrito))
    });
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}