let agencia = "Agencia de Viajes";
console.log(`--> Bienvenidos a ${agencia}, el lugar perfecto para planificar tus próximas aventuras.`);

let cliente = prompt("Por favor, comparte tu nombre para conocerte mejor.");

console.log(`--> Hola ${cliente}, gracias por preferirnos. A partir de ahora, viajarás con ${agencia} hacia destinos exclusivos.`);

let destinos = prompt("Ingrese uno de los siguientes destinos: París, Nueva York, Bangkok, Tokio, Roma, Sídney, Londres, Estambul, Río de Janeiro, Buenos Aires");
console.log(`--> Ofrecemos ${destinos.length} destinos diferentes para que elijas tú próxima aventura.`);

const presupuesto = 5000;
let precioTotal = 150;

if (precioTotal > presupuesto) {
  console.log(`--> Lo sentimos ${cliente}, no tenemos opciones que encajen en tu presupuesto.`);
} else {
  console.log(`--> Te ofrecemos un gran viaje por $${precioTotal}, con alojamiento en un hotel y actividades inclusas. ¿Te gustaría contemplar esta oferta?`);
}

for (let destino of destinos) {
  console.log(destino);
}

let i = 1;

while (i <= destinos.length) {
  console.log(`--> Tenemos ${i} destinos diferentes para que puedas explorar.`);
  i++;
} 