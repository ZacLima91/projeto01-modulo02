const digimons = [
  [
    (levelOne = {
      digimon: "koromon",
      descrition:
        "Koromon é um Digimon Menor. É um diminuto Digimon que desprendeu a penugem que cobre a sua superfície e cujo corpo cresceu ainda mais. Embora tenha se tornado capaz de se mover mais ativamente, ainda é incapaz de lutar. Ele pode produzir bolhas de sua boca para intimidar os oponentes.",
    }),
    (levelTwo = {
      digimon: "agumon",
      descrition:
        "Agumon é um Digimon Réptil que desenvolveu bipedismo e tem a aparência de um pequeno dinossauro. Por ainda estar a caminho da fase adulta, o seu poder é reduzido, no entanto, a sua personalidade é muito feroz, pelo que não entende o medo. Cresceram-lhe afiadas e robustas garras em ambas as mãos e pés, cujo poder demonstra em batalha.",
    }),
    (levelThree = {
      digimon: "greymon",
      descrition:
        "Greymon é um Digimon Dinossauro. A pele craniana de Greymon endureceu de modo que está coberta por uma concha parecida com um besouro rinoceronte . É um Digimon extremamente agressivo, com um corpo como uma arma letal coberta de garras afiadas e chifres gigantescos. No entanto, é altamente inteligente e, se você conseguir domá-lo, provavelmente não há nenhum monstro tão forte.",
    }),
  ],
  [
    (levelOne = {
      digimon: "tokomon",
      descrition:
        "Um pequeno Digimon com saliências semelhantes a membros crescendo sob seu corpo (cabeça?). Bebês Digimons que cresceram membros são extremamente raros e sua aparência é extremamente fofa. No entanto, deve-se ter cuidado ao estender a mão apenas por causa de sua fofura, pois de repente ele abrirá a boca e morderá com as presas crescendo dentro. Dito isto, não tem má vontade e tem uma personalidade muito inocente.",
    }),
    (levelTwo = {
      digimon: "patamon",
      descrition:
        "Patamon é um Digimon Mamífero. Caracteriza-se por suas orelhas grandes, e é capaz de voar pelo ar usando-as como grandes asas, mas como só vai a uma velocidade de 1 km/h, diz-se que é definitivamente mais rápido andando. No entanto, é muito popular porque sua aparência é fofa quando está voando desesperadamente (embora pareça que não pareça o mesmo). Devido à sua personalidade extremamente obediente, seus treinadores são bem defendidos.",
    }),
    (levelThree = {
      digimon: "angemon",
      descrition:
        "Angemon é um Digimon Anjo com seis asas brilhantes, cujo corpo é revestido com um tecido de tão puro branco que parece divino. É um ser de perfeita virtude e, apesar de o descreverem como um Digimon que traz felicidade, ao confrontar o mal tudo que faz é atacar, com extrema calma, até que o oponente seja completamente aniquilado. Nas várias vezes em que o Digital World é visitado por uma crise, é dito que ele desce para liderar Digimons da mesma espécie.",
    }),
  ],

  [
    (levelOne = {
      digimon: "tsunomon",
      descrition:
        "Tsunomon é um Digimon Menor. É um diminuto Digimon que endureceu uma das antenas em sua cabeça como Punimon . De Punimon, ele realizou uma Digivolução mais animalesca e está coberto de pelos do corpo tufos. Ainda está no auge da brincadeira e tem uma personalidade que adora brincadeiras, mas seu instinto de combate não despertou.",
    }),
    (levelTwo = {
      digimon: "gabumon",
      descrition:
        "Gabumon é um Digimon Réptil. Embora esteja coberto por uma pele de pele, ainda é claramente um Digimon Réptil. Devido à sua personalidade extremamente tímida e tímida, ele sempre reúne os dados que Garurumon deixa para trás e o molda em uma pele para usar. Por estar usando a pele de Garurumon, que é temido por outros Digimons, ele cumpre o papel de se proteger como resultado de proteger seu corpo. Quando está vestindo a pele de pele, sua personalidade faz uma mudança completa de 180°.",
    }),
    (levelThree = {
      digimon: "garurumon",
      descrition:
        "Garurumon é um Digimon Animal. É coberto de pêlo azul, branco e prateado tão duro quanto 'Mithril', que é chamado de metal raro lendário, e como as lâminas que crescem nas pontas de seus ombros têm bordas afiadas, qualquer coisa que as toque é cortada em pedaços. peças. Como possui um instinto de combate furioso e tendões afiados em terras geladas, bem como agilidade carnívora e precisão para derrubar seus alvos de forma confiável, é um ser temido por outros Digimons. No entanto, sua inteligência é muito alta e obedece fielmente àqueles que reconhece como seu mestre ou líder. ",
    }),
  ],
];
const img = document.querySelector(".caracter");
const idDigimon = document.querySelector("#koromon");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const descriptionDigimon = document.querySelector("#descriptionDigimon");
const button = document.querySelector("button");
const buttonDiv = document.querySelector("#button");
const tela = document.querySelector("body");
let contDirection = 0;


