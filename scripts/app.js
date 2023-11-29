console.log("Bienvenidos a Viajes Buzz");

const usuario = {
  nombre: prompt("Por favor, ingresa tu nombre"),
  email: prompt("Por favor, ingresa tu correo electrónico"),
  destino: prompt("¿A qué destino te gustaría viajar?"),
  fecha: prompt("¿En qué fecha te gustaría viajar?"),
  duracion: parseInt(prompt("¿Cuántos días te gustaría viajar?")) || 0,
  presupuesto: parseFloat(prompt("¿Cuánto presupuesto tienes para el viaje?")) || 0
};

if (!isValidEmail(usuario.email)) {
  console.error("Correo electrónico no válido. La información no se almacenará en localStorage.");
} else {
  localStorage.setItem("usuario", JSON.stringify(usuario));
  localStorage.setItem("islogueado", true);
  localStorage.setItem("edad", prompt("Por favor, ingresa tu edad"));
  console.log("Información del usuario almacenada en localStorage");
}

function isValidEmail(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}