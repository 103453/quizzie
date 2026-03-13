const questions = [
    {
        question: "Welke vorm van extreem weer komt vaker voor door klimaatverandering?",
        answers: [
            { text: "Hittegolven", correct: true },
            { text: "Mist", correct: false },
            { text: "Lichte wind", correct: false },
            { text: "Bewolkt weer", correct: false }
        ]
    },
    {
        question: "Waarom worden hittegolven vaker en sterker?",
        answers: [
            { text: "Omdat de aarde gemiddeld warmer wordt", correct: true },
            { text: "Omdat de zon groter wordt", correct: false },
            { text: "Omdat de aarde langzamer draait", correct: false },
            { text: "Omdat de maan dichterbij komt", correct: false }
        ]
    },
    {
        question: "Wat kan er gebeuren als er in korte tijd extreem veel regen valt?",
        answers: [
            { text: "Overstromingen", correct: true },
            { text: "Kortere dagen", correct: false },
            { text: "Meer bergen", correct: false },
            { text: "Minder rivieren", correct: false }
        ]
    },
    {
        question: "Waarom kunnen regenbuien heviger worden door klimaatverandering?",
        answers: [
            { text: "Warme lucht kan meer waterdamp vasthouden", correct: true },
            { text: "De aarde draait sneller", correct: false },
            { text: "Er zijn minder wolken", correct: false },
            { text: "De zon staat dichter bij de aarde", correct: false }
        ]
    },
    {
        question: "Welke ramp kan ontstaan door langdurige hitte en droogte?",
        answers: [
            { text: "Bosbranden", correct: true },
            { text: "Sneeuwstormen", correct: false },
            { text: "Mist", correct: false },
            { text: "Hagelbuien", correct: false }
        ]
    },
    {
        question: "Wat gebeurt er vaak met droogtes door klimaatverandering?",
        answers: [
            { text: "Ze duren langer en worden heviger", correct: true },
            { text: "Ze verdwijnen helemaal", correct: false },
            { text: "Ze komen alleen in de winter", correct: false },
            { text: "Ze worden korter", correct: false }
        ]
    },
    {
        question: "Wat kan warm oceaanwater versterken?",
        answers: [
            { text: "Orkanen en tropische stormen", correct: true },
            { text: "Mist", correct: false },
            { text: "Lichte regen", correct: false },
            { text: "Sneeuw", correct: false }
        ]
    },
    {
        question: "Wat kan een combinatie van zware stormen en stijgende zeespiegel veroorzaken?",
        answers: [
            { text: "Kustoverstromingen", correct: true },
            { text: "Meer bergen", correct: false },
            { text: "Minder wind", correct: false },
            { text: "Kortere nachten", correct: false }
        ]
    },
    {
        question: "Welke van deze is GEEN extreem weer?",
        answers: [
            { text: "Normale zomerdag", correct: true },
            { text: "Hittegolf", correct: false },
            { text: "Orkaan", correct: false },
            { text: "Overstroming", correct: false }
        ]
    },
    {
        question: "Waarom is extreem weer gevaarlijk voor mensen?",
        answers: [
            { text: "Het kan schade, evacuaties en slachtoffers veroorzaken", correct: true },
            { text: "Het maakt dagen korter", correct: false },
            { text: "Het verandert de kleur van de lucht", correct: false },
            { text: "Het stopt de wind", correct: false }
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