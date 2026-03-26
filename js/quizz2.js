const questions = [
    {
        question: "Welke vorm van extreem weer komt vaker voor door klimaatverandering?",
        answers: [
            { text: "Hittegolven", correct: true, explanation: "Hittegolven nemen toe omdat de gemiddelde temperatuur op aarde stijgt. Warme lucht en langere warme periodes zorgen ervoor dat periodes van extreme hitte frequenter en intensiever worden." },
            { text: "Mist", correct: false, explanation: "Mist ontstaat door lokale temperatuur- en vochtverschillen. Klimaatverandering beïnvloedt mist niet direct, hoewel veranderde weerspatronen het aantal mistdagen enigszins kunnen beïnvloeden." },
            { text: "Lichte wind", correct: false, explanation: "Lichte wind is normaal weer. Klimaatverandering verandert de gemiddelde wind niet significant, maar kan wel leiden tot krachtigere stormen." },
            { text: "Bewolkt weer", correct: false, explanation: "Bewolking varieert dagelijks door lokale omstandigheden en wordt niet direct extremer door klimaatverandering." }
        ]
    },
    {
        question: "Waarom worden hittegolven vaker en sterker?",
        answers: [
            { text: "Omdat de aarde gemiddeld warmer wordt", correct: true, explanation: "Een stijgende gemiddelde temperatuur verhoogt de kans op extreme hitte. Hierdoor worden hittegolven frequenter, duren langer en kunnen ze gevaarlijker zijn voor mens en natuur." },
            { text: "Omdat de zon groter wordt", correct: false, explanation: "De zon verandert niet merkbaar op korte termijn. Hit­tegolven hebben hier geen verband mee." },
            { text: "Omdat de aarde langzamer draait", correct: false, explanation: "De rotatie van de aarde blijft vrijwel constant. Klimaatverandering veroorzaakt dit niet." },
            { text: "Omdat de maan dichterbij komt", correct: false, explanation: "De maan beïnvloedt vooral eb en vloed, niet het ontstaan van hittegolven." }
        ]
    },
    {
        question: "Wat kan er gebeuren als er in korte tijd extreem veel regen valt?",
        answers: [
            { text: "Overstromingen", correct: true, explanation: "Wanneer het regenwater sneller valt dan het kan worden afgevoerd door rivieren of riolen, kan water zich ophopen en overstromingen veroorzaken." },
            { text: "Kortere dagen", correct: false, explanation: "De lengte van de dagen wordt bepaald door de rotatie van de aarde, niet door regenval." },
            { text: "Meer bergen", correct: false, explanation: "Regen kan erosie veroorzaken, maar creëert geen nieuwe bergen." },
            { text: "Minder rivieren", correct: false, explanation: "Regen verhoogt juist de waterstand in rivieren, het vermindert ze niet." }
        ]
    },
    {
        question: "Waarom kunnen regenbuien heviger worden door klimaatverandering?",
        answers: [
            { text: "Warme lucht kan meer waterdamp vasthouden", correct: true, explanation: "Een warmere atmosfeer kan meer vocht bevatten. Als deze lucht afkoelt, valt al dat extra vocht in de vorm van hevige regenbuien neer." },
            { text: "De aarde draait sneller", correct: false, explanation: "De rotatiesnelheid van de aarde verandert niet, dus dit beïnvloedt regenbuien niet." },
            { text: "Er zijn minder wolken", correct: false, explanation: "Klimaatverandering verandert de wolkenvorming lokaal, maar hevige regen ontstaat juist door meer vocht in de lucht." },
            { text: "De zon staat dichter bij de aarde", correct: false, explanation: "De afstand tot de zon verandert niet relevant voor regenbuien op aarde." }
        ]
    },
    {
        question: "Welke ramp kan ontstaan door langdurige hitte en droogte?",
        answers: [
            { text: "Bosbranden", correct: true, explanation: "Bij langdurige hitte en droogte droogt vegetatie uit, waardoor het makkelijker ontbrandt. Klimaatverandering vergroot dit risico wereldwijd." },
            { text: "Sneeuwstormen", correct: false, explanation: "Sneeuwstormen hebben koude temperaturen nodig en ontstaan juist niet door droogte." },
            { text: "Mist", correct: false, explanation: "Mist ontstaat door condensatie van vochtige lucht en heeft weinig te maken met droogte." },
            { text: "Hagelbuien", correct: false, explanation: "Hagel ontstaat in sterke onweersbuien, niet door droogte en hitte." }
        ]
    },
    {
        question: "Wat gebeurt er vaak met droogtes door klimaatverandering?",
        answers: [
            { text: "Ze duren langer en worden heviger", correct: true, explanation: "Hogere temperaturen en minder neerslag leiden tot intensere droogtes die langer aanhouden, waardoor landbouw en ecosystemen zwaar onder druk komen te staan." },
            { text: "Ze verdwijnen helemaal", correct: false, explanation: "Droogtes verdwijnen niet; klimaatverandering kan ze juist verergeren." },
            { text: "Ze komen alleen in de winter", correct: false, explanation: "Droogtes kunnen in elk seizoen voorkomen, afhankelijk van regionale klimaatpatronen." },
            { text: "Ze worden korter", correct: false, explanation: "Door klimaatverandering worden droogtes meestal langer en ernstiger." }
        ]
    },
    {
        question: "Wat kan warm oceaanwater versterken?",
        answers: [
            { text: "Orkanen en tropische stormen", correct: true, explanation: "Warm oceaanwater geeft energie aan tropische stormen, waardoor ze krachtiger worden. Dit is een direct gevolg van klimaatverandering, omdat oceanen opwarmen." },
            { text: "Mist", correct: false, explanation: "Mist wordt vooral veroorzaakt door lokale temperatuurverschillen, niet door oceaanwarmte." },
            { text: "Lichte regen", correct: false, explanation: "Lichte regen wordt niet direct beïnvloed door warme oceanen." },
            { text: "Sneeuw", correct: false, explanation: "Sneeuw komt in koude omstandigheden voor en wordt niet versterkt door warm oceaanwater." }
        ]
    },
    {
        question: "Wat kan een combinatie van zware stormen en stijgende zeespiegel veroorzaken?",
        answers: [
            { text: "Kustoverstromingen", correct: true, explanation: "Stijgende zeespiegels zorgen ervoor dat stormen die normaal geen schade zouden aanrichten, nu stranden en steden kunnen overstromen." },
            { text: "Meer bergen", correct: false, explanation: "Bergen ontstaan door geologische processen, niet door stormen." },
            { text: "Minder wind", correct: false, explanation: "Stormen brengen juist meer wind." },
            { text: "Kortere nachten", correct: false, explanation: "De lengte van nachten wordt niet beïnvloed door stormen of zeespiegelstijging." }
        ]
    },
    {
        question: "Welke van deze is GEEN extreem weer?",
        answers: [
            { text: "Normale zomerdag", correct: true, explanation: "Een normale zomerdag valt binnen de standaard weersverwachtingen en is dus geen extreem weer." },
            { text: "Hittegolf", correct: false, explanation: "Hittegolven zijn periodes van extreem hoge temperaturen en vallen onder extreem weer." },
            { text: "Orkaan", correct: false, explanation: "Orkanen zijn krachtige stormen met extreem veel wind en regen, een vorm van extreem weer." },
            { text: "Overstroming", correct: false, explanation: "Overstromingen door hevige regen of stormvloeden zijn een voorbeeld van extreem weer." }
        ]
    },
    {
        question: "Waarom is extreem weer gevaarlijk voor mensen?",
        answers: [
            { text: "Het kan schade, evacuaties en slachtoffers veroorzaken", correct: true, explanation: "Extreem weer kan gebouwen beschadigen, wegen onbruikbaar maken en mensenlevens bedreigen, daarom is het belangrijk om waakzaam te zijn en voorbereid te zijn." },
            { text: "Het maakt dagen korter", correct: false, explanation: "De lengte van dagen wordt niet beïnvloed door extreem weer." },
            { text: "Het verandert de kleur van de lucht", correct: false, explanation: "Kleurveranderingen van de lucht zijn geen direct gevaar." },
            { text: "Het stopt de wind", correct: false, explanation: "Wind kan variëren, maar extreem weer stopt het niet." }
        ]
    },

    // OPEN VRAGEN 
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