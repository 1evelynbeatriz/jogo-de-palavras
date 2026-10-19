const STORAGE_KEY = 'palavra-viva-state-v1';
const THEME_KEY = 'palavra-viva-theme-v1';
const MODES = {
  easy: { label: 'Fácil', wordLength: 4, maxGuesses: 8, hints: 3, accent: '4 letras' },
  normal: { label: 'Normal', wordLength: 5, maxGuesses: 7, hints: 2, accent: '5 letras' },
  hard: { label: 'Difícil', wordLength: 6, maxGuesses: 6, hints: 1, accent: '6 letras' }
};

const WORDS = {
  easy: [
    'amor', 'casa', 'rato', 'bola', 'copo', 'lago', 'luz', 'pato', 'mala', 'nuvem',
    'fogo', 'mesa', 'sol', 'rio', 'vela', 'sino', 'frio', 'pipa', 'claro', 'piano',
    'sala', 'mago', 'livro', 'flor', 'gelo', 'sede', 'jogo', 'toque', 'fita', 'nito',
    'cans', 'faro', 'mapa', 'rede', 'pote', 'lata', 'bata', 'sopa', 'lado', 'ouro'
  ],
  normal: [
    'brisa', 'campo', 'vento', 'cesta', 'porta', 'canal', 'canto', 'tarde', 'safra', 'falar',
    'ritmo', 'amigo', 'tutor', 'festa', 'mundo', 'sabor', 'viver', 'gelar', 'ciclo', 'nobre',
    'tinta', 'tecla', 'chuva', 'letra', 'pluma', 'sombr', 'passe', 'morsa', 'caver', 'melod',
    'tempo', 'selva', 'mural', 'carru', 'ampla', 'junco', 'pilar', 'museu', 'nuvem', 'bolsa',
    'vazia', 'carga', 'valor', 'tigre', 'suave', 'ponto', 'sinal', 'muito', 'sombra', 'guria'
  ],
  hard: [
    'cavalo', 'espada', 'jardim', 'sereno', 'safiro', 'ventre', 'mister', 'futuro', 'quadro', 'caderno',
    'melodia', 'cultura', 'historia', 'brasil', 'sistema', 'retina', 'ferrug', 'telhado', 'jornada', 'marmore',
    'orbital', 'calmado', 'sintese', 'geopol', 'botanica', 'estrela', 'pirata', 'estacao', 'eduardo', 'circuit',
    'enigma', 'salvado', 'travess', 'amarelo', 'cantiga', 'pincel', 'acorde', 'alegria', 'coberta', 'cerimon',
    'estudo', 'narrar', 'vapor', 'nativo', 'escola', 'luzes', 'agencia', 'poesia', 'selo', 'vitoria'
  ]
};

