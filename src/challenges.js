// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let primeiroNome = string[0];
  let ultimoNome = string[string.length - 1];
  return ultimoNome.concat(', ', primeiroNome);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let pontosTotais = vitorias + empates;
  return pontosTotais;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = -5;
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }
  let repeticao = 0;
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  let quemPega = '';
  if (distancia1 < distancia2) {
    quemPega = 'cat1';
  } else if (distancia1 > distancia2) {
    quemPega = 'cat2';
  } else {
    quemPega = 'os gatos trombam e o rato foge';
  }
  return quemPega;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
