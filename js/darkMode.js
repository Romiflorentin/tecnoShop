const toggle = document.getElementById('toggle');
const label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('click', (event) => {
    const checked = event.target.checked
    document.body.classList.toggle('dark')
    if (checked == true) {
        label_toggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    } else {
        label_toggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
})