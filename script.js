const READ_TIME_SECONDS = 180; // 3 minuts = 180 segons. Pots canviar-ho a 5 per fer proves.

const epochs = [
    {
        id: 'mitjana',
        name: 'Edat Mitjana',
        pdf: 'COMIC_MITJANA.pdf',
        completed: false,
        questions: [
            { text: "Quin d'aquests elements és característic de la música a l'Edat Mitjana?", type: "choice", options: ["Cant Gregorià", "Música electrònica", "Òpera", "Simfonia"], correct: 0 },
            { text: "El cant gregorià és principalment de textura polifònica.", type: "tf", correct: false },
            { text: "Qui interpretava principalment la música religiosa en aquesta època?", type: "choice", options: ["Pagesos", "Monjos i clergat", "Reis", "Trobadors"], correct: 1 },
            { text: "Els joglars i trobadors eren els encarregats de la música profana.", type: "tf", correct: true },
            { text: "Quin d'aquests instruments era comú a l'Edat Mitjana?", type: "choice", options: ["Pianos", "Bateria", "Llaüt", "Guitarra elèctrica"], correct: 2 },
            { text: "La música vocal dominava per sobre de la instrumental a l'església medieval.", type: "tf", correct: true },
            { text: "Com s'anomenen les primeres formes de polifonia musical a l'Edat Mitjana?", type: "choice", options: ["Sardana", "Òrganum", "Concert", "Fuga"], correct: 1 },
            { text: "Els 'cantigas' són una forma important de música religiosa vocal sense instruments.", type: "tf", correct: false },
            { text: "Quin era l'idioma utilitzat per al Cant Gregorià?", type: "choice", options: ["Anglès", "Italià", "Llatí", "Castellà"], correct: 2 },
            { text: "Guido d'Arezzo va ser fonamental en la creació del sistema de notació musical actual.", type: "tf", correct: true }
        ]
    },
    {
        id: 'renaixement',
        name: 'Renaixement',
        pdf: 'COMIC_RENAIXEMENT.pdf',
        completed: false,
        questions: [
            { text: "Quina textura musical assoleix el seu màxim esplendor durant el Renaixement?", type: "choice", options: ["Cant pla", "Monodia vocal", "Polifonia", "Dodecafonisme"], correct: 2 },
            { text: "Durant el Renaixement l'església perd el monopoli absolut de la cultura.", type: "tf", correct: true },
            { text: "Quina és una de les formes musicals vocals més importants d'aquesta època?", type: "choice", options: ["La Simfonia", "El Concert", "La Sonata", "El Madrigal"], correct: 3 },
            { text: "La impremta musical es va inventar durant el Renaixement, ajudant a difondre la música.", type: "tf", correct: true },
            { text: "Quin d'aquests compositors pertany al Renaixement?", type: "choice", options: ["Bach", "Mozart", "Beethoven", "Palestrina"], correct: 3 },
            { text: "La música coral sense acompanyament instrumental s'anomena 'a cappella'.", type: "tf", correct: true },
            { text: "Quin instrument de tecla era comú a les llars burgeses renaixentistes?", type: "choice", options: ["Acordió", "Espinet o Clavicèmbal", "Piano de cua", "Sintetitzador"], correct: 1 },
            { text: "Al Renaixement tota la música va seguir sent exclusivament religiosa.", type: "tf", correct: false },
            { text: "El nom 'Renaixement' fa al·lusió al re-neixement de l'interès per la cultura clàssica de Grècia i Roma.", type: "tf", correct: true },
            { text: "Quina forma de música religiosa protestant neix durant el Renaixement a Alemanya?", type: "choice", options: ["Missa", "Coral", "Cant Gregorià", "Òpera"], correct: 1 }
        ]
    },
    {
        id: 'barroc',
        name: 'Barroc',
        pdf: 'COMIC_BARROC.pdf',
        completed: false,
        questions: [
            { text: "Qui és un dels compositors més representatius del Barroc?", type: "choice", options: ["J.S. Bach", "W.A. Mozart", "Igor Stravinsky", "The Beatles"], correct: 0 },
            { text: "En el Barroc neix l'Òpera.", type: "tf", correct: true },
            { text: "Quin instrument agafa molt de protagonisme com a solista durant el Barroc?", type: "choice", options: ["El saxofon", "El piano de cua", "El violí", "El sintetitzador"], correct: 2 },
            { text: "La música barroca es caracteritza per ser molt senzilla i sense ornaments.", type: "tf", correct: false },
            { text: "Quina paraula defineix millor l'art del Barroc?", type: "choice", options: ["Simetria perfecta", "Contrast i dramatisme", "Minimalisme", "Silenci"], correct: 1 },
            { text: "Claudio Monteverdi va compondre 'L'Orfeo', una de les primeres òperes importants.", type: "tf", correct: true },
            { text: "Quina forma instrumental barroca enfronta un solista contra tota l'orquestra?", type: "choice", options: ["Concert", "Fuga", "Suite", "Sonata"], correct: 0 },
            { text: "El recitatiu és una part de l'òpera on l'acció s'atura per cantar belles melodies emotives.", type: "tf", correct: false },
            { text: "Quin terme s'utilitza habitualment per acompanyar de forma contínua amb clau i baix a la música barroca?", type: "choice", options: ["Baix Continu", "Cant Gregorià", "Polifonia", "Contrapunt lliure"], correct: 0 },
            { text: "Vivaldi és famós pels seus concerts agrupats en l'obra 'Les Quatre Estacions'.", type: "tf", correct: true }
        ]
    },
    {
        id: 'classicisme',
        name: 'Classicisme',
        pdf: 'COMIC_CLASSICISME.pdf',
        completed: false,
        questions: [
            { text: "Quin d'aquests compositors és el màxim representant del Classicisme juntament amb Haydn i Beethoven?", type: "choice", options: ["J.S. Bach", "Chopin", "Vivaldi", "W.A. Mozart"], correct: 3 },
            { text: "El Classicisme busca la proporció, la claredat i l'equilibri en la música.", type: "tf", correct: true },
            { text: "Quin instrument es popularitza i substitueix el clavicèmbal durant el Classicisme?", type: "choice", options: ["El Piano", "L'Orgue", "La Guitarra Clàssica", "L'Arpa"], correct: 0 },
            { text: "La Simfonia es consolida com a gran forma orquestral en el Classicisme.", type: "tf", correct: true },
            { text: "Quina era la capital musical d'Europa durant l'època clàssica?", type: "choice", options: ["París", "Viena", "Londres", "Roma"], correct: 1 },
            { text: "En el Classicisme el 'Baix Continu' del barroc va desaparèixer definitivament.", type: "tf", correct: true },
            { text: "Quina de les següents és una forma de música de cambra clàssica important?", type: "choice", options: ["100 Pianos", "Quartet de Corda", "Cor de Monjos", "Gran Orquestra Simfònica"], correct: 1 },
            { text: "Beethoven és un compositor exclusivament del Barroc.", type: "tf", correct: false },
            { text: "Com s'estructura típicament el 1r moviment de les obres instrumentals clàssiques (com simfonies o sonates)?", type: "choice", options: ["Rondó", "Minuet", "Forma Sonata (Exposició, Desenvolupament, Reexposició)", "Tema i variacions"], correct: 2 },
            { text: "La dinàmica a la música clàssica sovint presenta contrastos forts molt dramàtics en comparació al Barroc.", type: "tf", correct: true }
        ]
    },
    {
        id: 'romanticisme',
        name: 'Romanticisme',
        pdf: 'COMIC_ROMANTICISME.pdf',
        completed: false,
        questions: [
            { text: "Quin és l'objectiu principal de la música romàntica?", type: "choice", options: ["Seguir regles matemàtiques", "Fer ballar a la noblesa", "Expressar els sentiments i l'emoció", "Resar a Déu"], correct: 2 },
            { text: "El músic romàntic es converteix en un geni lliure i independent.", type: "tf", correct: true },
            { text: "Quin instrument és el rei absolut dels salons romàntics?", type: "choice", options: ["El Piano", "El Violoncel", "L'Oboè", "La Flauta Travessera"], correct: 0 },
            { text: "Durant el Romanticisme es busca la contenció i evitar els grans contrastos de volum.", type: "tf", correct: false },
            { text: "Quin compositor destacat va ser una gènesi del Romanticisme tot i començar al Classicisme?", type: "choice", options: ["Bach", "Händel", "Beethoven", "Vivaldi"], correct: 2 },
            { text: "Quina nova forma vocal-instrumental de petita durada assoleix la seva màxima expressió a Alemanya (Lied)?", type: "choice", options: ["Simfonia Fantàstica", "Cançó per a veu i piano (Lied)", "Òpera Còmica", "Concert Groso"], correct: 1 },
            { text: "Wagner va revolucionar l'Òpera intentant convertir-la en l'Art Total (Gesamtkunstwerk).", type: "tf", correct: true },
            { text: "Frederic Chopin només componia obres grans per a orquestra simfònica completa.", type: "tf", correct: false },
            { text: "Com s'anomena la reacció final del romanticisme on els autors busquen inspiració en el folklore del seu propi país?", type: "choice", options: ["Impressionisme", "Nacionalisme", "Dodecafonisme", "Verisme"], correct: 1 },
            { text: "Els grans intèrprets al Romanticisme, com Paganini al violí o Liszt al piano, actuaven com autèntiques 'Estrelles de Rock'.", type: "tf", correct: true }
        ]
    },
    {
        id: 'seglexx',
        name: 'Segle XX',
        pdf: 'COMIC_SEGLEXX.pdf',
        completed: false,
        questions: [
            { text: "Com es coneix l'estil que va trencar amb les normes clàssiques de la tonalitat a principis del segle XX?", type: "choice", options: ["Impressionisme", "Atonalisme", "Barroc tardà", "Cant Gregorià"], correct: 1 },
            { text: "L'enregistrament del so i la ràdio no van influir en la música del Segle XX.", type: "tf", correct: false },
            { text: "Quin nou gènere musical neix als Estats Units al Segle XX amb arrels afroamericanes?", type: "choice", options: ["L'Òpera", "El Vals", "El Jazz", "El Madrigal"], correct: 2 },
            { text: "Quin d'aquests avenços tecnològics va permetre crear nous sons musicals?", type: "choice", options: ["Sintetitzadors i música electrònica", "El violí Stradivarius", "El piano de cua", "L'arc per tocar corda"], correct: 0 },
            { text: "La música al segle XX es va diversificar en multitud d'estils i gèneres diferents.", type: "tf", correct: true },
            { text: "Arnold Schönberg va idear la tècnica compositiva anomenada Dodecafonisme.", type: "tf", correct: true },
            { text: "El grup 'The Beatles' és representant de la música popular del Classicisme.", type: "tf", correct: false },
            { text: "Què tenen en comú Claude Debussy i Maurice Ravel?", type: "choice", options: ["Crear l'Òpera", "Ser compositors de l'Impressionisme musical", "No haver escrit cap obra", "Ser inventors de la ràdio"], correct: 1 },
            { text: "Què permetia el Gramòfon i els discos de vinil a gran escala?", type: "choice", options: ["Escriure partitures ràpid", "La difusió i el consum de música a la llar de manera individual", "Afinar instruments", "Resa més alt"], correct: 1 },
            { text: "Al segle XX el Rock and Roll va substituir gairebé totalment el consum popular de música simfònica tradicional en grans audiències juvenils.", type: "tf", correct: true }
        ]
    }
];

