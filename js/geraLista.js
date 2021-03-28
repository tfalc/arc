/*var textoQuedaListaOrdenada = document.querySelector('#interrupTable ol');
var textoQuedaLista = document.querySelector('#interrupTable li');
var textoQuedaInput = document.querySelector('#formularioQuedas input');
var textoQuedaButton = document.querySelector('#formularioQuedas button');

let interruptFormLocal = JSON.parse(localStorage.getItem('itemsArray')) || [];

//conexão MySQL com PHP

//Função para exibir array em uma lista
function exibeArray(){
    textoQuedaListaOrdenada.innerHTML='';

    for (texto of interruptFormLocal){
        var textoQuedaElement = document.createElement('li');
        var textoQuedaText = document.createTextNode(evento);
        var buttonQueda = document.querySelector('#formularioQuedas', botaoQueda);
        var buttonNormalizacao = document.querySelector('#formularioQuedas', botaoNormalizacao);
        
        textoQuedaListaOrdenada.appendChild(textoQuedaElement); //cria o <li>
        textoQuedaElement.appendChild(textoQuedaText); //adiciona o texto ao <li>
        

        var pos = interruptFormLocal.indexOf(evento);
        buttonQueda.setAttribute('onclick', 'addQueda(' + pos + ')');
        buttonNormalizacao.setAttribute('onclick', 'deletaQueda(' + pos + ')');
    }
}

exibeArray();

//Função para adicionar texto ao array
function addQueda(){
    var textoQuedaText = evento;
    interruptFormLocal.push(textoQuedaText);
    inputElement.value='';
    exibeArray();
    salvaLocal();
}

//Função para deletar um array conforme a posição que ele for sendo salvo
function deletaQueda(pos){
    interruptFormLocal.splice(pos, 1);
    exibeArray();
    salvaLocal();
}

//função para salvar em localStorage
function salvaLocal(){
    localStorage.setItem('itemsArray', JSON.stringify(interruptForm));
}*/
