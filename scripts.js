document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
    // Objeto con los datos del formulario
    const formDatos = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    // Solicitud POST usando fetch
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDatos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Mostrar la respuesta del servidor en la consola
        alert("Registro exitoso"); // Mostrar un mensaje de éxito
      })
      .catch(error => console.error("Error:", error));
  });