right.addEventListener("click", function () {
  contDirection++;
  switch (contDirection) {
    case 1:
      img.setAttribute("src", `assets/images/${digimons[1][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[1][0].descrition;
      img.setAttribute("id", "tokomon");
      break;
    case 2:
      img.setAttribute("src", `assets/images/${digimons[2][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[2][0].descrition;
      img.setAttribute("id", "tsunomon");
      break;
    case 3:
      img.setAttribute("src", `assets/images/${digimons[0][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[0][0].descrition;
      img.setAttribute("id", "koromon");
      contDirection = 0;
      break;
  }
});

left.addEventListener("click", function () {
  switch (contDirection) {
    case 2:
      img.setAttribute("src", `assets/images/${digimons[1][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[1][0].descrition;
      img.setAttribute("id", "tokomon");
      break;

    case 1:
      img.setAttribute("src", `assets/images/${digimons[0][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[0][0].descrition;
      img.setAttribute("id", "koromon");
      break;
    case 0:
      img.setAttribute("src", `assets/images/${digimons[2][0].digimon}.png`);
      descriptionDigimon.textContent = digimons[2][0].descrition;
      img.setAttribute("id", "tsunomon");
      contDirection = 3;
      break;
  }
  contDirection--;
});

let cont = 0;
let contLVL = 0;

function evoluir() {
  tela.style.backgroundSize = ' 100% 150%';
  cont++;
  switch (idDigimon.id) {
    case "koromon":
      switch (cont) {
        case 1:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/koromon-agumon-and.gif)";
            tela.style.backgroundSize = ' 100% 700%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/koromon-agumon.gif)";
          }
          
          
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[0][1].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[0][1].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "EVOLUIR";
          }, 3000);

          break;
        case 2:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/agumon-greymon-and.gif)";
            tela.style.backgroundSize = ' 100% 700%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/agumon-greymon.gif)";
            tela.style.backgroundSize = 'cover'
          }
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[0][2].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[0][2].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "INICIAL";
          }, 10000);
          break;
        case 3:
          left.setAttribute("src", "assets/images/esquerda.gif");
          right.setAttribute("src", "assets/images/direita.gif");
          img.setAttribute(
            "src",
            `assets/images/${digimons[0][0].digimon}.png`
          );

          descriptionDigimon.textContent = digimons[0][0].descrition;
          button.textContent = "EVOLUIR";
          cont = 0;
          break;
      }
      break;
    case "tokomon":
      switch (cont) {
        case 1:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/tokomon-patamon-and.gif)";
            tela.style.backgroundSize = ' 100% 700%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/tokomon-patamon.gif)";
            tela.style.backgroundSize = 'cover'
          }
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[1][1].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[1][1].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "EVOLUIR";
          }, 5000);
          break;
        case 2:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/patamon-angemon-and.gif)";tela.style.backgroundSize = ' 100% 700%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/patamon-angemon.gif)";
            tela.style.backgroundSize = 'cover'
          }
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[1][2].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[1][2].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "INICIAL";
          }, 5000);
          break;
        case 3:
          left.setAttribute("src", "assets/images/esquerda.gif");
          right.setAttribute("src", "assets/images/direita.gif");
          img.setAttribute(
            "src",
            `assets/images/${digimons[1][0].digimon}.png`
          );
          descriptionDigimon.textContent = digimons[1][0].descrition;
          button.textContent = "EVOLUIR";
          cont = 0;
          break;
      }
      break;
    case "tsunomon":
      switch (cont) {
        case 1:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/tsunomon-gabumon-and.gif)";
            tela.style.backgroundSize = ' 100% 600%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/tsunomon-gabumon.gif)";
          }
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[2][1].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[2][1].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "EVOLUIR";
          }, 2600);
          break;
        case 2:
          if (window.matchMedia("(min-width:300px)").matches) {
            tela.style.backgroundImage = "url(assets/images/gabumon-garurumon-and.gif)";
            tela.style.backgroundSize = ' 100% 700%';
          } else if(window.matchMedia("(min-width:700px)").matches) {
            tela.style.backgroundImage = "url(assets/images/gabumon-garurumon.gif)";
          }
          descriptionDigimon.textContent = "";
          left.setAttribute("src", "");
          right.setAttribute("src", "");
          img.setAttribute("src", "");
          buttonDiv.style.display = "none";
          setTimeout(function () {
            tela.style.backgroundImage = "url(assets/images/paisagem.gif)";
            img.setAttribute(
              "src",
              `assets/images/${digimons[2][2].digimon}.png`
            );
            tela.style.backgroundSize = ' 100% 150%';
            descriptionDigimon.textContent = digimons[2][2].descrition;
            buttonDiv.style.display = "flex";
            button.textContent = "INICIAL";
          }, 6500);
          break;
        case 3:
          left.setAttribute("src", "assets/images/esquerda.gif");
          right.setAttribute("src", "assets/images/direita.gif");
          img.setAttribute(
            "src",
            `assets/images/${digimons[2][0].digimon}.png`
          );
          descriptionDigimon.textContent = digimons[2][0].descrition;
          button.textContent = "EVOLUIR";
          cont = 0;
          break;
      }
      break;
  }
}