const HINTS = {
  amor: 'A palavra pode ser usada em frases sobre carinho e cuidado.',
  casa: 'Tem a ver com abrigo ou lar.',
  rato: 'É um animal pequeno e muito curioso.',
  bola: 'Pode ser usada em esportes ou brincadeiras.',
  copo: 'É um objeto usado para beber.',
  lago: 'É uma extensão de água mais calma.',
  luz: 'Ajuda a iluminar o ambiente.',
  pato: 'É um animal de água que anda com facilidade.',
  mala: 'Serve para guardar objetos ao viajar.',
  nuvem: 'Fica no céu e pode trazer chuva.',
  fogo: 'Produz calor e claridade.',
  mesa: 'Você usa para comer ou estudar.',
  sol: 'Ela ilumina o dia e aquece a Terra.',
  rio: 'É água em movimento.',
  vela: 'Pode iluminar em um ambiente escuro.',
  sino: 'Quando toca, anuncia algo.',
  frio: 'É o oposto de calor.',
  pipa: 'É um brinquedo que voa com o vento.',
  claro: 'Diz respeito a algo que tem boa visibilidade.',
  piano: 'Instrumento com teclas e sons suaves.',
  sala: 'Espaço usado para receber pessoas.',
  mago: 'Pessoa que faz truques ou magia.',
  livro: 'Um objeto cheio de páginas e histórias.',
  flor: 'É uma planta que nasce e encanta.',
  gelo: 'Está ligado ao frio extremo.',
  sede: 'Desejo de beber ou vontade forte.',
  jogo: 'Pode ser recreativo ou estratégico.',
  toque: 'Ato de encostar com a mão.',
  fita: 'Pode ser um material para prender ou registrar.',
  cans: 'Forma de um verbo relacionado a fadiga.',
  faro: 'Sentido aguçado para perceber odores.',
  mapa: 'Representa lugares e caminhos.',
  rede: 'É usada para pescar ou pendurar roupas.',
  pote: 'Recipiente para cozinhar ou guardar.',
  lata: 'Recipiente metálico com diversas utilidades.',
  bata: 'Roupa usada em cozinhas ou laboratórios.',
  sopa: 'Comida em temperatura quente e líquida.',
  lado: 'Parte de um lado em relação ao outro.',
  ouro: 'Metal precioso e valioso.',
  brisa: 'Vento suave que mexe as folhas.',
  campo: 'Área aberta e grande, com plantas ou esporte.',
  vento: 'Ar em movimento, forte ou suave.',
  cesta: 'Recipiente para carregar frutas ou objetos.',
  porta: 'Entrada de casas e ambientes.',
  canal: 'Curso de água ou caminho de passagem.',
  canto: 'Ponto de um espaço ou música.',
  tarde: 'Período do dia depois do meio dia.',
  safra: 'Época da colheita ou produção.',
  falar: 'Ato de expressar ideias com palavras.',
  ritmo: 'Padrão de movimento ou música.',
  amigo: 'Pessoa próxima e confiável.',
  tutor: 'Pessoa que orienta ou ensina.',
  festa: 'Momento alegre de convivência.',
  mundo: 'Todo o conjunto de pessoas e lugares.',
  sabor: 'Sensação que a comida provoca.',
  viver: 'Ato de existir e experimentar a vida.',
  gelar: 'Tornar algo muito frio.',
  ciclo: 'Sequência que se repete.',
  nobre: 'Que tem honra ou dignidade.',
  tinta: 'Substância usada para escrever ou pintar.',
  tecla: 'Botão de um teclado.',
  chuva: 'Água que cai do céu.',
  letra: 'Símbolo que forma as palavras.',
  pluma: 'Pena leve de ave.',
  sombra: 'Área escura formada quando a luz é bloqueada.',
  passe: 'Ato de passar algo ou autorização.',
  morsa: 'Animal marinho grande e robusto.',
  caver: 'A palavra pode soar como algo do passado.',
  melod: 'Termo próximo a música e sons suaves.',
  tempo: 'Duração e medida do dia e da vida.',
  selva: 'Floresta densa e tropical.',
  mural: 'Pintura grande na parede.',
  carru: 'Parecido com uma estrutura de transporte.',
  ampla: 'Grande em extensão.',
  junco: 'Planta que cresce em pântanos.',
  pilar: 'Suporte vertical, como de um prédio.',
  museu: 'Lugar para conhecer arte e história.',
  nuvem: 'Elemento do céu.',
  bolsa: 'Acessório usado para carregar coisas.',
  vazia: 'Sem conteúdo ou sem gente.',
  carga: 'Peso ou quantidade transportada.',
  valor: 'Qualidade ou importância.',
  tigre: 'Grande felino listrado.',
  suave: 'Leve, macio, delicado.',
  ponto: 'Marca ou localização importante.',
  sinal: 'Indicador visível ou sonoro.',
  muito: 'Quantidade grande',
  sombra: 'Área escura formada pela luz.',
  giria: 'Linguagem informal e popular.',
  cavalo: 'Animal usado para passear e trabalhar.',
  espada: 'Arma antiga de lâmina afiada.',
  jardim: 'Lugar com plantas e flores.',
  sereno: 'Calmo e tranquilo.',
  safiro: 'Pedra preciosa azul.',
  ventre: 'Parte do corpo abdominal.',
  mister: 'Forma abreviada de mistério.',
  futuro: 'Tempo que ainda vai acontecer.',
  quadro: 'Peça decorativa ou painel.',
  caderno: 'Material para escrever e anotar.',
  melodia: 'Sequência de notas musicais.',
  cultura: 'Conjunto de costumes e saberes.',
  historia: 'Registro dos acontecimentos do passado.',
  brasil: 'País do território brasileiro.',
  sistema: 'Conjunto organizado de partes.',
  retina: 'Parte do olho que capta luz.',
  ferrug: 'Termo quase como ferrugem.',
  telhado: 'Cobertura do topo de uma casa.',
  jornada: 'Percurso de tempo ou trabalho.',
  marmore: 'Pedra bonita e polida.',
  orbital: 'Relacionado à órbita.',
  calmado: 'Tranquilo e sereno.',
  sintese: 'Resumo ou composição de ideias.',
  geopol: 'Relativo ao estudo do espaço geográfico.',
  botanica: 'Ciência que estuda as plantas.',
  estrela: 'Corpo celeste luminoso.',
  pirata: 'Personagem que navegava e saqueava.',
  estacao: 'Período do ano ou local de trem.',
  eduardo: 'Nome próprio de pessoa.',
  circuit: 'Caminho fechado de energia.',
  enigma: 'Mistério difícil de entender.',
  salvado: 'Que foi resgatado ou salvo.',
  travess: 'Relacionado a cruzar algo.',
  amarelo: 'Cor clara e luminosa.',
  cantiga: 'Música popular e melodiosa.',
  pincel: 'Ferramenta para desenhar ou pintar.',
  acorde: 'Conjunto de notas musicais.',
  alegria: 'Sensação de felicidade.',
  coberta: 'Material que aquece ou cobre.',
  cerimon: 'Muito parecido com cerimônia.',
  estudo: 'Atividade de aprender e refletir.',
  narrar: 'Contar uma história.',
  vapor: 'Gás ou fumaça visível.',
  nativo: 'Que nasceu em um lugar.',
  escola: 'Lugar de aprendizagem.',
  luzes: 'Fonte de iluminação.',
  agencia: 'Instituição ou empresa.',
  poesia: 'Texto com ritmo, beleza e emoção.',
  selo: 'Marca ou emblema oficial.',
  vitoria: 'Resultado de sucesso ou triunfo.'
};

