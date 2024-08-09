let buttonWidth = 200;
let buttonHeight = 50;
let img, rectBG;
let canvasWidth = 600;
let canvasHeight = 400;
let minhaFonte;
let menuMusic;
let quizMusic;
let scoreMusic;




let temas = {
"Matemática": [
    { pergunta: "Quanto é 2 + 2?", alternativas: ["3", "4", "5", "6"], correta: "4", explicacao: "2 + 2 é igual a 4." },
    { pergunta: "Quanto é 5 * 5?", alternativas: ["10", "15", "20", "25"], correta: "25", explicacao: "5 * 5 é igual a 25." },
    { pergunta: "Quanto é 10 / 2?", alternativas: ["2", "3", "5", "6"], correta: "5", explicacao: "10 dividido por 2 é igual a 5." },
    { pergunta: "Quanto é 7 - 3?", alternativas: ["2", "4", "5", "6"], correta: "4", explicacao: "7 menos 3 é igual a 4." },
    { pergunta: "Qual é a raiz quadrada de 16?", alternativas: ["2", "4", "8", "16"], correta: "4", explicacao: "A raiz quadrada de 16 é 4." },
    { pergunta: "Qual é a fórmula para calcular a área de um triângulo?", alternativas: ["base * altura", "base * altura / 2", "lado * lado", "pi * raio^2"], correta: "base * altura / 2", explicacao: "A fórmula para a área de um triângulo é base * altura / 2." },
    { pergunta: "Se um carro viaja a 60 km/h, quanto tempo ele levará para percorrer 120 km?", alternativas: ["1 hora", "2 horas", "3 horas", "4 horas"], correta: "2 horas", explicacao: "A 60 km/h, leva 2 horas para percorrer 120 km." },
    { pergunta: "Qual é o valor de pi aproximadamente?", alternativas: ["2.14", "3.14", "3.41", "2.71"], correta: "3.14", explicacao: "O valor aproximado de pi é 3.14." },
    { pergunta: "Qual é a fórmula para a área de um círculo?", alternativas: ["2 * pi * raio", "pi * raio * raio", "pi * raio / 2", "2 * raio"], correta: "pi * raio * raio", explicacao: "A fórmula para a área de um círculo é pi * raio * raio." },
    { pergunta: "Qual é a unidade de medida de força no SI?", alternativas: ["Newton", "Pascal", "Joule", "Watt"], correta: "Newton", explicacao: "A unidade de medida de força no Sistema Internacional é o Newton." }
  ],

  "Literatura": [
    { pergunta: "Quem escreveu 'Dom Quixote'?", alternativas: ["William Shakespeare", "Miguel de Cervantes", "Charles Dickens", "Jane Austen"], correta: "Miguel de Cervantes", explicacao: "Miguel de Cervantes é o autor de 'Dom Quixote'." },
    { pergunta: "Quem é o autor de 'Hamlet'?", alternativas: ["Dante Alighieri", "Leon Tolstói", "William Shakespeare", "Fiódor Dostoiévski"], correta: "William Shakespeare", explicacao: "William Shakespeare escreveu 'Hamlet'." },
    { pergunta: "Quem escreveu 'A Odisséia'?", alternativas: ["Homero", "Virgílio", "Platão", "Sócrates"], correta: "Homero", explicacao: "Homero é o autor de 'A Odisséia'." },
    { pergunta: "Quem é o autor de 'Orgulho e Preconceito'?", alternativas: ["Charlotte Brontë", "Emily Dickinson", "Jane Austen", "Louisa May Alcott"], correta: "Jane Austen", explicacao: "Jane Austen escreveu 'Orgulho e Preconceito'." },
    { pergunta: "Quem escreveu 'Cem Anos de Solidão'?", alternativas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Carlos Fuentes"], correta: "Gabriel García Márquez", explicacao: "Gabriel García Márquez é o autor de 'Cem Anos de Solidão'." },
    { pergunta: "Qual é o nome do famoso romance de Leo Tolstoy sobre a aristocracia russa?", alternativas: ["Guerra e Paz", "Anna Karenina", "Os Irmãos Karamazov", "O Mestre e Margarida"], correta: "Anna Karenina", explicacao: "Leo Tolstoy escreveu 'Anna Karenina', um romance sobre a aristocracia russa." },
    { pergunta: "Qual é o autor de 'O Grande Gatsby'?", alternativas: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "J.D. Salinger"], correta: "F. Scott Fitzgerald", explicacao: "F. Scott Fitzgerald é o autor de 'O Grande Gatsby'." },
    { pergunta: "Qual é o título da obra-prima de George Orwell sobre um regime totalitário?", alternativas: ["A Revolução dos Bichos", "1984", "Admirável Mundo Novo", "Fahrenheit 451"], correta: "1984", explicacao: "George Orwell escreveu '1984', um romance sobre um regime totalitário." },
    { pergunta: "Quem escreveu 'O Sol é para Todos'?", alternativas: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"], correta: "Harper Lee", explicacao: "Harper Lee é a autora de 'O Sol é para Todos'." },
    { pergunta: "Qual é o livro mais famoso de J.R.R. Tolkien?", alternativas: ["O Senhor dos Anéis", "O Hobbit", "As Crônicas de Nárnia", "A Bússola de Ouro"], correta: "O Senhor dos Anéis", explicacao: "J.R.R. Tolkien é famoso por 'O Senhor dos Anéis'." },
    { pergunta: "Qual é o nome do romance de Victor Hugo sobre a Revolução Francesa?", alternativas: ["Os Miseráveis", "O Corcunda de Notre-Dame", "Notre-Dame de Paris", "A Bela e a Fera"], correta: "Os Miseráveis", explicacao: "Victor Hugo escreveu 'Os Miseráveis', que aborda a Revolução Francesa." },
    { pergunta: "Quem escreveu 'O Pequeno Príncipe'?", alternativas: ["Antoine de Saint-Exupéry", "Jules Verne", "H.G. Wells", "André Gide"], correta: "Antoine de Saint-Exupéry", explicacao: "Antoine de Saint-Exupéry é o autor de 'O Pequeno Príncipe'." },
    { pergunta: "Qual é a obra mais famosa de Jane Austen?", alternativas: ["Emma", "Sentimento e Sensibilidade", "Orgulho e Preconceito", "Mansfield Park"], correta: "Orgulho e Preconceito", explicacao: "Jane Austen é famosa por 'Orgulho e Preconceito'." },
    { pergunta: "Quem escreveu 'O Estrangeiro'?", alternativas: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "André Gide"], correta: "Albert Camus", explicacao: "Albert Camus é o autor de 'O Estrangeiro'." }
  ],
  "História": [
    { pergunta: "Quem foi o primeiro presidente dos Estados Unidos?", alternativas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correta: "George Washington", explicacao: "George Washington foi o primeiro presidente dos Estados Unidos." },
    { pergunta: "Em que ano começou a Revolução Francesa?", alternativas: ["1776", "1789", "1799", "1804"], correta: "1789", explicacao: "A Revolução Francesa começou em 1789." },
    { pergunta: "Qual foi o evento que marcou o fim da Idade Média?", alternativas: ["Queda de Constantinopla", "Descobrimento das Américas", "Reforma Protestante", "Revolução Industrial"], correta: "Queda de Constantinopla", explicacao: "A queda de Constantinopla em 1453 marcou o fim da Idade Média." },
    { pergunta: "Quem foi o imperador romano que dividiu o Império Romano em dois?", alternativas: ["Augusto", "Nero", "Constantino", "Trajano"], correta: "Constantino", explicacao: "O imperador Constantino dividiu o Império Romano em dois." },
    { pergunta: "Qual foi o principal autor da teoria da evolução das espécies?", alternativas: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "Jean-Baptiste Lamarck"], correta: "Charles Darwin", explicacao: "Charles Darwin é conhecido por sua teoria da evolução das espécies." },
    { pergunta: "Em que ano terminou a Primeira Guerra Mundial?", alternativas: ["1914", "1918", "1920", "1925"], correta: "1918", explicacao: "A Primeira Guerra Mundial terminou em 1918." },
    { pergunta: "Qual foi a causa principal da Guerra Civil Americana?", alternativas: ["Diferenças econômicas", "Escravidão", "Diferenças culturais", "Política de imigração"], correta: "Escravidão", explicacao: "A principal causa da Guerra Civil Americana foi a escravidão." },
    { pergunta: "Quem foi o líder da União Soviética durante a Segunda Guerra Mundial?", alternativas: ["Leon Trotsky", "Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev"], correta: "Joseph Stalin", explicacao: "Joseph Stalin foi o líder da União Soviética durante a Segunda Guerra Mundial." },
    { pergunta: "Quem descobriu a América em 1492?", alternativas: ["Vasco da Gama", "Cristóvão Colombo", "Ferdinando de Magalhães", "Hernán Cortés"], correta: "Cristóvão Colombo", explicacao: "Cristóvão Colombo descobriu a América em 1492." },
    { pergunta: "Em que ano a queda do Muro de Berlim ocorreu?", alternativas: ["1987", "1988", "1989", "1990"], correta: "1989", explicacao: "A queda do Muro de Berlim ocorreu em 1989." },
    { pergunta: "Quem foi o faraó que mandou construir as pirâmides de Gizé?", alternativas: ["Tutancâmon", "Ramsés II", "Khufu", "Cleópatra"], correta: "Khufu", explicacao: "O faraó Khufu (ou Quéops) mandou construir as pirâmides de Gizé." },
    { pergunta: "Qual foi a principal causa da queda do Império Romano Ocidental?", alternativas: ["Invasões bárbaras", "Crise econômica", "Divisão do Império", "Conflitos internos"], correta: "Invasões bárbaras", explicacao: "As invasões bárbaras foram uma das principais causas da queda do Império Romano Ocidental." },
    { pergunta: "Quem foi o líder militar que liderou a Revolução Russa de 1917?", alternativas: ["Leon Trotsky", "Joseph Stalin", "Vladimir Lenin", "Nicholas II"], correta: "Vladimir Lenin", explicacao: "Vladimir Lenin foi o líder militar que liderou a Revolução Russa de 1917." },
    { pergunta: "Qual evento marcou o início da Segunda Guerra Mundial?", alternativas: ["Invasão da Polônia pela Alemanha", "Ataque a Pearl Harbor", "Queda da França", "Invasão da Manchúria"], correta: "Invasão da Polônia pela Alemanha", explicacao: "A invasão da Polônia pela Alemanha em 1939 marcou o início da Segunda Guerra Mundial." },
    { pergunta: "Qual foi o objetivo principal da Inconfidência Mineira?", alternativas: ["Independência do Brasil", "Libertação dos escravos", "Proclamação da República", "Autonomia econômica de Minas Gerais"], correta: "Autonomia econômica de Minas Gerais", explicacao: "A Inconfidência Mineira tinha como objetivo a autonomia econômica de Minas Gerais." }
  ],
  "Esportes": [
    { pergunta: "Qual é o time de futebol mais vitorioso do Campeonato Brasileiro de Futebol?", alternativas: ["Flamengo", "São Paulo", "Palmeiras", "Santos"], correta: "Palmeiras", explicacao: "O Palmeiras é o time com mais títulos do Campeonato Brasileiro de Futebol." },
    { pergunta: "Quantas medalhas de ouro o Brasil conquistou nas Olimpíadas de 2016?", alternativas: ["5", "7", "8", "10"], correta: "7", explicacao: "O Brasil conquistou 7 medalhas de ouro nas Olimpíadas de 2016." },
    { pergunta: "Qual é o esporte conhecido como 'o mais popular do mundo'?", alternativas: ["Futebol", "Basquete", "Tênis", "Rugby"], correta: "Futebol", explicacao: "O futebol é conhecido como o esporte mais popular do mundo." },
    { pergunta: "Quem detém o recorde mundial dos 100 metros rasos?", alternativas: ["Usain Bolt", "Tyson Gay", "Asafa Powell", "Yohan Blake"], correta: "Usain Bolt", explicacao: "Usain Bolt detém o recorde mundial dos 100 metros rasos." },
    { pergunta: "Qual país venceu a Copa do Mundo de Futebol de 2018?", alternativas: ["França", "Croácia", "Alemanha", "Brasil"], correta: "França", explicacao: "A França venceu a Copa do Mundo de Futebol de 2018." },
    { pergunta: "Quantas vezes o Brasil venceu a Copa do Mundo de Futebol até 2022?", alternativas: ["4", "5", "6", "7"], correta: "5", explicacao: "O Brasil venceu a Copa do Mundo de Futebol 5 vezes até 2022." },
    { pergunta: "Qual é a modalidade esportiva com mais jogadores em campo ao mesmo tempo?", alternativas: ["Futebol", "Basquete", "Vôlei", "Rugby"], correta: "Rugby", explicacao: "O rugby é a modalidade esportiva com mais jogadores em campo ao mesmo tempo, com 15 jogadores em cada time." },
    { pergunta: "Qual atleta é conhecido como 'O Homem mais rápido do mundo'?", alternativas: ["Usain Bolt", "Michael Phelps", "Cristiano Ronaldo", "LeBron James"], correta: "Usain Bolt", explicacao: "Usain Bolt é conhecido como 'O Homem mais rápido do mundo'." },
    { pergunta: "Qual é o nome do campeonato mundial de Fórmula 1?", alternativas: ["Fórmula 1 World Championship", "World Rally Championship", "NASCAR Cup Series", "Le Mans Series"], correta: "Fórmula 1 World Championship", explicacao: "O campeonato mundial de Fórmula 1 é chamado de Fórmula 1 World Championship." },
    { pergunta: "Qual é o esporte onde os jogadores usam uma raquete para acertar uma bola sobre uma rede?", alternativas: ["Tênis", "Badminton", "Pingue-pongue", "Vôlei"], correta: "Tênis", explicacao: "Tênis é o esporte onde os jogadores usam uma raquete para acertar uma bola sobre uma rede." }
  ]
};

