function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}
function agregarAlCarrito(id, nombre) {
    let carrito = obtenerCarrito();

    const index = carrito.findIndex((prod) => prod.id === id);
    if (index !== -1) {
        carrito[index].quantity++;
    } else {
        carrito.push({ id, nombre, quantity: 1 });
    }
    guardarCarrito(carrito);
};

function obtenerCarrito() {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.addEventListener("load", function () {
    const botonComprar = document.querySelectorAll(".agregar_carrito");
    const cuentaCarrito = document.querySelector(".cuenta-carrito");

    botonComprar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.dataset.id, e.target.dataset.nombre);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `¡Tu producto ha sido agregado exitosamente!`,
                showConfirmButton: false,
                timer: 1500
            });


        });
    });
});
