function copiaParaClipboard(string) {
    function listener(copiaPre) {
        copiaPre.clipboardData.setData("text/html", string);
        copiaPre.clipboardData.setData("text/plain", string);
        copiaPre.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};

//funções de reset de formulário
$(document).on('click', "#ResetForm", function () {
    // Resetar formulario
    document.getElementById('formularioQuedas').reset();
});

$(document).on('click', "#ResetFormNormalizacao", function () {
    // Resetar formulario
    document.getElementById('formularioNormalizacao').reset();
});

$(document).on('click', "#ResetFormAlerta", function () {
    // Resetar formulario
    document.getElementById('formularioAlerta').reset();
});

let interruptForm = [];

function quedaArray(){
    let evento = {
        id: Date.now,
        titulo: document.getElementById('titulo').value,
        horaqueda: document.getElementById('horaqueda').value,
        //horanormalizacao: document.getElementById('horanormalizacao').value,
        capacidade: document.getElementById('capacidade').value,
        owner: document.getElementById('owner').value,
        afetados: $("#afetados :selected").text(), 
        resumoqueda: document.getElementById('resumoqueda').value
    }
    interruptForm.push(evento);
    document.forms[0].reset(); //limpa formulário para próximas entradas
}

function normalizArray(){
    let evento = {
        id: Date.now,
        titulo: document.getElementById('titulo').value,
        horaqueda: document.getElementById('horaqueda').value,
        horanormalizacao: document.getElementById('horanormalizacao').value,
        capacidade: document.getElementById('capacidade').value,
        owner: document.getElementById('owner').value,
        afetados: $("#afetados :selected").text(),
        resumonormalizacao: document.getElementById('resumonormalizacao').value
    }
    interruptForm.push(evento)
    document.forms[0].reset(); //limpa formulário para próximas entradas
}

const adicionaDado = (ev) => {
    ev.preventDefault(); //interrompe envio de formulário
    if(document.getElementById('botaoQueda').addEventListener('click', quedaArray));
    else if(document.getElementById('botaoNormalizacao').addEventListener('click', normalizArray));
}


//para teste somente
console.info("Mensagens abaixo são para teste de inicialização do array");
console.warn('adicionado array', { interruptForm });
console.log(interruptForm);
console.info("FIM DO TESTE");

//Função para exibir as interrupções abaixo do último <hr>
setInterval(function atualizaQueda(){
    let pre = document.querySelector('#textoInterrupt pre');
    pre.textContent = '\n' + JSON.stringify(interruptForm, '\t', 2);
}, 1000);

//salvando em armazenamento local

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botaoQueda').addEventListener('click', adicionaDado);
    document.getElementById('botaoNormalizacao').addEventListener('click', adicionaDado);
});