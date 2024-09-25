document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && subject && message) {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Gracias por ponerte en contacto con nosotros.',
        });
        document.getElementById('successMessage').style.display = 'block';


        document.getElementById('contactForm').reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
    }
});