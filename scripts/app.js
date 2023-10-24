function guardar_localstorage() {
    let persona = {
      nombre: "Patricio",
      edad: 42,
      correo: "tengocorreoymagia@outlook.com",
      coord: {
        lat: 10,
        long: -10,
      }
    };
  
    let nombre = "Juan";
    localStorage.setItem("nombre", nombre);
  
    let viajes = [
      { destino: "Playa", duracion: "7 días" },
      { destino: "Montaña", duracion: "5 días" },
      { destino: "Ciudad", duracion: "3 días" }
    ];
  
    localStorage.setItem("viajes", JSON.stringify(viajes));
  }

  