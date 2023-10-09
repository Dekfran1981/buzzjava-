function Buzz() {
  return "hola";
}

const saludo = Buzz();
console.log(saludo);

let agencia = "Agencia de Viajes";
console.log(`--> Bienvenidos a ${agencia}, el lugar perfecto para planificar tus próximas aventuras.`);

let cliente = prompt("Por favor, comparte tu nombre para conocerte mejor.");
console.log(`--> Hola ${cliente}, gracias por preferirnos. A partir de ahora, viajarás con ${agencia} hacia destinos exclusivos.`);

let destinos = prompt("Ingrese uno de los siguientes destinos: París, Nueva York, Bangkok, Tokio, Roma, Sídney, Londres, Estambul, Río de Janeiro, Buenos Aires");
console.log(`--> Ofrecemos ${destinos.split(', ').length} destinos diferentes para que elijas tu próxima aventura.`);

const presupuesto = 6000;
let precioTotal = 250;

if (precioTotal > presupuesto) {
  console.log(`--> Lo sentimos ${cliente}, no tenemos opciones que encajen en tu presupuesto.`);
} else {
  console.log(`--> Te ofrecemos un gran viaje por $${precioTotal}, con alojamiento en un hotel y actividades incluidas. ¿Te gustaría contemplar esta oferta?`);
}

let destinosArray = destinos.split(', ');
for (let destino of destinosArray) {
  console.log(destino);
}

let i = 1;
while (i <= destinosArray.length) {
  console.log(`--> Tenemos ${i} destinos diferentes para que puedas explorar.`);
  i++;
}

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

function suma(num1, num2) {
  return num1 + num2;
}

const resultadoSuma = suma(num1, num2);
console.log(resultadoSuma);

function resta(num1, num2) {
  return num1 - num2;
}

const resultadoResta = resta(num1, num2);
console.log(resultadoResta);

function concatenacion(num1, num2) {
  return num1.toString() + num2.toString();
}

const resultadoConcatenacion = concatenacion(num1, num2);
console.log(resultadoConcatenacion);

function division(num1, num2) {
  if (num2 === 0) {
    return "No es posible dividir entre cero";
  } else {
    return num1 / num2;
  }
}

let operacion = prompt("Ingrese la operación que desea realizar (suma, resta, concatenación, división):");
let resultado;

switch (operacion) {
  case "suma":
    resultado = resultadoSuma;
    console.log(`El resultado de la suma es: ${resultado}`);
    break;
  case "resta":
    resultado = resultadoResta;
    console.log(`El resultado de la resta es: ${resultado}`);
    break;
  case "concatenación":
    resultado = resultadoConcatenacion;
    console.log(`El resultado de la concatenación es: ${resultado}`);
    break;
  case "división":
    resultado = division(num1, num2);
    console.log(`El resultado de la división es: ${resultado}`);
    break;
  default:
    console.log("Operación inválida");
}