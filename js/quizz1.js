const questions = [
    {
    question: "Welk gas wordt het meest uitgestoten door menselijke activiteiten?",
    answers: [
    { text: "Zuurstof", correct: false },
    { text: "Koolstofdioxide (CO₂)", correct: true },
    { text: "Waterstof", correct: false },
    { text: "Neon", correct: false }
    ]
    },
    {
    question: "Welke sector is wereldwijd de grootste bron van CO₂-uitstoot?",
    answers: [
    { text: "Energieproductie (elektriciteit en warmte)", correct: true },
    { text: "Bibliotheken", correct: false },
    { text: "Sport", correct: false },
    { text: "Mode", correct: false }
    ]
    },
    {
    question: "Welke vorm van transport veroorzaakt gemiddeld de meeste uitstoot per persoon per kilometer?",
    answers: [
    { text: "Trein", correct: false },
    { text: "Bus", correct: false },
    { text: "Vliegtuig", correct: true },
    { text: "Fiets", correct: false }
    ]
    },
    {
    question: "Welke brandstof zorgt voor CO₂-uitstoot wanneer je die verbrandt?",
    answers: [
    { text: "Zonlicht", correct: false },
    { text: "Wind", correct: false },
    { text: "Steenkool", correct: true },
    { text: "Water", correct: false }
    ]
    },
    {
    question: "Welke sector zorgt voor veel methaan-uitstoot?",
    answers: [
    { text: "Landbouw en veeteelt", correct: true },
    { text: "Bibliotheken", correct: false },
    { text: "Bioscopen", correct: false },
    { text: "Zwembaden", correct: false }
    ]
    },
    {
    question: "Wat gebeurt er met CO₂-uitstoot wanneer er veel bomen worden gekapt?",
    answers: [
    { text: "De uitstoot daalt sterk", correct: false },
    { text: "De uitstoot blijft gelijk", correct: false },
    { text: "De uitstoot stijgt", correct: true },
    { text: "Er verandert niets", correct: false }
    ]
    },
    {
    question: "Welke activiteit zorgt meestal voor de minste uitstoot?",
    answers: [
    { text: "Autorijden", correct: false },
    { text: "Vliegen", correct: false },
    { text: "Fietsen", correct: true },
    { text: "Scooter rijden", correct: false }
    ]
    },
    {
    question: "Wat betekent de term “CO₂-voetafdruk”?",
    answers: [
    { text: "De grootte van je schoenen", correct: false },
    { text: "De hoeveelheid CO₂-uitstoot die iemand of iets veroorzaakt", correct: true },
    { text: "Het aantal bomen in een bos", correct: false },
    { text: "De temperatuur van de aarde", correct: false }
    ]
    },
    {
    question: "Welk type energie produceert bijna geen directe CO₂-uitstoot tijdens gebruik?",
    answers: [
    { text: "Steenkoolenergie", correct: false },
    { text: "Aardgasenergie", correct: false },
    { text: "Windenergie", correct: true },
    { text: "Dieselenergie", correct: false }
    ]
    },
    {
    question: "Welke industrie staat bekend om een hoge CO₂-uitstoot?",
    answers: [
    { text: "Cementindustrie", correct: true },
    { text: "Boekdrukkerijen", correct: false },
    { text: "Speelgoedwinkels", correct: false },
    { text: "Kappers", correct: false }
    ]
    }
    ];

    
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");
    
    let currentQuestionIndex = 0;
    let score = 0;
     
    function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Volgende";
    showQuestion();
    }
    
    function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestionIndex + 1 + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
    
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    
    if(answer.correct){
    button.dataset.correct = answer.correct;
    }
    
    button.addEventListener("click", selectAnswer);
    
    answerButtons.appendChild(button);
    
    });
    }
    
    function resetState(){
    
    nextButton.style.display = "none";
    
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
    
    }
    
    function selectAnswer(e){
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if(isCorrect){
    
    selectedBtn.classList.add("correct");
    score++;
    
    correctSound.currentTime = 0;
    correctSound.play();
    
    }else{
    
    selectedBtn.classList.add("incorrect");
    
    wrongSound.currentTime = 0;
    wrongSound.play();
    
    }
    
    Array.from(answerButtons.children).forEach(button => {
    
    if(button.dataset.correct === "true"){
    button.classList.add("correct");
    }
    
    button.disabled = true;
    
    });
    
    nextButton.style.display = "block";
    
    }
    
    function showScore(){
    
    resetState();
    
    questionElement.innerHTML = `Je had ${score} van de ${questions.length} goed!`;
    
    nextButton.innerHTML = "Opnieuw";
    
    nextButton.style.display = "block";
    
    }
    
    function handleNextButton(){
    
    currentQuestionIndex++;
    
    if(currentQuestionIndex < questions.length){
    
    showQuestion();
    
    }else{
    
    showScore();
    
    }
    
    }
    
    nextButton.addEventListener("click", ()=>{
    
    if(currentQuestionIndex < questions.length){
    
    handleNextButton();
    
    }else{
    
    startQuiz();
    
    }
    
    });
    
    startQuiz();z