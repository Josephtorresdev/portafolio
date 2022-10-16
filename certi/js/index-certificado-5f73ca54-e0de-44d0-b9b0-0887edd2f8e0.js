var check=document.querySelector(".check");
check.addEventListener('click', idioma)

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../certi/certificado=5f73ca54-e0de-44d0-b9b0-0887edd2f8e0-en.html";
    }else{
        location.href="../certi/certificado=5f73ca54-e0de-44d0-b9b0-0887edd2f8e0.html";
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