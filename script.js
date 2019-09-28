function calcularPonto(resultado){
  if(resultado === 'v'){
    return '3 pontos.';
  } else if (resultado === 'e'){
    return '1 ponto.';
  } else if (resultado === 'd'){
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

switch (resultado){
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

let str = prompt("Digite a palavra")

function palindrome(str){
  return str == str.split('').reverse().join('');
}

console.log(palindrome(str));
    
 
function verificarNum(num){
  if (num % 2 == 0){
    return "Esse número é par."
  }
  return "Esse número é ímpar."
}

console.log(verificarNum(2));


let angulo = prompt("Digite o valor do seu ângulo.")

function classificarAngulo(angulo){
  if (angulo > 0 && angulo < 90){
    return "Esse ângulo é agudo.";
  } else if (angulo == 90){
    return "Esse ângulo é reto.";
  } else if (angulo > 90 && angulo < 180){
    return "Esse ângulo é obtuso.";
  } else if (angulo == 0 || angulo == 180){
    return "Esse ângulo é raso.";
  } else if (angulo > 180 && angulo < 360){
    return "Esse ângulo é côncavo.";
  } else if (angulo == 360){
    return "Esse ângulo é completo.";
  }
  return "Esse valor não é válido. Escolha um número entre 0 e 360.";
}

console.log(classificarAngulo(angulo));