let currentEpoch = null;
let currentQuizQuestions = [];
let timerInterval = null;
let timeRemaining = 0;
let userAnswers = [];

// DOM Elements
const views = {
    menu: document.getElementById('menu-view'),
    reader: document.getElementById('reader-view'),
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view')
};

const epochGrid = document.getElementById('epoch-grid');
const readerTitle = document.getElementById('reader-title');
const pdfFrame = document.getElementById('pdf-frame');
const timerDisplay = document.getElementById('timer-display');
const btnToQuiz = document.getElementById('btn-to-quiz');
const quizTooltip = document.getElementById('quiz-tooltip');
const btnBackMenu = document.getElementById('btn-back-menu');

const quizTitle = document.getElementById('quiz-title');
const questionsContainer = document.getElementById('questions-container');
const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
const quizError = document.getElementById('quiz-error');

const scoreDisplay = document.getElementById('score-display');
const feedbackMsg = document.getElementById('feedback-msg');
const btnReturnMenu = document.getElementById('btn-return-menu');

// Inicialització
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
}

function renderMenu() {
    epochGrid.innerHTML = '';
    epochs.forEach(epoch => {
        const card = document.createElement('div');
        card.className = `epoch-card ${epoch.completed ? 'completed' : ''}`;

        const title = document.createElement('h3');
        title.textContent = epoch.name;
        card.appendChild(title);

        if (epoch.completed) {
            const status = document.createElement('p');
            status.className = 'status';
            status.textContent = '✓ Superat';
            card.appendChild(status);
        }

        card.addEventListener('click', () => openReader(epoch));
        epochGrid.appendChild(card);
    });
}

