let designer = document.getElementById("designer1")
let designer1 = document.querySelector(".designer0")

function moveu1(){
    
    designer.style.display="block"
    designer1.style.opacity=0
    designer.style.transition="opacity 1s"

}

function tirou1(){
    designer.style.display="none"
    designer1.style.opacity= 1
    designer.style.transition="opacity 1s"


}