
// funcion calculo Total entradas by Alejandro Boffa 10/2022 Codo a Codo

function resumen() {
  const precio = 200;
  let descuento = 0;
  let total = 0;

// recupero contenido del HTML por Id, para poder validar y seguir
  const cantEntradas = document.getElementById('inputCantidad').value;
  const categoria = document.getElementById('inputCategoria').value;
  const nombre = document.getElementById('inputNombre').value;
  const apellido = document.getElementById('inputApellido').value;
  const correo = document.getElementById('inputCorreo').value;

// valido que existan nombre, apellido y email
  if (nombre !== "" && apellido !== "" && correo !=="") { 
    // calculo descuento segun categoria
    if (categoria == 'Estudiante') {
      descuento = precio * 0.80;
    } else if (categoria == 'Trainee') {
      descuento = precio * 0.50;
    } else if (categoria == 'Junior') {
      descuento = precio * 0.15;
    }
    // calculo total gral
    total = (precio - descuento) * cantEntradas;

    // ahora reemplazo valor "Total" en pagina web dinamicamente sin recargarla
    document.getElementById('importeTotal').innerHTML =
    'Total a Pagar: $' + total;

  } else {
    // aparece Alerta si no ingreso nombre, apellido y email
    window.alert('Por Favor, ingrese el nombre, apellido y e-mail correctos');
  }
  
}