function desenharRetanguloArredondado(x, y, width, height, radius) {
  rectMode(CORNER);
  fill(255);
  stroke(0);  
  rect(x, y, width, height, radius);
}


function formatarTexto(texto) {
  const palavras = texto.split(' ');
  if (palavras.length > 6) {
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
      resultado += palavras[i] + ' ';
      if ((i + 1) % 6 === 0) {
        resultado += '\n';
      }
    }
    return resultado.trim();
  }
  return texto;
}

for (let categoria in temas) {
  temas[categoria].forEach(item => {
    item.pergunta = formatarTexto(item.pergunta);
    item.explicacao = formatarTexto(item.explicacao);
  });
}

console.log(temas);

let voltarButtonWidth = 80;
let voltarButtonHeight = 45;
let modo = 0; // "menu", "instrucoes", "creditos", "selecionarTema", "quiz", "resultado", "explicacao"

let voltar;
let temaSelecionado;
let perguntasSelecionadas;
let perguntaAtualIndex = 0;
let acertos = 0;
let erros = 0;
let pontuacao = 0;
let perguntasErradas = [];
let retangulosErro = [];
let yOffset = 120; 

function preload() {
  img = loadImage('background.png');
  rectBG = loadImage('rectBG.png');
  questionBG = loadImage('rectBG.png');
  scoreBG = loadImage('rectBG.png');
  titleBG = loadImage('rectBG.png')
  voltar = loadImage('back.png')
  minhaFonte = loadFont('minhaFonte.ttf')
  menuMusic = loadSound('musicaMenu.mp3')
  quizMusic = loadSound('musicaQuiz.mp3')
  scoreMusic = loadSound('musicaResultados.mp3')
  
}
function playMusic(musica) {
  if (!musica.isPlaying()) {
    musica.play();
  }
}

