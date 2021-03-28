function copiaParaClipboard(string) {
    function listener(copia) {
        //copia.clipboardData.setData("text/html", string);
        copia.clipboardData.setData("text/plain", string);
        copia.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};

function copiaAlerta(texto) {
    let range = document.createRange();
    range.selectNode(texto);
    console.log(range);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}