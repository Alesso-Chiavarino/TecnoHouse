const tbody = document.body;
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
});

// declaro variables
const botonVaciar = document.getElementById('vaciar-carrito')
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarStorage();
    actualizarCarrito();
})

let contenedorProductos = document.querySelector(".contenedorProductos");

// renderizo las cards en el DOM
const renderizarProductos = () => {
    productos.forEach((producto) => {

        const card=document.createElement("div");
        card.className="card card-edit col-md-3";
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
} 

// funcion para pushear el producto al array carrito
const agregarAlCarrito = (prodId) => {
    const item = productos.find((producto) => producto.id === prodId);
    carrito.push(item);
    actualizarCarrito();
    alerta();
}

// funcion para eliminar el producto al array carrito
const eliminarDelCarrito = (prodID) => {
    const item = carrito.find((producto) => producto.id === prodID);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarStorage();
    actualizarCarrito();
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        const cardCarrito = document.createElement('div');
        cardCarrito.className = 'card-carrito col-md-3';
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
        actualizarStorage();
    });
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

const actualizarStorage = () => localStorage.setItem('carrito', JSON.stringify(carrito));



const productosFiltrados = [];

const filtrarProducto = (categoriaProd) => {
    const categoria = productos.filter((producto) => producto.categoria === categoriaProd);
    productosFiltrados.push(categoria);
}


let inputs = document.getElementsByTagName('input')

//PLACAS
inputs[1].onclick = () => {
    contenedorFiltrado.innerHTML = '';

    filtrarProducto(productos[2].categoria);

    padreProductos.style.display = 'none';
    contenedorFiltrado.style.display = 'block'

        productosFiltrados[0].forEach((producto) => {
        const card = document.createElement('div')
        card.className = 'card card-edit col-md-3'
        card.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top img-producto" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button id="agregar${producto.id}" class="btn btn-dark">Agregar <i class="fas-fa-shopping-cart"</i></button>
        </div>
        `
        contenedorFiltrado.append(card);
    })
}

//TODO
inputs[0].onclick = () => {
    padreProductos.style.display = 'flex'
    contenedorFiltrado.style.display = 'none'
}

// renderizo
renderizarProductos();

const padreProductos = document.getElementById('contenedorProductos')
const contenedorFiltrado = document.getElementById('contenedorFiltrado')