const appState = loadState();
const keyboardLayout = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const todayKey = getBrazilDateKey(new Date());

  if (!saved) {
    return {
      dateKey: todayKey,
      mode: 'normal',
      selectedChallenge: 0,
      selectedBoard: 0,
      challenges: buildChallenges(todayKey, 'normal'),
      stats: { started: 0, completed: 0, streak: 0 },
      theme: 'light'
    };
  }

  try {
    const parsed = JSON.parse(saved);
    if (parsed.dateKey !== todayKey) {
      return {
        dateKey: todayKey,
        mode: parsed.mode || 'normal',
        selectedChallenge: 0,
        selectedBoard: 0,
        challenges: buildChallenges(todayKey, parsed.mode || 'normal'),
        stats: parsed.stats || { started: 0, completed: 0, streak: 0 },
        theme: parsed.theme || 'light'
      };
    }

    return parsed;
  } catch (error) {
    return {
      dateKey: todayKey,
      mode: 'normal',
      selectedChallenge: 0,
      selectedBoard: 0,
      challenges: buildChallenges(todayKey, 'normal'),
      stats: { started: 0, completed: 0, streak: 0 },
      theme: 'light'
    };
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function getBrazilDateKey(date) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;
  return `${year}-${month}-${day}`;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function buildChallenges(dateKey, mode) {
  const pool = [...WORDS[mode]];
  const seed = hashString(`${dateKey}-${mode}`);
  let seedValue = seed + 17;

  const random = () => {
    seedValue = (seedValue * 1664525 + 1013904223) >>> 0;
    return seedValue / 4294967296;
  };

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const j = Math.floor(random() * (index + 1));
    [pool[index], pool[j]] = [pool[j], pool[index]];
  }

  const challengeSet = [];
  for (let challengeIndex = 0; challengeIndex < 10; challengeIndex += 1) {
    const boards = [];
    for (let boardIndex = 0; boardIndex < 6; boardIndex += 1) {
      const target = pool[challengeIndex * 6 + boardIndex % pool.length] || pool[(challengeIndex + boardIndex) % pool.length];
      boards.push({
        id: boardIndex,
        targetWord: target,
        guesses: [],
        status: 'playing',
        hintUsed: 0,
        hintText: getHintForWord(target),
        boardLabel: `Palavra ${boardIndex + 1}`
      });
    }
    challengeSet.push({ id: challengeIndex + 1, boards });
  }

  return challengeSet;
}

