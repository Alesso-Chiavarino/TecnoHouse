// const tbody = document.body;
// let carrito = [];

// const productos = [
//   { id: 1, nombre: "Placa de video", precio: 500000, imagen: './img/placadevideo1.jpg', id2: 'btnComprar' }
//   // { id: 2, nombre: "Procesador", precio: 30000, imagen: './img/procesador1.jpeg', id2: 'btnComprar' },
//   // { id: 3, nombre: "Placa madre", precio: 25000, imagen: './img/placa1.jpg', id2: 'btnComprar' },
//   // { id: 4, nombre: "Fuente de poder", precio: 20000, imagen: './img/fuente1.jpg', id2: 'btnComprar' },
// ];

// const productos2 = [
//   { id: 1, nombre: "Memoria ram", precio: 5000 },
//   { id: 2, nombre: "Disco rigido", precio: 7000 },
//   { id: 3, nombre: "Disco solido", precio: 10000 },
//   { id: 4, nombre: "Cooler", precio: 3000 },
// ];

// //metodo concat
// console.log(productos.concat(productos2));

// //find

// console.log(productos.find(producto => producto.nombre == 'Procesador'));

// //lenght 

// console.log(productos.length);

// //push 

// const produc = [
//   'hola ', 'como '
// ];

// produc.push('estas');

// console.log(produc);

//cards
// let cartas=document.querySelector(".cartas");
// // for(const producto of productos){
//     let carta=document.createElement("div");
//     carta.className="card m-5 col-md-3";
//     carta.innerHTML=`
//         <img src="${productos[0].imagen}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${productos[0].nombre}</h5>
//             <p class="card-text">${productos[0].precio}</p>
//             <button class="btn btn-primary" id=${productos[0].id2}>Comprar</a>
//         </div>
//     `;
//     cartas.append(carta);
// // }

// let btnComprar = document.getElementById('btnComprar');
// btnComprar.addEventListener('click', ()=>{
//   carrito.push(productos[0]);
//   console.log(carrito);
//   alert('agregaste Placa de video');
// })


// PRIMERA ENTREGA ------------------------------------------------------

let carrito = [];
let total = 0;

const productos = [
  { id: 1, nombre: "Placa de video", precio: 500000, imagen: './img/placadevideo1.jpg', id2: 'btnComprar' },
  { id: 2, nombre: "Procesador", precio: 30000, imagen: './img/procesador1.jpeg', id2: 'btnComprar' },
  { id: 3, nombre: "Placa madre", precio: 25000, imagen: './img/placa1.jpg', id2: 'btnComprar' },
  { id: 4, nombre: "Fuente de poder", precio: 20000, imagen: './img/fuente1.jpg', id2: 'btnComprar' },
];

  alert('Bienvenido a TecnoHouse, donde encontrarás los mejores productos tecnologicos de alta calidad');

  let eleccion = prompt('Escoje un producto a eleccion: \n\n 1. Placa de video\n 2. Procesador\n 3. Placa madre\n 4. Fuente de poder\n\nPara terminar, escribir ESC');

  while(eleccion.toUpperCase() != 'ESC') {
    if (eleccion == 1) {
      carrito.push(productos[0]);
      total += productos[0].precio;
      alert('agregaste Placa de video al carrito!');
    } else if (eleccion == 2) {
      carrito.push(productos[1]);
      total += productos[1].precio;
      alert('agregaste Procesador al carrito!');
    } else if (eleccion == 3) {
      carrito.push(productos[2]);
      total += productos[2].precio;
      alert('agregaste Placa madre al carrito!');
    } else if (eleccion == 4) {
      carrito.push(productos[3]);
      total += productos[3].precio;
      alert('agregaste Fuente de poder al carrito!');
    } else {
      alert('Por favor ingrese la tecla correcta')
    }

    eleccion = prompt('Escoje un producto a eleccion: \n\n 1. Placa de video\n 2. Procesador\n 3. Placa madre\n 4. Fuente de poder\n\nPara terminar, escribir ESC');
  }

  console.log('Los productos que elegiste son: ' ,carrito)
  console.log('El precio total es: $'+total);


  // Aclaración: No usé el switch porque por algún motivo de la vida no me funcionaba, PERO LITERAL no funcionaba, no es que lo escribí mal jajja, aca te dejo el menú con switch por si queres probar: 
  
  // switch(eleccion) {
  //   case 1:
  //     carrito.push(productos[0]);
  //     total += productos[0].precio;
  //     alert('agregaste Placa de video al carrito!');
  //     break;
  //   case 2:
  //     carrito.push(productos[1]);
  //     total += productos[1].precio;
  //     alert('agregaste Procesador al carrito!');
  //     break;
  //   case 3:
  //     carrito.push(productos[2]);
  //     total += productos[2].precio;
  //     alert('agregaste Placa madre al carrito!');
  //     break;
  //   case 4:
  //     carrito.push(productos[3]);
  //     total += productos[3].precio;
  //     alert('agregaste Fuente de poder al carrito!');
  //     break;
  //   default: 
  //     'Por favor, ingrese la tecla correcta';
  //     break;
  // }

  
// -----------------------------------------------------------------------------
