
const requestPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.example.com/destinos', true);
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.status);
        }
      }
    };
    
    xhr.send();
  });
  
  requestPromise
    .then(response => {
      console.log('Respuesta del servidor:', response);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error);
    });
  
  // Utilizando fetch
  fetch('https://api.example.com/destinos')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error en la solicitud');
      }
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error);
    });