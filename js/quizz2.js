const questions = [
    {
        question: "Welke vorm van extreem weer komt vaker voor door klimaatverandering?",
        answers: [
            { text: "Hittegolven", correct: true, explanation: "Hittegolven komen vaker voor doordat de gemiddelde temperatuur op aarde stijgt door klimaatverandering. Hierdoor ontstaan er vaker periodes van extreme hitte die langer aanhouden en intensiever zijn." },
            { text: "Mist", correct: false, explanation: "Mist is een lokaal weerfenomeen dat ontstaat door temperatuur- en vochtverschillen en wordt niet direct veroorzaakt door klimaatverandering." },
            { text: "Lichte wind", correct: false, explanation: "Windsterkte wordt niet specifiek beïnvloed door klimaatverandering." },
            { text: "Bewolkt weer", correct: false, explanation: "Bewolking is afhankelijk van weersomstandigheden en niet direct extreem weer." }
        ]
    },
    {
        question: "Waarom worden hittegolven vaker en sterker?",
        answers: [
            { text: "Omdat de aarde gemiddeld warmer wordt", correct: true, explanation: "Door de stijgende wereldtemperatuur verschuift het klimaat, waardoor hittegolven vaker voorkomen en intensiever en langer aanhouden." },
            { text: "Omdat de zon groter wordt", correct: false, explanation: "De zon verandert niet op korte termijn in grootte." },
            { text: "Omdat de aarde langzamer draait", correct: false, explanation: "De rotatie van de aarde blijft constant." },
            { text: "Omdat de maan dichterbij komt", correct: false, explanation: "De maan heeft geen invloed op hittegolven." }
        ]
    },
    {
        question: "Wat kan er gebeuren als er in korte tijd extreem veel regen valt?",
        answers: [
            { text: "Overstromingen", correct: true, explanation: "Als regen sneller valt dan het kan worden afgevoerd, kan dit leiden tot overstromingen." },
            { text: "Kortere dagen", correct: false, explanation: "De lengte van dagen verandert niet door regen." },
            { text: "Meer bergen", correct: false, explanation: "Regen verandert het landschap niet direct in bergen." },
            { text: "Minder rivieren", correct: false, explanation: "Regen zorgt juist voor meer water in rivieren." }
        ]
    },
    {
        question: "Waarom kunnen regenbuien heviger worden door klimaatverandering?",
        answers: [
            { text: "Warme lucht kan meer waterdamp vasthouden", correct: true, explanation: "Warme lucht bevat meer vocht, waardoor regenbuien heviger kunnen worden." },
            { text: "De aarde draait sneller", correct: false, explanation: "De draaisnelheid heeft geen invloed op regen." },
            { text: "Er zijn minder wolken", correct: false, explanation: "Dit is geen direct gevolg van klimaatverandering." },
            { text: "De zon staat dichter bij de aarde", correct: false, explanation: "De afstand tot de zon verandert niet relevant." }
        ]
    },
    {
        question: "Welke ramp kan ontstaan door langdurige hitte en droogte?",
        answers: [
            { text: "Bosbranden", correct: true, explanation: "Droge vegetatie kan makkelijk ontbranden, waardoor bosbranden ontstaan." },
            { text: "Sneeuwstormen", correct: false, explanation: "Deze ontstaan in koude omstandigheden." },
            { text: "Mist", correct: false, explanation: "Mist ontstaat door condensatie, niet door droogte." },
            { text: "Hagelbuien", correct: false, explanation: "Hagel ontstaat in onweerswolken." }
        ]
    },
    {
        question: "Wat gebeurt er vaak met droogtes door klimaatverandering?",
        answers: [
            { text: "Ze duren langer en worden heviger", correct: true, explanation: "Door hogere temperaturen en minder neerslag nemen droogtes toe in duur en intensiteit." },
            { text: "Ze verdwijnen helemaal", correct: false, explanation: "Droogtes verdwijnen niet." },
            { text: "Ze komen alleen in de winter", correct: false, explanation: "Droogtes kunnen in alle seizoenen voorkomen." },
            { text: "Ze worden korter", correct: false, explanation: "Ze worden juist vaak langer." }
        ]
    },
    {
        question: "Wat kan warm oceaanwater versterken?",
        answers: [
            { text: "Orkanen en tropische stormen", correct: true, explanation: "Warm water levert energie aan stormen, waardoor ze sterker worden." },
            { text: "Mist", correct: false, explanation: "Mist wordt niet hierdoor versterkt." },
            { text: "Lichte regen", correct: false, explanation: "Niet direct beïnvloed." },
            { text: "Sneeuw", correct: false, explanation: "Komt niet voor in tropische gebieden." }
        ]
    },
    {
        question: "Wat kan een combinatie van zware stormen en stijgende zeespiegel veroorzaken?",
        answers: [
            { text: "Kustoverstromingen", correct: true, explanation: "Een hogere zeespiegel vergroot het risico op overstromingen bij stormen." },
            { text: "Meer bergen", correct: false, explanation: "Geen invloed." },
            { text: "Minder wind", correct: false, explanation: "Stormen brengen juist meer wind." },
            { text: "Kortere nachten", correct: false, explanation: "Geen effect." }
        ]
    },
    {
        question: "Welke van deze is GEEN extreem weer?",
        answers: [
            { text: "Normale zomerdag", correct: true, explanation: "Dit valt binnen normaal weer." },
            { text: "Hittegolf", correct: false, explanation: "Dit is extreem weer." },
            { text: "Orkaan", correct: false, explanation: "Dit is extreem weer." },
            { text: "Overstroming", correct: false, explanation: "Dit is extreem weer." }
        ]
    },
    {
        question: "Waarom is extreem weer gevaarlijk voor mensen?",
        answers: [
            { text: "Het kan schade, evacuaties en slachtoffers veroorzaken", correct: true, explanation: "Extreem weer kan grote schade en gevaarlijke situaties veroorzaken." },
            { text: "Het maakt dagen korter", correct: false, explanation: "Geen invloed." },
            { text: "Het verandert de kleur van de lucht", correct: false, explanation: "Niet relevant." },
            { text: "Het stopt de wind", correct: false, explanation: "Niet waar." }
        ]
    },

    // OPEN VRAGEN (verbeterde uitleg)
    {
        type: "open",
        question: "Noem een voorbeeld van extreem weer dat vaker voorkomt door klimaatverandering.",
        correctAnswer: ["hittegolf", "hittegolven"],
        explanation: "Hittegolven komen vaker voor doordat de gemiddelde temperatuur stijgt. Hierdoor ontstaan langere en intensere periodes van extreme hitte."
    },
    {
        type: "open",
        question: "Welke natuurramp kan ontstaan door langdurige droogte en hitte?",
        correctAnswer: ["bosbrand", "bosbranden"],
        explanation: "Door hitte en droogte droogt vegetatie uit, waardoor het sneller kan ontbranden en bosbranden ontstaan."
    },
    {
        type: "open",
        question: "Wat kan er gebeuren als er extreem veel regen in korte tijd valt?",
        correctAnswer: ["overstroming", "overstromingen"],
        explanation: "Als regen sneller valt dan het afgevoerd kan worden, kan dit leiden tot overstromingen van rivieren en straten."
    },
    {
        type: "open",
        question: "Welke soort storm kan sterker worden door warmer oceaanwater?",
        correctAnswer: ["orkaan", "orkanen"],
        explanation: "Warm oceaanwater levert energie aan orkanen, waardoor ze sterker worden en meer schade kunnen veroorzaken."
    },
    {
        type: "open",
        question: "Wat stijgt door klimaatverandering waardoor kusten sneller overstromen?",
        correctAnswer: ["zeespiegel"],
        explanation: "Door smeltend ijs en uitzettend water stijgt de zeespiegel, waardoor kustgebieden sneller overstromen."
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
    "/Assets/Fotos/icoon.webp",
    "/Assets/Fotos/extreemweer1.jpg",
    "/Assets/Fotos/extreemweer2.png",
    "/Assets/Fotos/extreemweer3.png"
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

// select answer
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
    nextButton.innerHTML = "Opnieuw";
    nextButton.style.display = "block";
}

// next
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