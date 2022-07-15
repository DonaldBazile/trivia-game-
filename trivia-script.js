const questions = {
    "questions": [
        {
            "question": "Elon Musk bought Apple in 2022.",
            "answer": false
        },
        {
            "question": "The capital of Florida is Miami.",
            "answer": false
        },
        {
            "question": "The capital of California is Sacramento.",
            "answer": true
        },
        {
            "question": "The United States was founded in 1998.",
            "answer": false
        },
        {
            "question": "Albert Einstein is Magician.",
            "answer": false
        },
        {
            "question": "The inventor of the first computer is Alan Turing.",
            "answer": true
        },
        {
            "question": "It takes a sloth two weeks to digest its food.",
            "answer": true
        },
        {
            "question": "A cow gives nearly 200,000 glasses of milk in a lifetime.",
            "answer": true
        },
        {
            "question": "Lebron James won 1 championship in collage.",
            "answer": false
        },
        {
            "question": "Patrick Mahomes plays for the Miami Dolphins.",
            "answer": false
        }
    ]
    
}

const question = document.getElementById('question')

let playerScore = 0
let questionIndex = 0
let didReachLastQuestion = false
question.innerText = questions.questions[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
        let playerScorePercent = (playerScore / questions.questions.length) * 100
        const yourFinalScore = `You get a ${playerScorePercent} % Score 😎`
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    playerScorePercent = 0
    questionIndex = Math.floor(Math.random() * questions.questions.length)
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
    
}