function stopMusic(musica) {
  if (musica.isPlaying()) {
    musica.stop();
  }
}


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  background(img);
  textFont(minhaFonte);
}


function draw() {
  verificarModo();
}

function verificarModo() {
  switch (modo) {
    case 0:
      menu();
      break;
    case 1:
      instrucoes();
      break;
    case 2:
      creditos();
      break;
    case 3:
      selecionarTema();
      break;
    case 4:
      exibirQuiz();
      break;
    case 5:
      exibirResultado();
      break;
    case 6:
      exibirExplicacao();
      break;
  }
  if (modo !== 0) { 
    desenharBotaoVoltar();
  }
}

function menu() {
  background(img); 
  textSize(32);
    if(modo ===0){
  playMusic(menuMusic)
    stopMusic(quizMusic)
  stopMusic(scoreMusic)
    }
  let titleText = 'Quiz ou Não Quis';
  let titleWidth = textWidth(titleText);
  let titleHeight = textAscent() + textDescent();
  let titleX = (canvasWidth - titleWidth) / 2;
  let titleY = 50 - titleHeight / 2;

  image(titleBG, titleX - 40, titleY - 6, titleWidth + 80, titleHeight + 20);

  fill('black'); // Cor do texto sobre a imagem de fundo
  text(titleText, canvasWidth / 2, 50)
  
  let y = 120;

  for (let i = 0; i < 3; i++) {
    fill(0);
    rectMode(CORNER);
    image(rectBG, (canvasWidth / 2) - (buttonWidth / 2), y, buttonWidth, buttonHeight);
    fill(0);
    textSize(22);
    text(i === 0 ? "Iniciar" : i === 1 ? "Instruções" : "Créditos", canvasWidth / 2, y + buttonHeight / 2);
    y += 70;
  }
}

