const questions = [
    {
        question: "Welk gas wordt het meest uitgestoten door menselijke activiteiten?",
        answers: [
            { text: "Zuurstof", correct: false },
            { text: "Koolstofdioxide (CO₂)", correct: true },
            { text: "Waterstof", correct: false },
            { text: "Neon", correct: false }
        ],
        explanation: "Koolstofdioxide (CO₂) is het belangrijkste broeikasgas door verbranding van fossiele brandstoffen."
    },
    {
        question: "Welke sector is wereldwijd de grootste bron van CO₂-uitstoot?",
        answers: [
            { text: "Energieproductie (elektriciteit en warmte)", correct: true },
            { text: "Bibliotheken", correct: false },
            { text: "Sport", correct: false },
            { text: "Mode", correct: false }
        ],
        explanation: "Energieproductie veroorzaakt de meeste uitstoot door gebruik van kolen en gas."
    },
    {
        question: "Welke vorm van transport veroorzaakt gemiddeld de meeste uitstoot per persoon per kilometer?",
        answers: [
            { text: "Trein", correct: false },
            { text: "Bus", correct: false },
            { text: "Vliegtuig", correct: true },
            { text: "Fiets", correct: false }
        ],
        explanation: "Vliegtuigen stoten per persoon per kilometer het meeste CO₂ uit."
    },
    {
        question: "Welke brandstof zorgt voor CO₂-uitstoot wanneer je die verbrandt?",
        answers: [
            { text: "Zonlicht", correct: false },
            { text: "Wind", correct: false },
            { text: "Steenkool", correct: true },
            { text: "Water", correct: false }
        ],
        explanation: "Steenkool is een fossiele brandstof en veroorzaakt veel CO₂-uitstoot."
    },
    {
        question: "Welke sector zorgt voor veel methaan-uitstoot?",
        answers: [
            { text: "Landbouw en veeteelt", correct: true },
            { text: "Bibliotheken", correct: false },
            { text: "Bioscopen", correct: false },
            { text: "Zwembaden", correct: false }
        ],
        explanation: "Vooral koeien produceren methaan, een sterk broeikasgas."
    },
    {
        question: "Wat gebeurt er met CO₂-uitstoot wanneer er veel bomen worden gekapt?",
        answers: [
            { text: "De uitstoot daalt sterk", correct: false },
            { text: "De uitstoot blijft gelijk", correct: false },
            { text: "De uitstoot stijgt", correct: true },
            { text: "Er verandert niets", correct: false }
        ],
        explanation: "Bomen nemen CO₂ op, dus minder bomen betekent meer CO₂ in de lucht."
    },
    {
        question: "Welke activiteit zorgt meestal voor de minste uitstoot?",
        answers: [
            { text: "Autorijden", correct: false },
            { text: "Vliegen", correct: false },
            { text: "Fietsen", correct: true },
            { text: "Scooter rijden", correct: false }
        ],
        explanation: "Fietsen veroorzaakt geen directe CO₂-uitstoot."
    },
    {
        question: "Wat betekent de term “CO₂-voetafdruk”?",
        answers: [
            { text: "De grootte van je schoenen", correct: false },
            { text: "De hoeveelheid CO₂-uitstoot die iemand of iets veroorzaakt", correct: true },
            { text: "Het aantal bomen in een bos", correct: false },
            { text: "De temperatuur van de aarde", correct: false }
        ],
        explanation: "Je CO₂-voetafdruk laat zien hoeveel je bijdraagt aan klimaatverandering."
    },
    {
        question: "Welk type energie produceert bijna geen directe CO₂-uitstoot tijdens gebruik?",
        answers: [
            { text: "Steenkoolenergie", correct: false },
            { text: "Aardgasenergie", correct: false },
            { text: "Windenergie", correct: true },
            { text: "Dieselenergie", correct: false }
        ],
        explanation: "Windenergie is schoon en stoot geen CO₂ uit tijdens gebruik."
    },
    {
        question: "Welke industrie staat bekend om een hoge CO₂-uitstoot?",
        answers: [
            { text: "Cementindustrie", correct: true },
            { text: "Boekdrukkerijen", correct: false },
            { text: "Speelgoedwinkels", correct: false },
            { text: "Kappers", correct: false }
        ],
        explanation: "Bij cementproductie komt veel CO₂ vrij."
    },
    {
        type: "open",
        question: "Noem een hernieuwbare energiebron.",
        correctAnswers: ["zon", "zonne-energie", "wind", "waterkracht"],
        explanation: "Dit zijn energiebronnen die niet opraken en geen CO₂ uitstoten."
    },
    {
        type: "open",
        question: "Wat stijgt door klimaatverandering en kan overstromingen veroorzaken?",
        correctAnswers: ["zeespiegel"],
        explanation: "Door smeltend ijs stijgt de zeespiegel en kunnen kusten overstromen."
    },
    {
        type: "open",
        question: "Noem een vervoermiddel zonder CO₂-uitstoot.",
        correctAnswers: ["fiets", "lopen", "hond uitlaten"],
        explanation: "Fietsen en lopen stoten geen CO₂ uit."
    },
    {
        type: "open",
        question: "Noem een broeikasgas.",
        correctAnswers: ["co2", "koolstofdioxide", "methaan"],
        explanation: "Broeikasgassen houden warmte vast in de atmosfeer."
    },
    {
        type: "open",
        question: "Wat kan je doen om klimaatverandering te verminderen?",
        correctAnswers: ["minder vliegen", "fietsen", "duurzaam", "energie besparen"],
        explanation: "Door minder uitstoot te veroorzaken help je klimaatverandering te verminderen."
    }
];
 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizImage = document.getElementById("quiz-image");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
 
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
 
