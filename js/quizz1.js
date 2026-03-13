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
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    ];
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
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
        } else{
            selectedBtn.classList.add("incorrect");
        }
    
        Array.from(answerButtons.children).forEach(button =>{
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
        } else{
            showScore();
        }
    }
    
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        } else{
            startQuiz();
        }
    });
    
    startQuiz();