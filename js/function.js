function quedaArray(){
    let evento = {
        id: Date.now,
        titulo: document.getElementById('titulo').value,
        horaqueda: document.getElementById('horaqueda').value,
        horanormalizacao: document.getElementById('horanormalizacao').value,
        capacidade: document.getElementById('capacidade').value,
        owner: document.getElementById('owner').value,
        afetados: $("#afetados :selected").text(), 
        resumoqueda: document.getElementById('resumoqueda').value
    }
    interruptForm.push(evento);
    document.forms[0].reset(); //limpa formulário para próximas entradas
}
/*
function normalizArray(){
    let evento = {
        id: Date.now,
        titulo: document.getElementById('titulo').value,
        horanormalizacao: document.getElementById('horanormalizacao').value,
        capacidade: document.getElementById('capacidade').value,
        owner: document.getElementById('owner').value,
        afetados: document.getElementById('afetados').value,
        resumonormalizacao: document.getElementById('resumonormalizacao').value
    }
    interruptForm.push(evento)
    document.forms[0].reset(); //limpa formulário para próximas entradas
}*/

const adicionaDado = (ev) => {
    ev.preventDefault(); //interrompe envio de formulário
    if(document.getElementById('botaoQueda').addEventListener('click', quedaArray));
    else if(document.getElementById('botaoNormalizacao').addEventListener('click', quedaArray));
    //(document.getElementById('botaoQueda').addEventListener('click', quedaArray));
 //   else if(document.getElementById('botaoNormalizacao').addEventListener('click', normalizArray));
}


//para teste somente
console.warn('adicionado array', { interruptForm });
console.log(interruptForm)

    //let pre = document.querySelector('#textoQueda pre');
    //pre.textContent = '\n' + JSON.stringify(interruptForm, '\t', 2);

    //salvando em armazenamento local

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botaoQueda').addEventListener('click', adicionaDado);
    document.getElementById('botaoNormalizacao').addEventListener('click', adicionaDado);
});

function exibeArray(){
    for (i = 0; i<interruptForm.length; i++){
        print().interruptForm
    }
}
