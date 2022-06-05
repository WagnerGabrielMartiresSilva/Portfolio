/*abre e fecha menu lateral em modo mobile*/

const menuMobile= document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () =>{
    menuMobile.classList.contains("bi-list")
    ?menuMobile.classList.replace("bi-list", "bi-x") /* --- ? significa if----*/
    :menuMobile.classList.replace("bi-x","bi-list"); /*---- : significa else---*/
    body.classList.toggle("menu-nav-activate")
});