function getHintForWord(targetWord) {
  const lower = String(targetWord || '').trim().toLowerCase();
  if (!lower) return 'A palavra está relacionada a um tema cotidiano e acessível.';

  const first = lower[0];
  const last = lower[lower.length - 1];
  const vowels = (lower.match(/[aeiou]/g) || []).length;

  if (lower.length <= 4) {
    return `A palavra começa com ${first.toUpperCase()} e tem ${vowels} vogais.`;
  }

  return `A palavra termina com ${last.toUpperCase()} e tem ${vowels} vogais na sua formação.`;
}

function getModeInfo() {
  return MODES[appState.mode];
}

function getCurrentChallenge() {
  return appState.challenges[appState.selectedChallenge];
}

function getCurrentBoard() {
  const challenge = getCurrentChallenge();
  return challenge?.boards[appState.selectedBoard];
}

function setTheme(theme) {
  appState.theme = theme;
  document.body.dataset.theme = theme;
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.textContent = theme === 'dark' ? 'Tema escuro' : 'Tema claro';
  }
  persistState();
}

function applyThemeFromState() {
  const theme = appState.theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = theme;
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.textContent = theme === 'dark' ? 'Tema escuro' : 'Tema claro';
  }
}

function renderChallengeList() {
  const challengeList = document.getElementById('challenge-list');
  if (!challengeList) return;

  challengeList.innerHTML = '';

  appState.challenges.forEach((challenge, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'challenge-tile';
    if (index === appState.selectedChallenge) button.classList.add('active');
    const isDone = challenge.boards.every((board) => board.status !== 'playing');
    if (isDone) button.classList.add('done');
    button.textContent = String(index + 1);
    button.setAttribute('aria-label', `Desafio ${index + 1}`);
    button.addEventListener('click', () => {
      appState.selectedChallenge = index;
      appState.selectedBoard = 0;
      persistState();
      render();
    });
    challengeList.appendChild(button);
  });
}

function renderModes() {
  const modeList = document.getElementById('mode-list');
  if (!modeList) return;

  modeList.innerHTML = '';

  Object.entries(MODES).forEach(([modeKey, mode]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mode-button' + (appState.mode === modeKey ? ' active' : '');
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(appState.mode === modeKey));
    button.innerHTML = `<span>${mode.label}</span><span class="meta">${mode.accent}</span>`;
    button.addEventListener('click', () => {
      appState.mode = modeKey;
      appState.selectedChallenge = 0;
      appState.selectedBoard = 0;
      appState.challenges = buildChallenges(appState.dateKey, appState.mode);
      persistState();
      render();
    });
    modeList.appendChild(button);
  });
}