function instrucoes() {
  background(img);
  

  
  textSize(32);
  let titleText = 'Instruções';
  let titleWidth = textWidth(titleText);
  let titleHeight = textAscent() + textDescent();
  let titleX = (canvasWidth - titleWidth) / 2;
  let titleY = 20 - titleHeight / 2;

  // Desenha o retângulo com a imagem de fundo
  image(titleBG, titleX - 20, titleY -  5, titleWidth + 40, titleHeight + 15);

  fill('black');
  textAlign(CENTER, CENTER);
  text(titleText, canvasWidth / 2, 20);

  textSize(18);
  textAlign(LEFT, TOP);
  fill(0); // Cor do texto das instruções
  text('1. Selecione um tema no menu principal.\n' +
       '2. Responda às perguntas escolhendo uma das alternativas apresentadas.\n' +
       '3. Após responder todas as perguntas, veja seu placar final.\n' +
       '4. Caso você erre alguma pergunta, poderá ver quais foram as questões erradas.\n' +
       '5. Clique nas questões erradas para ver explicações detalhadas.\n' +
       '6. Use a seta amarela no canto inferior esquerdo para retornar à tela anterior a qualquer momento.\n' +
       'Divirta-se e boa sorte!', 
       80, 75, canvasWidth - 100);
}


