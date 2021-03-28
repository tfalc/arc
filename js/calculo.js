function calcula(valor1) {
    let bit = 8;
    let byte = Math.pow(2, 0);
    let kilobit = Math.pow(2, 10);
    let megabit = Math.pow(2, 20);
    let gigabit = Math.pow(2, 30);

    let valor = document.getElementById("valor1");
    const opcao = document.querySelector.name("selecoes");

    switch (opcao) {
        case opcaob:
            valor1 = valor * bit;
            document.getElementById("calculabit") = valor1;
        case opcaoKb:
            valor1 = valor * byte;
            document.getElementById("calculaByte") = valor1;
        case opcaoKb:
            valor1 = valor * kilobit;
            document.getElementById("calculaKilobit") = valor1;
        case opcaoMb:
            valor1 = valor * megabit;
            document.getElementById("calculaMegabit") = valor1;
        case opcaoGb:
            valor1 = valor * gigabit;
            document.getElementById("calculaGigabit") = valor1;
        default:
            break;
    }



}