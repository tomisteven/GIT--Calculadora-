const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
//declaramos en el query selector all todos los numeros y operadores
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")


//instancia del display
const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(Btnnumeros =>{
    Btnnumeros.addEventListener("click", ()=> display.agregarNumero(Btnnumeros.innerHTML))
})
botonesOperadores.forEach(Btnoperadores =>{
    Btnoperadores.addEventListener("click", ()=>{display.computar(Btnoperadores.value)})
})

