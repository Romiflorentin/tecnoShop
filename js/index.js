
document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById('nav-container');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menuItems = [
        { text: 'Inicio', href: '/index.html' },
        { text: 'Productos', href: '../pages/productos.html' },
        { text: 'Contacto', href: '../pages/contacto.html' }
    ];
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    navContainer.appendChild(nav);
});