function renderBoardPicker() {
  const boardPicker = document.getElementById('board-picker');
  if (!boardPicker) return;

  const challenge = getCurrentChallenge();
  if (!challenge) return;

  boardPicker.innerHTML = '';

  challenge.boards.forEach((board, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'board-select';
    if (index === appState.selectedBoard) card.classList.add('active');
    if (board.status === 'won') card.classList.add('won');
    if (board.status === 'lost') card.classList.add('lost');

    const previewLetters = Array.from({ length: getModeInfo().wordLength }, (_, letterIndex) => {
      const guess = board.guesses.at(-1)?.guess || '';
      const result = board.guesses.at(-1)?.result?.[letterIndex] || 'empty';
      const value = guess[letterIndex] || '';
      return `<span class="mini-cell ${result === 'correct' ? 'correct' : result === 'present' ? 'present' : result === 'absent' ? 'absent' : ''}" aria-hidden="true">${value ? value.toUpperCase() : ''}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="board-label">
        <span>Palavra ${index + 1}</span>
        <span>${board.status === 'playing' ? board.guesses.length + '/' + getModeInfo().maxGuesses : board.status}</span>
      </div>
      <div class="mini-grid" style="--length:${getModeInfo().wordLength}">${previewLetters}</div>
    `;

    card.addEventListener('click', () => {
      appState.selectedBoard = index;
      persistState();
      render();
    });

    boardPicker.appendChild(card);
  });
}

function buildGuessRows(board) {
  const rows = [];
  for (let rowIndex = 0; rowIndex < getModeInfo().maxGuesses; rowIndex += 1) {
    const guessEntry = board.guesses[rowIndex];
    const cells = [];

    for (let column = 0; column < getModeInfo().wordLength; column += 1) {
      const char = guessEntry?.guess[column] || '';
      const state = guessEntry?.result[column] || '';
      const classes = ['guess-cell'];
      if (char) classes.push('filled');
      if (state === 'correct') classes.push('correct');
      if (state === 'present') classes.push('present');
      if (state === 'absent') classes.push('absent');
      cells.push(`<div class="${classes.join(' ')}">${char ? char.toUpperCase() : ''}</div>`);
    }

    rows.push(`<div class="guess-row" style="--length:${getModeInfo().wordLength}">${cells.join('')}</div>`);
  }

  return rows.join('');
}

function renderGuessGrid() {
  const guessGrid = document.getElementById('guess-grid');
  if (!guessGrid) return;

  const board = getCurrentBoard();
  if (!board) return;

  guessGrid.innerHTML = buildGuessRows(board);
}

function renderKeyboard() {
  const keyboard = document.getElementById('keyboard');
  if (!keyboard) return;

  const board = getCurrentBoard();
  const keyState = {};

  const allUsedLetters = new Map();

  appState.challenges.forEach((challenge) => {
    challenge.boards.forEach((item) => {
      item.guesses.forEach((guessEntry) => {
        guessEntry.result.forEach((result, index) => {
          const label = guessEntry.guess[index].toLowerCase();
          if (!label) return;
          const current = allUsedLetters.get(label);
          if (!current || priority(result) > priority(current)) {
            allUsedLetters.set(label, result);
          }
        });
      });
    });
  });

  keyboard.innerHTML = keyboardLayout.map((row) => {
    const rowButtons = row.split('').map((key) => {
      const state = allUsedLetters.get(key) || '';
      const classes = ['key'];
      if (state === 'correct') classes.push('correct');
      else if (state === 'present') classes.push('present');
      else if (state === 'absent') classes.push('absent');
      return `<button type="button" class="${classes.join(' ')}" data-key="${key}" aria-label="Letra ${key}">${key.toUpperCase()}</button>`;
    }).join('');

    return `<div class="keyboard-row">${rowButtons}</div>`;
  }).join('');

  keyboard.querySelectorAll('.key').forEach((button) => {
    button.addEventListener('click', () => {
      const input = document.getElementById('guess-input');
      if (!input || input.disabled) return;
      const value = button.dataset.key || '';
      input.value = `${input.value}${value}`.slice(0, getModeInfo().wordLength);
      input.focus();
    });
  });
}

function priority(value) {
  return value === 'correct' ? 3 : value === 'present' ? 2 : value === 'absent' ? 1 : 0;
}

function updateStatus(message, type = '') {
  const status = document.getElementById('status-message');
  if (!status) return;
  status.textContent = message;
  status.className = 'status-message';
  if (type) status.classList.add(type);
}

function evaluateGuess(guess, targetWord) {
  const result = new Array(guess.length).fill('absent');
  const remaining = {};

  for (let index = 0; index < targetWord.length; index += 1) {
    const letter = targetWord[index];
    remaining[letter] = (remaining[letter] || 0) + 1;
  }

  for (let index = 0; index < guess.length; index += 1) {
    if (guess[index] === targetWord[index]) {
      result[index] = 'correct';
      remaining[guess[index]] -= 1;
    }
  }

  for (let index = 0; index < guess.length; index += 1) {
    if (result[index] !== 'correct' && remaining[guess[index]]) {
      result[index] = 'present';
      remaining[guess[index]] -= 1;
    }
  }

  return result;
}

function getBoardSummary(board) {
  const solved = board.status === 'won';
  const message = solved
    ? `Você acertou a palavra ${board.targetWord.toUpperCase()}!`
    : `A palavra era ${board.targetWord.toUpperCase()}.`;
  return message;
}

function isChallengeCompleted() {
  return appState.challenges.every((challenge) => challenge.boards.every((board) => board.status !== 'playing'));
}

function markChallengeProgress() {
  const completed = appState.challenges.filter((challenge) => challenge.boards.every((board) => board.status !== 'playing')).length;
  appState.stats.completed = Math.max(appState.stats.completed, completed);
  persistState();
}

function submitGuess(event) {
  event.preventDefault();
  const input = document.getElementById('guess-input');
  const board = getCurrentBoard();

  if (!board || board.status !== 'playing') {
    updateStatus('Este tabuleiro já foi encerrado.', 'error');
    return;
  }

  const rawGuess = (input.value || '').trim().toLowerCase();
  const mode = getModeInfo();
  const allowedWords = WORDS[appState.mode];

  if (!rawGuess || rawGuess.length !== mode.wordLength) {
    updateStatus(`Digite exatamente ${mode.wordLength} letras.`, 'error');
    return;
  }

  if (!allowedWords.includes(rawGuess)) {
    updateStatus('Palavra fora da lista aceita. Tente outra.', 'error');
    return;
  }

  if (board.guesses.some((entry) => entry.guess === rawGuess)) {
    updateStatus('Você já tentou essa palavra neste tabuleiro.', 'error');
    return;
  }

  const evaluation = evaluateGuess(rawGuess, board.targetWord);
  board.guesses.push({ guess: rawGuess, result: evaluation });

  if (rawGuess === board.targetWord) {
    board.status = 'won';
    updateStatus('Acertou! Palavra concluída.', 'success');
  } else if (board.guesses.length >= mode.maxGuesses) {
    board.status = 'lost';
    updateStatus(`Sem tentativas restantes. ${getBoardSummary(board)}`, 'error');
  } else {
    updateStatus('Palpite enviado. Continue.', 'success');
  }

  if (isChallengeCompleted()) {
    const challengeFinished = document.getElementById('challenge-status');
    if (challengeFinished) challengeFinished.textContent = 'Desafio concluído';
    const summary = document.getElementById('result-strip');
    if (summary) {
      const words = appState.challenges[appState.selectedChallenge].boards
        .map((item) => `${item.targetWord.toUpperCase()} • ${item.status === 'won' ? 'acertou' : 'não acertou'}`)
        .join('<br>');
      summary.innerHTML = `<div><strong>Resumo do desafio</strong><p>${words}</p></div><p>Todas as palavras do dia foram encerradas.</p>`;
      summary.classList.add('visible');
    }
  } else {
    const strip = document.getElementById('result-strip');
    if (strip) {
      strip.classList.remove('visible');
    }
  }

  input.value = '';
  input.focus();
  persistState();
  render();
}

function useHint() {
  const board = getCurrentBoard();
  if (!board || board.status !== 'playing') {
    updateStatus('Este tabuleiro não aceita mais dicas.', 'error');
    return;
  }

  const mode = getModeInfo();
  if (board.hintUsed >= mode.hints) {
    updateStatus('Você já usou todas as dicas disponíveis para esta palavra.', 'error');
    return;
  }

  board.hintUsed += 1;
  const strip = document.getElementById('result-strip');
  if (strip) {
    strip.classList.add('visible');
    strip.innerHTML = `
      <div>
        <strong>Dica</strong>
        <p>${board.hintText}</p>
      </div>
      <p>Você usou ${board.hintUsed}/${mode.hints} dicas.</p>
    `;
  }

  updateStatus('Dica revelada para este tabuleiro.', 'success');
  persistState();
  render();
}

function resetProgress() {
  const confirmed = window.confirm('Limpar todo o progresso do navegador?');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  appState.dateKey = getBrazilDateKey(new Date());
  appState.mode = 'normal';
  appState.selectedChallenge = 0;
  appState.selectedBoard = 0;
  appState.challenges = buildChallenges(appState.dateKey, appState.mode);
  appState.stats = { started: 0, completed: 0, streak: 0 };
  persistState();
  render();
}

function renderHeaderMetrics() {
  const challengeTitle = document.getElementById('challenge-title');
  const challengeStatus = document.getElementById('challenge-status');
  const challenge = getCurrentChallenge();

  if (challengeTitle) challengeTitle.textContent = `Desafio ${challenge.id}`;
  if (challengeStatus) {
    const completeCount = challenge.boards.filter((board) => board.status !== 'playing').length;
    challengeStatus.textContent = completeCount === 6 ? 'Concluído' : `${completeCount}/6 palavras`;
  }

  const board = getCurrentBoard();
  const boardTitle = document.getElementById('board-title');
  if (boardTitle) boardTitle.textContent = `Palavra ${appState.selectedBoard + 1}`;

  const hintButton = document.getElementById('hint-button');
  if (hintButton) {
    const remainingHints = Math.max(0, getModeInfo().hints - (board?.hintUsed || 0));
    hintButton.disabled = !board || board.status !== 'playing' || remainingHints <= 0;
    hintButton.textContent = remainingHints > 0 ? `Dica (${remainingHints})` : 'Sem dica';
  }

  const dateLabel = document.getElementById('date-label');
  if (dateLabel) {
    const formatted = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: 'short'
    }).format(new Date());
    dateLabel.textContent = formatted;
  }
}

