const liste = document.querySelector('.liste');

const btnResponsive = document.querySelector('.btn-responsive');

btnResponsive.addEventListener('click', function() {
    liste.classList.toggle('show');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 650) {
        liste.classList.remove('show');
    }
} );