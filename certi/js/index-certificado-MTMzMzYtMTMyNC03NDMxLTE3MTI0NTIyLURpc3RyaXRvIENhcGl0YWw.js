var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../certi/certificado=MTMzMzYtMTMyNC03NDMxLTE3MTI0NTIyLURpc3RyaXRvIENhcGl0YWw-en.html";
    }else{
        location.href="../certi/certificado=MTMzMzYtMTMyNC03NDMxLTE3MTI0NTIyLURpc3RyaXRvIENhcGl0YWw.html";
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