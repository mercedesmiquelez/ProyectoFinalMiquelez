const registro = document.querySelector("#registro");
const butn = document.getElementById("butn");

const pedirProducts = async () => {
    const resp = await fetch("./data.json");
    const data = await resp.json();
    console.log(resp, data);

    data.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h4>${product.nombre}</h4>
                <p>${product.precio}</p>
            `;
            registro.append(li);
    });
};
butn.addEventListener("click", pedirProducts);


const usuarioList = document.querySelector("#listadoUsuarioP");
const btnn = document.getElementById("btnn");

const mostrarUsuariosP = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=6");
    const data = await resp.json();
    console.log(resp, data);

    data.forEach((usuarioP) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h4>${usuarioP.title}</h4>
                <p>${usuarioP.description}</p>
            `;
            usuarioList.append(li);
    });
};
btnn.addEventListener("click", mostrarUsuariosP);
