const contProdsComprar = document.getElementById('cont-prods-compra')
const btnCompra = document.getElementById('btn_compra_definitiva')
const cont_compra = document.getElementById('seccion_compra')
const cont_mensaje = document.getElementById('cont_mensaje')


//comprar productos
document.addEventListener("DOMContentLoaded", () => {
  carrito.forEach((producto) => {
    // console.log(producto)

    contProdsComprar.innerHTML += `
      <div class="producto_finalizarCompra">
        <img src="${producto.imagen}" alt="">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
      </div>
      <hr>
    `;
    const precioTOTAL = document.getElementById("precioTotalCompra");
    precioTOTAL.innerText =
      "$" + carrito.reduce((acc, prod) => acc + prod.precio, 0);
    btnCompra.onclick = () => {
      alert("compraste");
      carrito.length = 0;
      actualizarStorage();
      const formularioCompra = document.getElementById('formulario_compra')
      const inputNombre = formularioCompra[0]
      const inputEmail = formularioCompra[1]
      const inputTelefono = formularioCompra[2]
      const inputNumTarjeta = formularioCompra[3]
      cont_compra.innerHTML = "";
      cont_mensaje.className = "cont_mensaje d-flex";
      cont_mensaje.innerHTML = `
        <div class="compraFinalizada col-md-12">
          <h3>¡Gracias <span class="text-danger">${inputNombre.value}</span> por elegirnos!</h3>
          <p>¡El pago fue realizado con éxito!</p>
          <p>Corroborá las instrucciones de retiro en tu correo: <span class="text-danger"> ${inputEmail.value}</span></p>
          <p>Mandamos un codigo de seguimiendo al numero: <span class="text-danger"> ${inputTelefono.value}</span></p>
          <p>Pagaste $ ${precioTotal.textContent}</p>
          <p>Con la tarjeta número: **** - **** - **** - ${inputNumTarjeta.value.slice(8,12)}</p>
        </div>
      `;
    };
  });
});  




