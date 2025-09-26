function verificarUsuario(usario) {
    return new Promise((resolve, reject) => {
        if (usario === "admin") {
            resolve("Usuario correcto");
        } else {
            reject("Usuario incorrecto");
        }
    });
}


verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.log(err));