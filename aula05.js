let nome = 'João';
let idade1 = 25;
console.log(nome, idade1);


let num1 = 10;
let num2 = 5;
console.log('Soma: ', num1 + num2);
console.log('Subtração: ', num1 - num2);
console.log('Multiplicação: ', num1 * num2);
console.log('Divisão: ', num1 / num2);


let primeiroNome = 'Mauricio';
let sobrenome = 'Araujo';
let nomeCompleto = primeiroNome + ' ' + sobrenome;
console.log('Meu nome é', nomeCompleto);


let nota = 75;
if (nota >= 60) {
    console.log('Aprovado!')
} else if (nota >= 40) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}


let diaDaSemana = 1;
switch (diaDaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}


let x = 15;
let y = 20;
console.log('x é maior que y?', x > y);
console.log('x é igual a y?', x === y);


let temCarteira = true;
let idade = 18;
let temCarro = false;
let podeDirigir = idade >= 18 && temCarteira;
console.log('Pode dirigir? ', podeDirigir);
console.log('Pode dirigir e tem carro? ', podeDirigir && temCarro);


let frase = 'JavaScript é divertido';
console.log(frase.toUpperCase());
let novaFrase = frase.replace('divertido', 'poderoso');
console.log(novaFrase);


let contador = 0;
contador += 5;
contador -= 2;
contador *= 3;
console.log('valor final do contador:', contador);