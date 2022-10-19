
// funcion calculo Total entradas by Alejandro Boffa 10/2022 Codo a Codo

function resumen() {
  var precio = 200,
    nombre,
    apellido,
    correo,
    cantEntradas,
    total,
    categoria;

// recupero contenido del HTML por Id, para poder validar y seguir
  cantEntradas = document.getElementById('inputCantidad').value;
  categoria = document.getElementById('inputCategoria').value;
  nombre = document.getElementById('inputNombre').value;
  apellido = document.getElementById('inputApellido').value;
  correo = document.getElementById('inputCorreo').value;


// valido que existan nombre, apellido y email
  if (nombre !== "" && apellido !== "" && correo !=="") { 
    // calculo total segun categoria
    if (categoria == 'Estudiante') {
      total = (precio - precio * 0.80) * cantEntradas;
    } else if (categoria == 'Trainee') {
      total = (precio - precio * 0.50) * cantEntradas;
    } else if (categoria == 'Junior') {
      total = (precio - precio * 0.15) * cantEntradas;
    } else if (categoria == 'General') {
      total = precio * cantEntradas;
    }
    document.getElementById('importeTotal').innerHTML =
    'Total a Pagar: $' + total;

  } else {
    window.alert('Por Favor, ingrese el nombre, apellido y e-mail correctos');
  }
  
}
