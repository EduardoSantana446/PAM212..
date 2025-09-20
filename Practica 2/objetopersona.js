const persona = {
    nombre: "Ivan say",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }

};

const { nombre, edad, direccion: {ciudad} } = persona;
console.log("Hola me llamo " + nombre + " tengo " + edad + " años y vivo en " + ciudad);
