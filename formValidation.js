const form = document.getElementById("form");
const campo = document.querySelector(".required")
const span = document.getElementById("span-required")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const formButton =document.getElementById("btn")
form.addEventListener('submit', (event)=>{
    if(campo.value === ''){
       setError()
       event.preventDefault()
    }
})
function setError(){
    campo.style.border = '1px solid red'
    span.style.display= "block"
}
function removeError(){
    campo.style.border = ''
    span.style.display= "none"
}
function emailValidate(){
    if(emailRegex.test(campo.value)){
        console.log("VAlidadoooo")
        removeError()
    }else{
        console.log("Nao validado")
        setError()
    }
}
