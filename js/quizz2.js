const questions = [
    {
        question: "Welke vorm van extreem weer komt vaker voor door klimaatverandering?",
        answers: [
            { text: "Hittegolven", correct: true, explanation: "Hittegolven komen vaker voor doordat de gemiddelde temperatuur op aarde stijgt door klimaatverandering." },
            { text: "Mist", correct: false, explanation: "Mist komt niet vaker voor door klimaatverandering. Dit is meer een lokaal weerfenomeen." },
            { text: "Lichte wind", correct: false, explanation: "Lichte wind wordt niet direct beïnvloed door klimaatverandering." },
            { text: "Bewolkt weer", correct: false, explanation: "Bewolkt weer wordt niet per se sterker door klimaatverandering." }
        ]
    },
    {
        question: "Waarom worden hittegolven vaker en sterker?",
        answers: [
            { text: "Omdat de aarde gemiddeld warmer wordt", correct: true, explanation: "Door de stijgende wereldtemperaturen worden hittegolven sterker en frequenter." },
            { text: "Omdat de zon groter wordt", correct: false, explanation: "De zon verandert niet in grootte door klimaatverandering." },
            { text: "Omdat de aarde langzamer draait", correct: false, explanation: "De snelheid van de aardrotatie heeft geen invloed op hittegolven." },
            { text: "Omdat de maan dichterbij komt", correct: false, explanation: "De maan komt niet dichterbij, dit heeft geen invloed op de opwarming van de aarde." }
        ]
    },
    {
        question: "Wat kan er gebeuren als er in korte tijd extreem veel regen valt?",
        answers: [
            { text: "Overstromingen", correct: true, explanation: "Extreem veel regen in korte tijd kan leiden tot overstromingen, doordat de grond het water niet snel genoeg kan absorberen." },
            { text: "Kortere dagen", correct: false, explanation: "De lengte van de dag wordt niet beïnvloed door regenval." },
            { text: "Meer bergen", correct: false, explanation: "Regenval veroorzaakt geen directe verandering in het reliëf, zoals bergen." },
            { text: "Minder rivieren", correct: false, explanation: "Regen kan tijdelijk de rivierstanden verhogen, maar vermindert rivieren niet." }
        ]
    },
    {
        question: "Waarom kunnen regenbuien heviger worden door klimaatverandering?",
        answers: [
            { text: "Warme lucht kan meer waterdamp vasthouden", correct: true, explanation: "Warme lucht heeft meer capaciteit om waterdamp op te nemen, wat kan leiden tot hevigere regenbuien." },
            { text: "De aarde draait sneller", correct: false, explanation: "De snelheid van de aardrotatie heeft geen invloed op de hoeveelheid waterdamp in de lucht." },
            { text: "Er zijn minder wolken", correct: false, explanation: "Er is geen direct bewijs dat klimaatverandering leidt tot minder wolken." },
            { text: "De zon staat dichter bij de aarde", correct: false, explanation: "De afstand van de zon tot de aarde heeft geen invloed op de intensiteit van regenbuien." }
        ]
    },
    {
        question: "Welke ramp kan ontstaan door langdurige hitte en droogte?",
        answers: [
            { text: "Bosbranden", correct: true, explanation: "Langdurige hitte en droogte kunnen leiden tot bosbranden doordat de natuur uitdroogt en vatbaarder wordt voor vuur." },
            { text: "Sneeuwstormen", correct: false, explanation: "Sneeuwstormen komen voor in koude klimaten, maar hebben geen directe link met hitte en droogte." },
            { text: "Mist", correct: false, explanation: "Mist is een weersverschijnsel dat meestal op koelere dagen voorkomt, niet door droogte." },
            { text: "Hagelbuien", correct: false, explanation: "Hagelbuien ontstaan door stormachtige omstandigheden, niet direct door droogte." }
        ]
    },
    {
        question: "Wat gebeurt er vaak met droogtes door klimaatverandering?",
        answers: [
            { text: "Ze duren langer en worden heviger", correct: true, explanation: "Door klimaatverandering neemt de frequentie en intensiteit van droogtes toe." },
            { text: "Ze verdwijnen helemaal", correct: false, explanation: "Droogtes zullen niet verdwijnen door klimaatverandering; ze kunnen juist erger worden." },
            { text: "Ze komen alleen in de winter", correct: false, explanation: "Droogtes kunnen in alle seizoenen voorkomen, niet alleen in de winter." },
            { text: "Ze worden korter", correct: false, explanation: "De duur van droogtes neemt vaak toe door klimaatverandering." }
        ]
    },
    {
        question: "Wat kan warm oceaanwater versterken?",
        answers: [
            { text: "Orkanen en tropische stormen", correct: true, explanation: "Warm oceaanwater is de belangrijkste energiebron voor orkanen en tropische stormen." },
            { text: "Mist", correct: false, explanation: "Mist wordt niet versterkt door warm oceaanwater, maar door temperatuurverschillen tussen lucht en water." },
            { text: "Lichte regen", correct: false, explanation: "Lichte regen wordt niet beïnvloed door de temperatuur van het oceaanwater." },
            { text: "Sneeuw", correct: false, explanation: "Sneeuw komt niet voor in tropische gebieden, waar warm oceaanwater voorkomt." }
        ]
    },
    {
        question: "Wat kan een combinatie van zware stormen en stijgende zeespiegel veroorzaken?",
        answers: [
            { text: "Kustoverstromingen", correct: true, explanation: "De stijgende zeespiegel door klimaatverandering verhoogt het risico op overstromingen, vooral bij zware stormen." },
            { text: "Meer bergen", correct: false, explanation: "Stormen en stijgende zeespiegels hebben geen invloed op het reliëf van bergen." },
            { text: "Minder wind", correct: false, explanation: "Stormen kunnen juist meer wind veroorzaken, niet minder." },
            { text: "Kortere nachten", correct: false, explanation: "De lengte van de nacht wordt niet beïnvloed door stormen of zeespiegelstijging." }
        ]
    },
    {
        question: "Welke van deze is GEEN extreem weer?",
        answers: [
            { text: "Normale zomerdag", correct: true, explanation: "Een normale zomerdag is geen extreem weer, terwijl hittegolven, orkanen en overstromingen wel extreem weer zijn." },
            { text: "Hittegolf", correct: false, explanation: "Een hittegolf is wel een vorm van extreem weer." },
            { text: "Orkaan", correct: false, explanation: "Een orkaan is ook extreem weer." },
            { text: "Overstroming", correct: false, explanation: "Overstromingen zijn eveneens een vorm van extreem weer." }
        ]
    },
    {
        question: "Waarom is extreem weer gevaarlijk voor mensen?",
        answers: [
            { text: "Het kan schade, evacuaties en slachtoffers veroorzaken", correct: true, explanation: "Extreem weer kan huizen beschadigen, evacuaties vereisen en zelfs leiden tot slachtoffers." },
            { text: "Het maakt dagen korter", correct: false, explanation: "Extreem weer heeft geen invloed op de lengte van de dagen." },
            { text: "Het verandert de kleur van de lucht", correct: false, explanation: "Extreem weer heeft geen invloed op de kleur van de lucht." },
            { text: "Het stopt de wind", correct: false, explanation: "Extreem weer heeft meestal juist meer wind, niet minder." }
        ]
    },
    {
        type: "open",
        question: "Noem een voorbeeld van extreem weer dat vaker voorkomt door klimaatverandering.",
        correctAnswer: ["hittegolf", "hittegolven"],
        explanation: "Hittegolven komen vaker voor door de gemiddelde temperatuurstijging wereldwijd als gevolg van klimaatverandering."
    },
    {
        type: "open",
        question: "Welke natuurramp kan ontstaan door langdurige droogte en hitte?",
        correctAnswer: ["bosbrand", "bosbranden"],
        explanation: "Langdurige droogte en hitte verhogen het risico op bosbranden, omdat de natuur uitdroogt en vatbaarder wordt voor vuur."
    },
    {
        type: "open",
        question: "Wat kan er gebeuren als er extreem veel regen in korte tijd valt?",
        correctAnswer: ["overstroming", "overstromingen"],
        explanation: "Als er in korte tijd veel regen valt, kan het water niet snel genoeg weglopen, wat leidt tot overstromingen."
    },
    {
        type: "open",
        question: "Welke soort storm kan sterker worden door warmer oceaanwater?",
        correctAnswer: ["orkaan", "orkanen"],
        explanation: "Orkanen halen hun energie uit warm oceaanwater, waardoor ze sterker kunnen worden als het water warmer is."
    },
    {
        type: "open",
        question: "Wat stijgt door klimaatverandering waardoor kusten sneller overstromen?",
        correctAnswer: ["zeespiegel"],
        explanation: "De zeespiegel stijgt door de opwarming van de aarde, waardoor kusten meer risico lopen op overstromingen."
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    if (currentQuestion.type === "open") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "openAnswer";
        input.placeholder = "Typ je antwoord...";
        input.classList.add("btn");
        answerButtons.appendChild(input);

        const button = document.createElement("button");
        button.innerHTML = "Controleer";
        button.classList.add("btn");

        button.onclick = function () {
            const userAnswer = input.value.toLowerCase();
            const correctAnswers = currentQuestion.correctAnswer.map(answer => answer.toLowerCase());

            if (correctAnswers.includes(userAnswer)) {
                score++;
                correctSound.currentTime = 0;
                correctSound.play();
                input.style.backgroundColor = "#9aeabc";
                showExplanation(currentQuestion.explanation, true);
            } else {
                wrongSound.currentTime = 0;
                wrongSound.play();
                input.style.backgroundColor = "#ff9393";
                showExplanation(currentQuestion.explanation, false);
            }
            nextButton.style.display = "block";
        };

        answerButtons.appendChild(button);
    } else {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");

            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }

            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
        });
    }
}

function showExplanation(explanation, isCorrect) {
    const explanationElement = document.createElement("div");
    explanationElement.classList.add(isCorrect ? "correct-explanation" : "incorrect-explanation");
    explanationElement.innerHTML = explanation;
    answerButtons.appendChild(explanationElement);
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const explanation = questions[currentQuestionIndex].answers.find(answer => answer.text === selectedBtn.innerHTML).explanation;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctSound.currentTime = 0;
        correctSound.play();
    } else {
        selectedBtn.classList.add("incorrect");
        wrongSound.currentTime = 0;
        wrongSound.play();
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    showExplanation(explanation, isCorrect);

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Je had ${score} van de ${questions.length} goed!`;
    nextButton.innerHTML = "Opnieuw";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();