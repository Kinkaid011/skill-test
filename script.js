


const toggle = document.querySelector(".toggle").addEventListener("click", menu);

function menu() {
    var nav = document.querySelector("nav");

    nav.classList.toggle("menu");
}