function creditos() {
  background(img);
  textSize(16);
  fill(0);
  textAlign(LEFT);
  text(
    'Feito por:\n' +
    'Guilherme Lincoln de Oliveira Lima\n' +
    'guilherme.oliveira.107@ufrn.edu.br\n\n' +
    'Artur Daniel Borges Lopes\n' +
    'artur.lopes.701@ufrn.edu.br\n\n' +
    'Imagens utilizadas:\n' +
    'https://drive.google.com/file/d/\n14ScxooBvmuRJNOnQn3Ehk0_XuWRgn4wW/\nview?usp=sharing',
    100, 179
  );
   
}


function desenharBotaoVoltar() {
  image(voltar, 20, 350, voltarButtonWidth - 40, voltarButtonHeight - 10);

  // Define a cor do texto
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);

 
}


function mousePressed() {
  if (modo === 0) { // Menu
    let y = 120;
    for (let i = 0; i < 3; i++) {
      if (mouseX > (canvasWidth / 2) - (buttonWidth / 2) && mouseX < (canvasWidth / 2) + (buttonWidth / 2) &&
          mouseY > y && mouseY < y + buttonHeight) {
        if (i === 0) {
          iniciar(); // Iniciar o quiz
        } else if (i === 1) {
          modo = 1; // Mostrar instruções
        } else if (i === 2) {
          modo = 2; // Mostrar créditos
        }
        break;
      }
      y += 70;
    }
  } else if (modo === 3) { // Seleção de tema
    let y = 120;
    for (let tema in temas) {
      if (mouseX > (canvasWidth / 2) - (buttonWidth / 2) && mouseX < (canvasWidth / 2) + (buttonWidth / 2) &&
          mouseY > y - 50 && mouseY < y - 50  + buttonHeight) {
        temaSelecionado = tema;
        perguntasSelecionadas = temas[tema];
        perguntaAtualIndex = 0;
        acertos = 0; // Reinicia o contador de acertos
        erros = 0;   // Reinicia o contador de erros
        pontuacao = 0; // Reinicia a pontuação
        perguntasErradas = []; // Limpa as perguntas erradas
        retangulosErro = []; // Limpa os retângulos de erro
        console.log(`Tema selecionado: ${tema}`); // Feedback de confirmação
        modo = 4; // Muda para a tela de quiz
        break;
      }
      y += 70;
    }
  } else if (modo === 4) { // Durante o quiz
    let y = 120;
    let alternativas = perguntasSelecionadas[perguntaAtualIndex].alternativas;
    for (let i = 0; i < alternativas.length; i++) {
      if (mouseX > canvasWidth / 2 - buttonWidth / 2 && mouseX < canvasWidth / 2 + buttonWidth / 2 &&
          mouseY > y && mouseY < y + buttonHeight) {
        verificarResposta(i);
        console.log(`Resposta selecionada: ${alternativas[i]}`); // Feedback de confirmação
        break;
      }
      y += 60;
    }
  } else if (modo === 5) { // Exibição das questões erradas
    for (let i = 0; i < retangulosErro.length; i++) {
      let rect = retangulosErro[i];
      if (mouseX > rect.x && mouseX < rect.x + rect.width &&
          mouseY > rect.y && mouseY < rect.y + rect.height) {
        modo = 6; // Muda para a tela de explicação
        perguntaAtualIndex = rect.index;
        break;
      }
    }
  } else if (modo === 6) { // Tela de explicação
    if (mouseX > 50 && mouseX < 50 + voltarButtonWidth &&
        mouseY > 350 && mouseY < 350 + voltarButtonHeight) {
      modo = 5; // Voltar para a tela de perguntas erradas
    }
  }  if (mouseX > 20 && mouseX < 20 + voltarButtonWidth &&
             mouseY > 350 && mouseY < 350 + voltarButtonHeight) {
    voltarUmaTela();
  }
   if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    musicPlaying = false;
    menuMusic.stop();
  }
}

