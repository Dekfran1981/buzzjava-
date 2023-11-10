

console.log("Bienvenidos a Viajes Buzz");

const usuario = {
  nombre: prompt("Por favor, ingresa tu nombre"),
  email: prompt("Por favor, ingresa tu correo electrónico"),
  destino: prompt("¿A qué destino te gustaría viajar?"),
  fecha: prompt("¿En qué fecha te gustaría viajar?"),
  duracion: parseInt(prompt("¿Cuántos días te gustaría viajar?")),
  presupuesto: parseFloat(prompt("¿Cuánto presupuesto tienes para el viaje?"))
};

localStorage.setItem("usuario", JSON.stringify(usuario));
localStorage.setItem("islogueado", true);
localStorage.setItem("edad", prompt("Por favor, ingresa tu edad"));

console.log("Información del usuario almacenada en localStorage");