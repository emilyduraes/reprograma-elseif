
// As duas funções abaixo retornam a quantidade de pontos que seu time fez de acordo com o resultado do jogo. 

function calcularPonto(resultado){
  if(resultado === 'v'){
    return '3 pontos.';
  } else if(resultado === 'e'){
    return '1 ponto.';
  } else if(resultado === 'd'){
    return '0 ponto.';
  } else {
    return 'Esse dado é inválido.';
  }
}

console.log('Bora Cruzeiro!!');
console.log(calcularPonto('v'));
console.log(calcularPonto('e'));
console.log(calcularPonto('d'));

let resultado = prompt('Qual foi o resultado?');

switch(resultado){
  case 'd':
    console.log('0 ponto.');
    break;
  case 'e':
    console.log('1 ponto.');
    break;
  case 'v':
    console.log('3 pontos.');
    break;
  default:
    console.log('Esse dado é inválido.')
} 

// Essa função informa se uma palavra é uma palíndromo

let str = prompt("Digite a palavra")

function palindrome(str){
  return str == str.split('').reverse().join('');
}

console.log(palindrome(str));
    
// Essa função retorna se o número é par ou ímpar.

function verificarNum(num){
  if(num !== 'number'){
    return "Por favor digite um número."
  }
  if(num % 2 == 0){
    return "Esse número é par."
  }
  return "Esse número é ímpar."
}

console.log(verificarNum(2));

// Essa função retorna a classificação do ângulo.

let angulo = prompt("Digite o valor do seu ângulo.")

function classificarAngulo(angulo){
  angulo = parseInt(angulo);
  if(angulo > 0 && angulo < 90){
    return "Esse ângulo é agudo.";
  } else if(angulo === 90){
    return "Esse ângulo é reto.";
  } else if(angulo > 90 && angulo < 180){
    return "Esse ângulo é obtuso.";
  } else if(angulo === 0 || angulo === 180){
    return "Esse ângulo é raso.";
  } else if(angulo > 180 && angulo < 360){
    return "Esse ângulo é côncavo.";
  } else if(angulo === 360){
    return "Esse ângulo é completo.";
  }
  return "Esse valor não é válido. Escolha um número entre 0 e 360.";
}

console.log(classificarAngulo(angulo)); 

// Essa função retorna a classificação de um produto.

function classificarProduto(codigo){
  if(codigo === 1){
    return 'Alimento não perecível';
  } else if(codigo >= 2 &&  codigo <= 4){
    return 'Alimento perecível';
  } else if(codigo === 5 || codigo === 6){
    return 'Vestuário';
  } else if(codigo === 7){
    return 'Higiene pessoal';
  } else if(codigo >= 8 && codigo <= 15){
    return 'Limpeza e utensílios domésticos';
  } else {
    return 'Código inválido';
  }
}

console.log(classificarProduto(1))


// Essa função determina, de acordo com o código, o produto e valor total que o usuário deverá pagar.

function calcularPreco(codigo, quantidade){
  codigo = parseInt(codigo);
  quantidade = parseInt(quantidade);

  if(codigo === 100){
    let valorProduto = quantidade * 1.7;
    return 'Você comprou ' + quantidade + ' Cachorro(s) Quente(s) por ' + valorProduto + ' reais.';
  } else if(codigo === 101){
    valorProduto = quantidade * 2.3;
    return 'Você comprou ' + quantidade + ' Bauru(s) Simples por ' + valorProduto + ' reais.';
  } else if(codigo === 102){
    valorProduto = quantidade * 2.6;
    return 'Você comprou ' + quantidade + ' Bauru(s) com ovo por ' + valorProduto + ' reais.';
  } else if(codigo === 103){
    valorProduto = quantidade * 2.4;
    return 'Você comprou ' + quantidade + ' Hamburguer(es) por ' + valorProduto + ' reais.';
  } else if(codigo === 104){
    valorProduto = quantidade * 2.5;
    return 'Você comprou ' + quantidade + ' Cheeseburguer(es) por ' + valorProduto + ' reais.';
  } else if(codigo === 105){
    valorProduto = quantidade;
    return 'Você comprou ' + quantidade + ' Refrigerante(s) por ' + valorProduto + ' real(is).';
  } else{
    return 'Esse código não é válido.';
  }
}

