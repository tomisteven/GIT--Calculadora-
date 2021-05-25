class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual
        this.displayValorAnterior = displayValorAnterior
        this.calculador= new Calculadora()
        this.TipoOperacion = undefined
        this.ValorActual = ""
        this.ValorAnterior = ""
        this.signos = {
            sumar: `+`,
            dividir: `/`,
            multiplicar : `*`,
            restar: `-`

        }

    }
    borrar(){
        this.ValorActual = this.ValorActual.toString().slice(0,-1)
        this.imprimirValores()
    }
    borrarTodo(){
        this.ValorActual=""
        this.ValorAnterior=""
        this.TipoOperacion = undefined
        this.imprimirValores()
    }
    agregarNumero(numero){
         if(numero === "." && this.ValorActual.includes(".")) return
        this.ValorActual =this.ValorActual.toString() + numero.toString();
        this.imprimirValores()

    }
    imprimirValores(){
        this.displayValorActual.textContent = this.ValorActual
        this.displayValorAnterior.textContent = `${this.ValorAnterior} ${this.signos[this.TipoOperacion] || ''}`
    }
    calcular(){
        const valorAnterior = parseFloat(this.ValorAnterior)
        const ValorActual = parseFloat(this.ValorActual)
        if(isNaN(ValorActual) || isNaN(valorAnterior)) return
        this.ValorActual = this.calculador[this.TipoOperacion](valorAnterior,ValorActual)

        
    }
    computar(Tipo){
        this.TipoOperacion !== "igual" && this.calcular()
        this.TipoOperacion = Tipo
        this.ValorAnterior = this.ValorActual || this.ValorAnterior
        this.ValorActual = ""

        this.imprimirValores()
    }
}