const perguntas = [
  {
    pergunta: "Os dinossauros surgiram no planeta em qual era:",
    respostas: [
      { opcao: "Era Mesozoica", correto: true },
      { opcao: "Era Paleozoica", correto: false },
      { opcao: "Era Arqueózoica", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do período mais recente da Era Mesozoica, no qual os dinossauros foram extintos?",
    respostas: [
      { opcao: "Triássico", correto: false },
      { opcao: "Jurássico", correto: false },
      { opcao: "Cretáceo", correto: true }
    ]
  },
  {
    pergunta: "Qual desses dinossauros era um carnívoro?",
    respostas: [
      { opcao: "Tricerátops", correto: false },
      { opcao: "Tiranossauro Rex", correto: true },
      { opcao: "Brachiossauro", correto: false }
    ]
  },
  {
    pergunta: "Qual desses dinossauros era um herbívoro?",
    respostas: [
      { opcao: "Velociraptor", correto: false },
      { opcao: "Estegossauro", correto: true },
      { opcao: "Carnotauro", correto: false }
    ]
  },
  {
    pergunta: "Qual foi uma das principais causas da extinção dos dinossauros?",
    respostas: [
      { opcao: "Erupções vulcânicas", correto: false },
      { opcao: "Impacto de um asteroide", correto: true },
      { opcao: "Mudança de órbita da Terra", correto: false }
    ]
  },
  {
    pergunta: "Qual desses dinossauros possuía uma grande crista óssea na cabeça?",
    respostas: [
      { opcao: "Pteranodonte", correto: false },
      { opcao: "Parasaurolofo", correto: true },
      { opcao: "Iguanodonte", correto: false }
    ]
  },
  {
    pergunta: "Os fósseis de dinossauros são encontrados principalmente em que tipo de rocha?",
    respostas: [
      { opcao: "Ígnea", correto: false },
      { opcao: "Metamórfica", correto: false },
      { opcao: "Sedimentar", correto: true }
    ]
  },
  {
    pergunta: "Qual desses dinossauros era conhecido por possuir uma couraça e uma clava na cauda?",
    respostas: [
      { opcao: "Anquilossauro", correto: true },
      { opcao: "Espinossauro", correto: false },
      { opcao: "Dromeossauro", correto: false }
    ]
  },
  {
    pergunta: "Qual era a principal característica do Velociraptor?",
    respostas: [
      { opcao: "Tamanho gigante", correto: false },
      { opcao: "Inteligência e garras afiadas", correto: true },
      { opcao: "Chifres grandes", correto: false }
    ]
  },
  {
    pergunta: "Os dinossauros são mais relacionados com qual grupo de animais modernos?",
    respostas: [
      { opcao: "Répteis", correto: false },
      { opcao: "Aves", correto: true },
      { opcao: "Anfíbios", correto: false }
    ]
  }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.addEventListener("click", () => verificarResposta(resposta.correto));
    respostasElemento.appendChild(botao);
  });
}

function verificarResposta(correto) {
  if (correto) {
    acertos++;
  }

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    finalizarJogo();
  }
}

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