function voltarUmaTela() {
  if (modo === 1 || modo === 2 || modo === 3) {
    modo = 0; // Voltar para o menu
  } else if (modo === 4) {
    modo = 3; // Voltar para a tela de seleção de tema
  } else if (modo === 5) {
    modo = 3; // Voltar para a tela de seleção de tema
  } else if (modo === 6) {
    modo = 5; // Voltar para a tela de perguntas erradas
  }
}

function iniciar() {
  modo = 3; // Muda para a tela de seleção de tema
}

function selecionarTema() {
  background(img);
  


  textSize(30);
  let titleText = 'Instruções';
  let titleWidth = textWidth(titleText);
  let titleHeight = textAscent() + textDescent();
  let titleX = (canvasWidth - titleWidth) / 2;
  let titleY = 20 - titleHeight / 2;

  image(titleBG, titleX - 20, titleY -  5, titleWidth + 40, titleHeight + 15);

  fill('black');
  textAlign(CENTER, CENTER);
  text(titleText, canvasWidth / 2, 20);


  textSize(20);
  let y = 120;
  for (let tema in temas) {
    fill(255);
    rectMode(CORNER);
    image(rectBG, (canvasWidth / 2) - (buttonWidth / 2), y - 50, buttonWidth, buttonHeight);
    fill(0);
    textAlign(CENTER, CENTER);
    text(tema, canvasWidth / 2, y - 50+ buttonHeight / 2);
    y += 70;
  }
}
function exibirQuiz() {
  if (perguntaAtualIndex < perguntasSelecionadas.length) {
    background(img);
    
    stopMusic(menuMusic);
    playMusic(quizMusic)
    
    textSize(15);
    let perguntaText = perguntasSelecionadas[perguntaAtualIndex].pergunta;
    let perguntaWidth = textWidth(perguntaText);
    let perguntaHeight = textAscent() + textDescent();
    let margem = 20; // Margem ao redor do texto

    let retanguloWidth = perguntaWidth + margem * 2;
    let retanguloHeight = perguntaHeight + margem * 2;
    let perguntaX = (canvasWidth - retanguloWidth) / 2;
    let perguntaY = 80 - retanguloHeight / 2;

    image(questionBG, perguntaX, perguntaY, retanguloWidth, retanguloHeight);

    fill('black'); // Cor do texto sobre a imagem de fundo
    textAlign(CENTER, CENTER);
    text(perguntaText, canvasWidth / 2, 80);

    // Desenha as alternativas com fundo de imagem
    let y = 120;
    for (let i = 0; i < perguntasSelecionadas[perguntaAtualIndex].alternativas.length; i++) {
      fill(255);
      rectMode(CORNER);
      image(rectBG, (canvasWidth / 2) - (buttonWidth / 2), y, buttonWidth, buttonHeight);
      fill(0);
      textAlign(CENTER, CENTER);
      text(perguntasSelecionadas[perguntaAtualIndex].alternativas[i], canvasWidth / 2, y + buttonHeight / 2);
      y += 60;
    }

    textSize(18);
    let pontuacaoText = `Pontuação: ${pontuacao}`;
    let pontuacaoWidth = textWidth(pontuacaoText);
    let pontuacaoHeight = textAscent() + textDescent();
    let pontuacaoMargem = 15; 

    let pontuacaoRectWidth = pontuacaoWidth + pontuacaoMargem * 2;
    let pontuacaoRectHeight = pontuacaoHeight + pontuacaoMargem * 2;
    let pontuacaoX = (canvasWidth - pontuacaoRectWidth) / 2;
    let pontuacaoY = 25 - pontuacaoRectHeight / 2;

    image(scoreBG, pontuacaoX, pontuacaoY, pontuacaoRectWidth, pontuacaoRectHeight);

    fill('black'); 
    textAlign(CENTER, CENTER);
    text(pontuacaoText, canvasWidth / 2, 25);
  } else {
    modo = 5; // Muda para a tela de resultado
    prepararRetangulosErro();
  }
}



