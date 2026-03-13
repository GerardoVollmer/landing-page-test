/* Animacion para scroll */
function scrollToForm() {

    document.getElementById("contacto")
    .scrollIntoView({behavior:"smooth"}); /*desplaza la pagina suavemente*/

}

/* creamos la animacion al hacer scrool */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

    for (let i=0;i<reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientReact().top;
        
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }}) /* Esto detecta cuando un elemento entra en pantalla. */

document /* Formulario */
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let nivel = document.getElementById("nivel").value;

    let mensaje =
    "Hola, quiero reservar una clase de canto.%0A"+
    "Nombre: "+nombre+"%0A"+
    "Email: "+email+"%0A"+
    "Nivel: "+nivel;

    window.open(
        "https://wa.me/5493731508760="+mensaje,
        "_blank"
    );

});

