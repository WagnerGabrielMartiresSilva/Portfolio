/*abre e fecha menu lateral em modo mobile*/

const menuMobile= document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () =>{
    menuMobile.classList.contains("bi-list")
    ?menuMobile.classList.replace("bi-list", "bi-x") /* --- ? significa if----*/
    :menuMobile.classList.replace("bi-x","bi-list"); /*---- : significa else---*/
    body.classList.toggle("menu-nav-activate")       /*---- ativar a barra lateral ou seja o menu-nav */
});

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem= document.querySelectorAll(".nav-item")

navItem.forEach(item => {
    item.addEventListener("click",()=> {
        if (body.classList.contains("menu-nav-activate")) {
            body.classList.remove("menu-nav-activate")
            menuMobile.classList.replace("bi-x","bi-list");
        }
    })
})

// Animar todos os itens da tela que tiverem meu atributo data-anime  

const item =document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85; //serve para executar animação antes de descer tudo
    console.log(windowTop)

    item.forEach(Element => {
        if(windowTop > Element.offsetTop){
            Element.classList.add("animate");
        } else{
            Element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})