function verificarResposta(indice) {
  if (indice >= 0 && indice < perguntasSelecionadas[perguntaAtualIndex].alternativas.length) {
    let respostaSelecionada = perguntasSelecionadas[perguntaAtualIndex].alternativas[indice];
    if (respostaSelecionada === perguntasSelecionadas[perguntaAtualIndex].correta) {
      acertos++;
      pontuacao += 500;
    } else {
      erros++;
      pontuacao -= 300;
      if (pontuacao < 0) {
        pontuacao = 0;
      }
      perguntasErradas.push(perguntasSelecionadas[perguntaAtualIndex]);
    }
  }

  perguntaAtualIndex++;
  if (perguntaAtualIndex < perguntasSelecionadas.length) {
    setTimeout(() => {
      exibirQuiz();
    }, 2000); // Aguarda 2 segundos antes de mostrar a próxima pergunta
  } else {
    modo = 5; // Muda para a tela de resultado
    prepararRetangulosErro();
  }
}
const COLUNAS = 3; // Número de colunas
const ESPACO_VERTICAL = 10; // Espaço vertical entre retângulos
const ESPACO_HORIZONTAL = 10; // Espaço horizontal entre retângulos

function prepararRetangulosErro() {
  retangulosErro = perguntasErradas.map((pergunta, index) => {
    let coluna = index % COLUNAS;
    let linha = Math.floor(index / COLUNAS);

    return {
      x: canvasWidth / 2 - (COLUNAS * (buttonWidth + ESPACO_HORIZONTAL) - ESPACO_HORIZONTAL) / 2 + coluna * (buttonWidth + ESPACO_HORIZONTAL),
      y: 120 + linha * (buttonHeight + ESPACO_VERTICAL),
      width: buttonWidth,
      height: buttonHeight,
      index: perguntasSelecionadas.indexOf(pergunta),
      enunciado: pergunta.pergunta // Adiciona o enunciado da pergunta
    };
  });
}

function exibirResultado() {
  background(img);
  stopMusic(quizMusic)
  playMusic(scoreMusic)
  textSize(17);
  fill(0);
  text(`Você acertou ${acertos} perguntas!`, canvasWidth / 2, 25);
  text(`Pontuação final: ${pontuacao}`, canvasWidth / 2, 50);
  

  
  if (erros > 0) {
    textSize(17);
    fill(0);
    text("Clique nas questões erradas abaixo para ver explicações:", canvasWidth / 2, 80);
    retangulosErro.forEach(rect => {
      fill(255);
      textSize(15);
      rectMode(CORNER);
      image(rectBG, rect.x + 20, rect.y - 10, rect.width - 40, rect.height);
      fill(0);
      textAlign(LEFT, TOP);
      textWrap(WORD);
      let textX = rect.x + 20;
      let textY = rect.y - 10;
      let textWidth = rect.width - 40;
      let textHeight = rect.height;
      text(rect.enunciado, textX, textY, textWidth, textHeight); // Exibe o enunciado da pergunta
    });
  }
}


function exibirExplicacao() {
  let pergunta = perguntasSelecionadas[perguntaAtualIndex];
  background(img);
  textSize(24);
  fill(0);
  text("Explicação", canvasWidth / 2, 50);
  textSize(20);
  textAlign(LEFT);
  text(pergunta.explicacao, 50, 100, canvasWidth - 100);
}
