const agencia = "Agencia de Viajes";

const titulo = document.querySelector("#titulo");
titulo.textContent = `Bienvenidos a ${agencia}, el lugar perfecto para planificar tus próximas aventuras`;

const formulario = document.querySelector("#formulario");
const clienteInput = document.querySelector("#cliente");
const destinosInput = document.querySelector("#destinos");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  const cliente = clienteInput.value;
  const destinos = destinosInput.value.split(", ");

  mostrarMensaje(`Hola ${cliente}, gracias por preferirnos. A partir de ahora, viajarás con ${agencia} hacia destinos exclusivos.`);

  mostrarMensaje(`Ofrecemos ${destinos.length} destinos diferentes para que elijas tu próxima aventura.`);

  const presupuesto = 6000;
  const precioTotal = 250;

  if (precioTotal > presupuesto) {
    mostrarMensaje(`Lo sentimos ${cliente}, no tenemos opciones que encajen en tu presupuesto.`);
  } else {
    mostrarMensaje(`Te ofrecemos un gran viaje por $${precioTotal}, con alojamiento en un hotel y actividades incluidas. ¿Te gustaría contemplar esta oferta?`);
  }

  for (let destino of destinos) {
    mostrarMensaje(destino);
  }

  const sumGreaterThan10Promise = sumByCondition(destinos, number => number > 10);
  sumGreaterThan10Promise
    .then(sumGreaterThan10 => {
      mostrarMensaje(`La suma de los números mayores a 10 en el array es: ${sumGreaterThan10}`);
    })
    .catch(error => {
      mostrarMensaje(`Ha ocurrido un error: ${error}`);
    });
});

function mostrarMensaje(mensaje) {
  const mensajeElement = document.createElement("p");
  mensajeElement.textContent = mensaje;
  document.body.appendChild(mensajeElement);
}

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener("click", function() {
  boton1.style.background = 'red';
});

boton2.addEventListener("click", function() {
  boton2.style.background = 'blue';
});

boton3.addEventListener("click", function() {
  boton3.style.background = 'green';
});

function sumByCondition(array, condition) {
  return new Promise((resolve, reject) => {
    let total = 0;
    for (let number of array) {
      if (condition(number)) {
        total += number;
      }
    }
    if (total) {
      resolve(total);
    } else {
      reject("No se encontraron números que cumplan con la condición");
    }
  });
}