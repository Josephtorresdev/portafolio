var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="en/projects";
    }else{
        location.href="../proyectos";
    }
}

window.sr = ScrollReveal();

    sr.reveal('.top-menu', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
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