function openReader(epoch) {
    currentEpoch = epoch;
    readerTitle.textContent = epoch.name;

    pdfFrame.src = epoch.pdf + "#toolbar=0&navpanes=0"; // Amagar eines si és possible

    // Reset timer and button
    btnToQuiz.disabled = true;
    btnToQuiz.classList.add('disabled');
    quizTooltip.style.display = 'block';

    startTimer();
    showView('reader');
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timeRemaining = READ_TIME_SECONDS;
    timerDisplay.textContent = formatTime(timeRemaining);
    timerDisplay.style.color = 'var(--primary-color)';

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = formatTime(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '00:00';
            timerDisplay.style.color = 'var(--success-color)';

            btnToQuiz.disabled = false;
            btnToQuiz.classList.remove('disabled');
            quizTooltip.style.display = 'none'; // Amagar tooltip
        }
    }, 1000);
}

btnBackMenu.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    pdfFrame.src = "";
    showView('menu');
});

btnToQuiz.addEventListener('click', () => {
    if (!btnToQuiz.disabled) {
        if (timerInterval) clearInterval(timerInterval);
        pdfFrame.src = "";
        openQuiz();
    }
});

// Shuffle function per a bateries de preguntes
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function openQuiz() {
    quizTitle.textContent = `Preguntes: ${currentEpoch.name}`;

    // Agafar 5 preguntes aleatòries del banc de 10
    currentQuizQuestions = shuffleArray(currentEpoch.questions).slice(0, 5);

    userAnswers = new Array(currentQuizQuestions.length).fill(null);
    quizError.classList.add('hidden');

    questionsContainer.innerHTML = '';

    currentQuizQuestions.forEach((q, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';

        const text = document.createElement('p');
        text.className = 'question-text';
        text.textContent = `${index + 1}. ${q.text}`;
        block.appendChild(text);

        const optsContainer = document.createElement('div');
        optsContainer.className = 'options-container';

        if (q.type === 'choice') {
            q.options.forEach((optText, optIndex) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = optText;
                btn.addEventListener('click', () => selectAnswer(index, optIndex, block));
                optsContainer.appendChild(btn);
            });
        } else if (q.type === 'tf') {
            const btnTrue = document.createElement('button');
            btnTrue.className = 'tf-btn';
            btnTrue.textContent = 'Veritat';
            btnTrue.addEventListener('click', () => selectAnswer(index, true, block));

            const btnFalse = document.createElement('button');
            btnFalse.className = 'tf-btn';
            btnFalse.textContent = 'Fals';
            btnFalse.addEventListener('click', () => selectAnswer(index, false, block));

            optsContainer.appendChild(btnTrue);
            optsContainer.appendChild(btnFalse);
        }

        block.appendChild(optsContainer);
        questionsContainer.appendChild(block);
    });

    showView('quiz');
}

