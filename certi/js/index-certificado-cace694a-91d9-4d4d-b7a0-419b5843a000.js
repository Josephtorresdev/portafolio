var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../certi/certificado=cace694a-91d9-4d4d-b7a0-419b5843a000-en.html";
    }else{
        location.href="../certi/certificado=cace694a-91d9-4d4d-b7a0-419b5843a000.html";
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