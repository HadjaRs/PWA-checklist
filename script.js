let entrada = document.getElementById('entrada');
let lista = document.getElementById('lista');


window.onload = () => {
    const dadosSalvos = localStorage.getItem('minhaListaHTML');
    if (dadosSalvos) {
        lista.innerHTML = dadosSalvos;
    }
};


function atualizarStorage() {
    localStorage.setItem('minhaListaHTML', lista.innerHTML);
}

function adicionar() {
    let input = entrada.value;
    if (input.trim() === "") {
        alert("Escreva algo!");
        return;
    }
    
    
    let item = '<li onclick="this.classList.toggle(\'feito\'); atualizarStorage()">'+ input + '</li>';
    lista.innerHTML += item;
    
    entrada.value = "";
    atualizarStorage(); 
}

function limpar() {
    lista.innerHTML = "";
    localStorage.removeItem('minhaListaHTML'); 
}