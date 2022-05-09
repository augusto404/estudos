/* Sistema de notas escolares */

function notasEscolares(notaAluno){
    let acima90 = notaAluno >= 90 && notaAluno <= 100;
    let entre80_89 = notaAluno >= 80 && notaAluno <= 89;
    let entre70_79 = notaAluno >= 70 && notaAluno <= 79;
    let entre60_69 = notaAluno >= 60 && notaAluno <= 69;
    let menor60 = notaAluno < 60 && notaAluno >= 0;
    let resultado;

    if (acima90){
        resultado = "A";
    } else if (entre80_89){
        resultado = "B";
    } else if (entre70_79){
        resultado = "C";
    } else if (entre60_69){
        resultado = "D";
    } else if (menor60){
        resultado = "F";
    } else {
        resultado = "VALOR INVÁLIDO.";
    }

    return resultado;
}

// A function permite haver várias verificações simultâneas.
console.log(notasEscolares(12));
console.log(notasEscolares(45));
console.log(notasEscolares(567));
console.log(notasEscolares(-1));
console.log(notasEscolares(68));








// ---

// Tentei fazer com switch, mas não funcionou. Preciso estudar mais como usar corretamente.

/*
switch (notaAluno){
    case acima90:
        console.log("A");
        break
    case entre80_89:
        console.log("B");
        break
    case entre70_79:
        console.log("C");
        break
    case entre60_69:
        console.log("D");
        break
    case menor60:
        console.log("F");
        break
    default:
        console.log("Digite o valor da sua nota.");
        break
}
*/