function selectAnswer(questionIndex, answerValue, blockElement) {
    userAnswers[questionIndex] = answerValue;

    // Update UI
    const btns = blockElement.querySelectorAll('.option-btn, .tf-btn');
    btns.forEach(b => b.classList.remove('selected'));

    const q = currentQuizQuestions[questionIndex];
    if (q.type === 'choice') {
        btns[answerValue].classList.add('selected');
    } else {
        if (answerValue === true) btns[0].classList.add('selected');
        if (answerValue === false) btns[1].classList.add('selected');
    }
}

btnSubmitQuiz.addEventListener('click', () => {
    // Check if all answered
    if (userAnswers.includes(null)) {
        quizError.classList.remove('hidden');
        return;
    }
    quizError.classList.add('hidden');

    // Evaluate
    let correctCount = 0;
    currentQuizQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correctCount++;
        }
    });

    showResults(correctCount, currentQuizQuestions.length);
});

function showResults(score, total) {
    scoreDisplay.textContent = score;

    if (score === total) {
        feedbackMsg.textContent = "Excel·lent! Has encertat totes les preguntes.";
        feedbackMsg.style.color = "var(--success-color)";
    } else if (score >= total / 2) {
        feedbackMsg.textContent = "Molt bé! Has aprovat el qüestionari.";
        feedbackMsg.style.color = "var(--success-color)";
    } else {
        feedbackMsg.textContent = "Cal millorar. Et recomanem rellegir el PDF.";
        feedbackMsg.style.color = "var(--danger-color)";
    }

    // Mark as completed if they got at least a passing grade (e.g. 3 out of 5)
    // The prompt implied passing to get green button ("Al completar y aprobar el test").
    if (score >= 3) {
        currentEpoch.completed = true;
    }

    showView('results');
}

btnReturnMenu.addEventListener('click', () => {
    renderMenu();
    showView('menu');
    checkVictoryCondition();
});

function checkVictoryCondition() {
    const isAllCompleted = epochs.every(epoch => epoch.completed === true);
    if (isAllCompleted) {
        // Trigger confetti
        var duration = 3000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        // Show an alert after a short delay
        setTimeout(() => {
            alert(" ENHORABONA! Has superat tot el viatge per la Història de la Música! 🎉");
        }, 1500);
    }
}
