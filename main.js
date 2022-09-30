const miForm = document.querySelector(".miForm")
const inputName = document.querySelector(".inputName")
const inputEmail = document.querySelector(".inputEmail")
const inputMensaje = document.querySelector(".inputMensaje")
const pContacto = document.querySelector(".pContacto")

miForm.addEventListener('submit', (event) => {
 event.preventDefault() 
 let nombre = inputName.value
 let email = inputEmail.value
 let mensaje = inputMensaje.value

 let user ={
    nombreUser:nombre,
    emailUser:email,
    mensajeUser:mensaje
 }
 console.log(user)
 console.log(nombre)

 miForm.remove()
 let agregar = `<p>Gracias ${nombre}, nos pondremos en contacto pronto !</p>`
 pContacto.innerHTML = agregar
})
