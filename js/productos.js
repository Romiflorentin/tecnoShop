const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055');
    const datos = await respuesta.json();
    const data = await datos.results

    cardsProd = document.getElementById('productos');
    for (item of data) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                        <img  src=${item.thumbnail} alt=${item.nombre} />
                        <h4 class="card-title">${item.title}</h4>
                        <div class="card-body">
                        <p class="card-text">Proveedor: ${item.official_store_name}</p>
                        <p  class="fw-semibold">Precio: $${item.price}.-</p>
                        <button class="btn btn-primary agregar_carrito">Añadir al carrito</button>
                        </div>
                
            </div>
            `;
        cardsProd.appendChild(card);
    }
}

peticionML();
