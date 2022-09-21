
var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="en/index.html";
    }else{
        location.href="../index.html";
    }
}

window.sr = ScrollReveal();

    sr.reveal('.top-menu', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.titulo-bienvenida', {
        duration: 4000,
        origin: 'bottom',
        distance: '-400px'
    });

     sr.reveal('.lista-bienvenida', {
        duration: 2000,
        origin: 'bottom',
        distance: '-400px'
    });

    sr.reveal('.descargar-curriculum', {
        duration: 2000,
        origin: 'bottom',
        distance: '-400px'
    });
    
    sr.reveal('.main-cursos', {
        duration: 2500,
        origin: 'left',
        distance: '600px'
    });

     $(document).ready(function(){

        $('.ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 600);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.ir-arriba').slideDown(300);
            } else {
                $('.ir-arriba').slideUp(300);
            }
        });
    
    });
