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

//Não está sendo utilizado
//Função para exibir dropdown
//$('.dropdown-toggle').dropdown();


let interruptForm = [];