const images = [
    "/Assets/Fotos/uitstoot1.jpg", "/Assets/Fotos/uitstoot2.jpg", "/Assets/Fotos/uitstoot3.jpg",
    "/Assets/Fotos/uitstoot4.jpg", "/Assets/Fotos/uitstoot5.png", "/Assets/Fotos/uitstoot6.jpg",
    "/Assets/Fotos/uitstoot7.jpg", "/Assets/Fotos/uitstoot8.png", "/Assets/Fotos/uitstoot9.webp",
    "/Assets/Fotos/uitstoot10.jpg", "/Assets/Fotos/uitstoot11.avif", "/Assets/Fotos/uitstoot12.png",
    "/Assets/Fotos/uitstoot13.png", "/Assets/Fotos/uitstoot14.png", "/Assets/Fotos/uitstoot15.png"
];
 
function askName() {
    userName = prompt("Wat is je naam?");
    if (!userName) userName = "Gast";
}
 
function startQuiz() {
    askName();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende";
    showQuestion();
}
 
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    
    quizImage.src = images[currentQuestionIndex % images.length];
    quizImage.style.display = "block";
 
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
 
    if (currentQuestion.type === "open") {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Typ je antwoord en druk op Enter...";
        input.classList.add("btn");
        answerButtons.appendChild(input);
 
        const btn = document.createElement("button");
        btn.innerHTML = "Controleer";
        btn.classList.add("btn");
 
        const checkAnswer = () => {
            if (nextButton.style.display === "block") return;
 
            const userVal = input.value.toLowerCase().trim();
            const isCorrect = currentQuestion.correctAnswers.some(ans => userVal.includes(ans));
            
            if (isCorrect) {
                score++;
                correctSound.play();
                input.style.backgroundColor = "#9aeabc";
                showExplanation(currentQuestion.explanation, true);
            } else {
                wrongSound.play();
                input.style.backgroundColor = "#ff9393";
                showExplanation(currentQuestion.explanation, false);
            }
            input.disabled = true;
            btn.style.display = "none";
            nextButton.style.display = "block";
        };
 
        btn.onclick = checkAnswer;
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") checkAnswer(); });
        
        answerButtons.appendChild(btn);
        input.focus();
 
    } else {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) button.dataset.correct = true;
            button.onclick = selectAnswer;
            answerButtons.appendChild(button);
        });
    }
}
 
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQuestion = questions[currentQuestionIndex];
 
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctSound.play();
        showExplanation(currentQuestion.explanation, true);
    } else {
        selectedBtn.classList.add("incorrect");
        wrongSound.play();
        showExplanation(currentQuestion.explanation, false);
    }
 
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
 
function showExplanation(text, isCorrect) {
    const div = document.createElement("div");
    div.classList.add(isCorrect ? "correct-explanation" : "incorrect-explanation");
    div.innerHTML = (isCorrect ? "<b>Goed!</b> " : "<b>Helaas...</b> ") + text;
    answerButtons.appendChild(div);
}
 
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 
function showScore() {
    resetState();
    quizImage.style.display = "none";
    questionElement.innerHTML = `Klaar, ${userName}! <br> Je score is ${score} van de ${questions.length}.`;
    nextButton.innerHTML = "Opnieuw";
    nextButton.style.display = "block";
}
 
nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else if (currentQuestionIndex === questions.length) {
        showScore();
    } else {
        startQuiz();
    }
};
 
startQuiz();