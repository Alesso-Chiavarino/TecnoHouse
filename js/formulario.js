const formulario = document.getElementById('form-box')
const inputss = document.querySelectorAll('#formulario, input')
const textarea = document.getElementById('msg')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validar = {
    nombre: nombre = false,
    correo: correo = false,
    telefono: telefono = false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
        if(expresiones.nombre.test(e.target.value)) {
            inputss[0].className = 'form-control mb-3 border border-success'
            validar.nombre = true;
        } else {
            inputss[0].className = 'form-control mb-3 border border-danger'
        }
      break;
    case "email":
        if(expresiones.correo.test(e.target.value)) {
            inputss[1].className = 'form-control mb-3 border border-success'
            validar.correo = true;
        } else {
            inputss[1].className = 'form-control mb-3 border border-danger'
        }
        break;
    case "telefono":
        if(expresiones.telefono.test(e.target.value)) {
            inputss[2].className = 'form-control mb-3 border border-success'
            validar.telefono = true;
        } else {
            inputss[2].className = 'form-control mb-3 border border-danger'
        }
        break;
  }
};

inputss.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    if((!validar.nombre && !validar.correo && !validar.telefono)) {
        e.preventDefault();
    }
});
