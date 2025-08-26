const nome = document.getElementById('nome');
let corAtual = true; // true = cor1, false = cor2

setInterval(() => {
  if (corAtual) {
    nome.style.color = '#a65e58'; // segunda cor
  } else {
    nome.style.color = '#d38e7eff'; // primeira cor
  }
  corAtual = !corAtual; // alterna a cor
}, 1000);
