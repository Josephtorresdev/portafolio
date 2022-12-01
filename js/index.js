
var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="en/";
    }else{
        location.href="../";
    }
}

window.sr = ScrollReveal();

    sr.reveal('.titulo-bienvenida', {
        duration: 1000,
        origin: 'bottom',
        distance: '-100px'
    });

     sr.reveal('.lista-bienvenida', {
        duration: 3000,
        origin: 'left',
        distance: '200px'
    });

    sr.reveal('.descargar-curriculum', {
        duration: 4000,
        origin: 'left',
        distance: '400px'
    });

    sr.reveal('.arriba-item', {
        duration: 2000,
        origin: 'top',
        distance: '100px'
    });

    sr.reveal('.abajo-item', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px'
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


        /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
