
let carrito = JSON.stringify(localStorage.getItem("carrito")) || []
const data = [];



const productIndex = async () => {
    const respuesta = await fetch("/productos.json");
    const datos = await respuesta.json();
    const data = await datos;

    const cardsProd = document.getElementById('productosRow');

    for (item of data) {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.img} alt=${item.nombre} />
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                    <p  class="fw-semibold">Precio: $${item.precio}.-</p>
                    <button class="btn btn-primary agregar_carrito"data-id="${item.id}">Añadir al Carrito</button>
                </div>
            </div>

        `
        // card.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(data))
        cardsProd.appendChild(card);
    };
}
productIndex();
