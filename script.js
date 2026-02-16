let entrada = document.getElementById('entrada')
let add = document.getElementById('add')
let lista = document.getElementById('lista')

function adicionar(){
    let input = entrada.value
    if(input.trim() === ""){
        alert("Escreva algo!")
        return
    }
    let item = '<li onclick="this.classList.toggle(\'feito\')">'+ input + '</li>'
    lista.innerHTML = lista.innerHTML + item
    entrada.value = ""
}

function limpar(){
    lista.innerHTML = ""
}