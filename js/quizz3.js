const questions = [
    {
        question: "Wat is een veelvoorkomende vorm van oceaanvervuiling?",
        answers: [
            { text: "Plastic afval", correct: true, explanation: "Plastic afval komt vaak in zee terecht en breekt heel langzaam af. Dit vormt een groot gevaar voor zeedieren." },
            { text: "Zand", correct: false, explanation: "Zand is een natuurlijk onderdeel van de oceaan." },
            { text: "Zout", correct: false, explanation: "Zout hoort bij zeewater en is geen vervuiling." },
            { text: "Zeewier", correct: false, explanation: "Zeewier is een natuurlijk onderdeel van het ecosysteem." }
        ]
    },
    {
        question: "Waarom is plastic gevaarlijk voor zeedieren?",
        answers: [
            { text: "Ze kunnen het opeten of erin verstrikt raken", correct: true, explanation: "Zeedieren verwarren plastic vaak met voedsel of raken erin vast." },
            { text: "Het maakt het water warmer", correct: false, explanation: "Plastic beïnvloedt de temperatuur niet direct." },
            { text: "Het maakt golven groter", correct: false, explanation: "Plastic heeft geen effect op golven." },
            { text: "Het verandert de lucht", correct: false, explanation: "Plastic in zee beïnvloedt de lucht niet direct." }
        ]
    },
    {
        question: "Wat zijn microplastics?",
        answers: [
            { text: "Kleine stukjes plastic", correct: true, explanation: "Microplastics zijn kleine plastic deeltjes die ontstaan door afbraak van groter plastic." },
            { text: "Grote plastic zakken", correct: false, explanation: "Dat zijn geen microplastics." },
            { text: "Soort zand", correct: false, explanation: "Het lijkt soms op zand, maar is plastic." },
            { text: "Planten", correct: false, explanation: "Microplastics zijn geen levende dingen." }
        ]
    },
    {
        question: "Hoe komt plastic meestal in de oceaan terecht?",
        answers: [
            { text: "Via rivieren en afval op straat", correct: true, explanation: "Afval wordt via wind en water naar zee vervoerd." },
            { text: "Het groeit in zee", correct: false, explanation: "Plastic wordt door mensen gemaakt." },
            { text: "Door vulkanen", correct: false, explanation: "Vulkanen maken geen plastic." },
            { text: "Door vissen", correct: false, explanation: "Vissen produceren geen plastic." }
        ]
    },
    {
        question: "Wat is een gevolg van oceaanvervuiling?",
        answers: [
            { text: "Schade aan ecosystemen", correct: true, explanation: "Vervuiling verstoort het leven in zee en kan dieren doden." },
            { text: "Meer zuurstof", correct: false, explanation: "Vervuiling kan juist zuurstof verminderen." },
            { text: "Meer vissen", correct: false, explanation: "Vervuiling schaadt vissen." },
            { text: "Helder water", correct: false, explanation: "Water wordt vaak troebel door vervuiling." }
        ]
    },
    {
        question: "Wat kan olie in zee veroorzaken?",
        answers: [
            { text: "Schade aan dieren", correct: true, explanation: "Olie maakt dieren ziek en tast hun veren of vacht aan." },
            { text: "Meer vissen", correct: false, explanation: "Olie is giftig voor vissen." },
            { text: "Schonere zee", correct: false, explanation: "Olie vervuilt de oceaan." },
            { text: "Sterkere golven", correct: false, explanation: "Olie beïnvloedt golven niet." }
        ]
    },
    {
        question: "Wat kun je doen om oceaanvervuiling te verminderen?",
        answers: [
            { text: "Minder plastic gebruiken", correct: true, explanation: "Minder plastic zorgt voor minder afval in zee." },
            { text: "Afval op straat gooien", correct: false, explanation: "Dat maakt het probleem erger." },
            { text: "Meer olie gebruiken", correct: false, explanation: "Dat vergroot vervuiling." },
            { text: "Water verspillen", correct: false, explanation: "Dat helpt niet tegen vervuiling." }
        ]
    },
    {
        question: "Wat is 'plastic soep'?",
        answers: [
            { text: "Een grote hoeveelheid plastic in zee", correct: true, explanation: "Plastic verzamelt zich op sommige plekken in de oceaan." },
            { text: "Een gerecht", correct: false, explanation: "Het is geen eten." },
            { text: "Een vissoort", correct: false, explanation: "Het is geen dier." },
            { text: "Een storm", correct: false, explanation: "Het heeft niets met stormen te maken." }
        ]
    },
    {
        question: "Welke van deze is GEEN oceaanvervuiling?",
        answers: [
            { text: "Natuurlijk zeewater", correct: true, explanation: "Zeewater hoort bij de oceaan." },
            { text: "Plastic", correct: false, explanation: "Plastic vervuilt de oceaan." },
            { text: "Olie", correct: false, explanation: "Olie is schadelijk." },
            { text: "Chemisch afval", correct: false, explanation: "Chemisch afval is gevaarlijk." }
        ]
    },
    {
        question: "Waarom is oceaanvervuiling gevaarlijk voor mensen?",
        answers: [
            { text: "Het beïnvloedt voedsel en gezondheid", correct: true, explanation: "Mensen kunnen vervuilde vis eten met schadelijke stoffen." },
            { text: "Het maakt dagen korter", correct: false, explanation: "Dat klopt niet." },
            { text: "Het stopt de wind", correct: false, explanation: "Dat gebeurt niet." },
            { text: "Het verandert zwaartekracht", correct: false, explanation: "Dat is onmogelijk." }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const extraImage = document.getElementById("extra-image");
 
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
 
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
 
const images = [
    "/quizzie/Assets/Fotos/ocean1.jpg",
    "/quizzie/Assets/Fotos/ocean2.jpeg",
    "/quizzie/Assets/Fotos/ocean3.jpg",
    "/quizzie/Assets/Fotos/ocean4.jpg",
    "/quizzie/Assets/Fotos/ocean5.jpg",
    "/quizzie/Assets/Fotos/ocean6.jpg",
    "/quizzie/Assets/Fotos/ocean7.jpg",
    "/quizzie/Assets/Fotos/ocean8.jpg",
    "/quizzie/Assets/Fotos/ocean9.avif",
    "/quizzie/Assets/Fotos/ocean10.webp"
];
 
// naam
function askName() {
    userName = prompt("Wat is je naam?");
    if (!userName) userName = "Speler";
}
 
// shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
 
// start
function startQuiz() {
    askName();
    shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende";
    showQuestion();
}
 
// vraag tonen
function showQuestion() {
    resetState();
    let q = questions[currentQuestionIndex];
 
    // afbeelding wisselt per vraag
    extraImage.src = images[currentQuestionIndex % images.length];
 
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${q.question}`;
 
    if (q.type === "open") {
        const input = document.createElement("input");
        input.classList.add("btn");
        answerButtons.appendChild(input);
 
        const btn = document.createElement("button");
        btn.innerHTML = "Controleer";
        btn.classList.add("btn");
 
        function check() {
            let val = input.value.toLowerCase();
 
            if (q.correctAnswer.some(a => val.includes(a))) {
                score++;
                correctSound.play();
                input.style.backgroundColor = "#9aeabc";
                showExplanation(q.explanation, true);
            } else {
                wrongSound.play();
                input.style.backgroundColor = "#ff9393";
                showExplanation(q.explanation, false);
            }
 
            nextButton.style.display = "block";
        }
 
        btn.onclick = check;
 
        input.addEventListener("keydown", e => {
            if (e.key === "Enter") check();
        });
 
        answerButtons.appendChild(btn);
 
    } else {
        q.answers.forEach(a => {
            const btn = document.createElement("button");
            btn.innerHTML = a.text;
            btn.classList.add("btn");
 
            if (a.correct) btn.dataset.correct = true;
 
            btn.onclick = selectAnswer;
            answerButtons.appendChild(btn);
        });
    }
}
 
// select antwoord
function selectAnswer(e) {
    const btn = e.target;
    const correct = btn.dataset.correct === "true";
    const q = questions[currentQuestionIndex];
 
    const exp = q.answers.find(a => a.text === btn.innerHTML).explanation;
 
    if (correct) {
        btn.classList.add("correct");
        score++;
        correctSound.play();
    } else {
        btn.classList.add("incorrect");
        wrongSound.play();
    }
 
    Array.from(answerButtons.children).forEach(b => {
        if (b.dataset.correct === "true") b.classList.add("correct");
        b.disabled = true;
    });
 
    showExplanation(exp, correct);
    nextButton.style.display = "block";
}
 
// uitleg tonen
function showExplanation(text, ok) {
    const div = document.createElement("div");
    div.classList.add(ok ? "correct-explanation" : "incorrect-explanation");
    div.innerHTML = text;
    answerButtons.appendChild(div);
}
 
// reset
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}
 
// score
function showScore() {
    resetState();
    questionElement.innerHTML = `${userName}, je had ${score} van de ${questions.length} goed!`;
 
    extraImage.src = "/quizzie/Assets/Fotos/klaar.jpeg";
 
    nextButton.innerHTML = "Opnieuw";
    nextButton.style.display = "block";
}
 
// volgende
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
 
nextButton.onclick = () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
};
 
startQuiz();