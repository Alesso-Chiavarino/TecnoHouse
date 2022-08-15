const tbody = document.body;
let carrito = [];


const productos = [
  { id: 1, nombre: "Placa de video", precio: 500000, imagen: '../img/placadevideo1.jpg'},
  { id: 2, nombre: "Procesador", precio: 30000, imagen: '../img/procesador1.jpeg', id2: 'btnComprar' },
  { id: 3, nombre: "Placa madre", precio: 25000, imagen: '../img/placa1.jpg', id2: 'btnComprar' },
  { id: 4, nombre: "Fuente de poder", precio: 20000, imagen: '../img/fuente1.jpg', id2: 'btnComprar' },
  { id: 1, nombre: "Memoria ram", precio: 5000, imagen: '../img/ram1.png' },
  { id: 2, nombre: "Disco rigido", precio: 7000, imagen: '../img/discoRigido1.jpg' },
  { id: 3, nombre: "Disco solido", precio: 10000, imagen: '../img/discoSolido1.jpg' },
  { id: 4, nombre: "Cooler", precio: 3000, imagen: '../img/cooler1.png' },
  { id: 5, nombre: "Disco M2", precio: 10000, imagen: '../img/discom21.jpg' },
];


//cards
let cartas=document.querySelector(".cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card m-5 col-md-3";
    carta.innerHTML=`
        <img src="${producto.imagen}" class="card-img-top img-producto" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button class="btn btn-dark">Comprar</a>
        </div>
    `;
    cartas.append(carta);
}


