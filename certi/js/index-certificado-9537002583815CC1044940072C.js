var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../certi/certificado=9537002583815CC1044940072C-en.html";
    }else{
        location.href="../certi/certificado=9537002583815CC1044940072C.html";
    }
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}