console.log(calcularPreco(105, 5));  

// Essa função determina qual número é maior.

function definirMaior(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 > num2){
    return 'O número ' + num1 + ' é o maior.';
  } else if (num1 < num2){
    return 'O número ' + num2 + ' é o maior.';
  } else if (num1 === num2){
    return 'Os números digitados são iguais.';
  } else{
    return 'Digite um número inteiro válido.';
  }
}

console.log(definirMaior(6,1)); 

// Essa função determina qual o dia da semana equivale cada número

let diaSemana = 1;

switch (diaSemana) {
  case 1:
    console.log('Segunda-feira');
    break;
  case 2:
    console.log('Terça-feira');
    break;
  case 3:
    console.log('Quarta-feira');
    break;
  case 4:
    console.log('Quinta-feira');
    break;
  case 5:
    console.log('Sexta-feira');
    break;
  case 6:
    console.log('Sábado');
    break;
  case 7:
    console.log('Domingo');
    break;
  default:
    console.log('Digite um número de 1 a 7.')
    break;
}  

// Essa função determina qual número do mês e quantidade de dias

let mes = 12;  

switch (mes) {
  case 1:
    console.log('Janeiro,  31 dias.');
    break;
  case 2:
    console.log('Fevereiro, 28 dias (se for ano bissexto  são 29 dias).');
    break;
  case 3:
    console.log('Março, 31 dias.');
    break;
  case 4:
    console.log('Abril, 30 dias.');
    break;
  case 5:
    console.log('Maio, 31 dias.');
    break;
  case 6:
    console.log('Junho, 30 dias.');
    break;
  case 7:
    console.log('Julho, 31 dias.');
    break;
  case 8:
    console.log('Agosto, 31 dias.');
    break;
  case 9:
    console.log('Setembro, 30 dias.');
    break;
  case 10:
    console.log('Outubro, 31 dias.');
    break;
  case 11:
    console.log('Novembro, 30 dias.');
    break;
  case 12:
    console.log('Dezembro, 31 dias.');
    break;
  default:
    console.log('Digite um número de 1 a 12.')
    break;
}

// Essa função determina se o dado enviado é uma vogal ou uma consoante.
let letra = "b"

switch (letra){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log('Essa letra é uma vogal.');
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "x":
    case "w":
    case "y":
    case "z":
      console.log('Essa letra é uma consoante.');
      break;
    default:
      console.log('Esse dado é inválido. digite apenas uma letra.')
}  

//  Essa função recebe três ângulos e determina se eles formam um triângulo válido.

function validarTriangulo(ang1, ang2, ang3){
  ang1 = parseInt(ang1);
  ang2 = parseInt(ang2);
  ang3 = parseInt(ang3);

  if (ang1 === 0 || ang2 === 0 || ang3 === 0){
    return 'O valor desse ângulo é inválido, digite um número maior do que 0.';
  } else if (ang1 === 180 || ang2 === 180 || ang3 === 180){
    return 'O valor desse ângulo é inválido, digite um número menor do que 180.';
  } else if (ang1 + ang2 + ang3 === 180){
    return 'Esse triângulo é válido! :)';
  } else{
    return 'Por favor, digite apenas valores numéricos.'
  }
}

console.log(validarTriangulo(60, 60, 60));


// Essa função verifica atráves de delta se é possível calcular x' e x". Se delta for menor que zero, a equação não tem raízes. Se delta for igual a zero, a equação tem uma raiz. Se delta for maior que zero, a equação tem duas raízes.

let delta;

function verificarBhaskara(a, b, c){
  delta = b**2 - 4*a*c;

  if (delta < 0){
    return 'Essa função não tem raízes.';
  } else if (delta === 0){
    return 'Essa função tem apenas uma raiz.';
  } else if ( delta > 0){
    return 'Essa função tem duas raízes.';
  } else{
    return 'Por favor digite um valor numérico inteiro.';
  }
}

console.log(verificarBhaskara(1,5,4));