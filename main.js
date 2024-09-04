// questão 1
let indice = 13;
let soma = 0;

for (let k = 1; k <= indice; k++) {
  soma += k;
}

console.log(soma)

//valor final = 91



// questão 2

function pertenceFibonacci(numero) {
  let x = 0, y = 1;
  while (y < numero) {
    y = x + y;
    x = y - x;
  }
  return y === numero;
}

const numero = 8;

if (pertenceFibonacci(numero) || numero === 0) {
  console.log(`O número ${numero} pertece à sequência Fibonacci`)
} else {
  console.log(`O número ${numero} não pertence à sequência Fibonacci`)
}



// questão 3

function analisarFaturamento(faturamentoDiario) {
  if (!faturamentoDiario.length) {
    return {
      menorValor: null,
      maiorValor: null,
      diasAcimaDaMedia: 0
    }
  }


  const soma = faturamentoDiario.reduce((total, valor) => total + valor, 0);
  const media = soma / faturamentoDiario.length;


  const menorValor = Math.min(...faturamentoDiario);
  const maiorValor = Math.max(...faturamentoDiario);


  const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > media).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}


const faturamentoDiario = [1000, 2000, 1500, 3000, 500];
const resultado = analisarFaturamento(faturamentoDiario);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);


//questão 4

function calcularPercentualFaturamento(faturamentoPorEstado) {

  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);


  const percentuais = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
    const percentual = ((valor / faturamentoTotal) * 100).toFixed(2);
    return { estado, percentual };
  });

  return percentuais;
}


const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};


const resultados = calcularPercentualFaturamento(faturamento);
resultados.forEach(resultado => {
  console.log(`${resultado.estado}: ${resultado.percentual}%`);
});


// questão 5

function inverterString(str) {
  let novaString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }

  return novaString;
}

const minhaString = "Target Sistemas";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);