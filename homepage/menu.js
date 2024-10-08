
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let main = document.querySelector('main');
    
    if (window.scrollY > 0) {
        header.classList.add('rolagem');
        main.style.marginTop = "120px"; // Ajusta quando o header encolhe
    } else {
        header.classList.remove('rolagem');
        main.style.marginTop = "120px"; // Espaçamento normal
    }
});
