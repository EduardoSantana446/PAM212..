function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Peticiones simuladas');
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
    const resultado = await simularPeticionAPI(); 
    console.log(resultado); 
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}

obtenerDatos();
