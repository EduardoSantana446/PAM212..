const personas = [
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "maria", edad: 28},
]

const buscar = personas.find(persona => persona.nombre === "Luis");
console.log(buscar);

personas.forEach(function(nombre, edad) {
    console.log(nombre, edad);
});

let sumaEdades = personas.reduce(function(total, persona) {
    return total + persona.edad;
}, 0);

console.log(sumaEdades);
