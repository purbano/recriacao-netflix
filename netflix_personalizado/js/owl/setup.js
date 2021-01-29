/*Configuração do jquery para o carrossel*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/*Opção para mudança de tema quando botão selecionado*/
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () =>{
document.body.classList.toggle("claro");
document.a.classList.toggle("claro");
});