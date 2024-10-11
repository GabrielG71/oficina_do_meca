
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let main = document.querySelector('main');
    
    if (window.scrollY > 0) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }
});

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