function render() {
  renderChallengeList();
  renderModes();
  renderBoardPicker();
  renderGuessGrid();
  renderKeyboard();
  renderHeaderMetrics();
  applyThemeFromState();
  const board = getCurrentBoard();
  if (board && board.status === 'playing' && !document.getElementById('guess-input').value) {
    updateStatus(`Você tem ${getModeInfo().maxGuesses - board.guesses.length} tentativas restantes.`, '');
  }

  document.getElementById('guess-input').disabled = !(board && board.status === 'playing');
  const selectedBoard = getCurrentBoard();
  if (selectedBoard && selectedBoard.status !== 'playing') {
    updateStatus(getBoardSummary(selectedBoard), 'error');
  }
}

function initializeApp() {
  const form = document.getElementById('guess-form');
  const input = document.getElementById('guess-input');
  const themeToggle = document.getElementById('theme-toggle');
  const resetButton = document.getElementById('reset-progress');
  const hintButton = document.getElementById('hint-button');

  form.addEventListener('submit', submitGuess);
  hintButton.addEventListener('click', useHint);
  themeToggle.addEventListener('click', () => setTheme(appState.theme === 'dark' ? 'light' : 'dark'));
  resetButton.addEventListener('click', resetProgress);
  input.addEventListener('input', (event) => {
    const nextValue = (event.target.value || '').replace(/[^a-zA-Z]/g, '').slice(0, getModeInfo().wordLength).toLowerCase();
    event.target.value = nextValue;
  });

  document.addEventListener('keydown', (event) => {
    const input = document.getElementById('guess-input');
    if (document.activeElement !== input) return;
    if (event.key === 'Enter') {
      form.requestSubmit();
    }
  });

  render();
}

window.addEventListener('DOMContentLoaded', initializeApp);
