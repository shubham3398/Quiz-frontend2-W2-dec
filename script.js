let sub = ["mathmatics", "physics", "chemistry", "history", "cs"];

let userAnswers = [];

let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            }
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            },
            {
                "question": "Who discover AC current?",
                "options": ["Albert Einstein", "Issac Newton", "Tesla", "F. Scott Fitzgerald"],
                "answer": "Tesla"
            }
            // more questions...
        ]
    },
    // more category...
];

let currentCategoryIndex = 0; // Keep track of the current category
let currentQuestionIndex = 0; // Keep track of the current question within a category
let userScore = 0; // Initialize the user's score

const startQuizButton = document.getElementById("startQuiz");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("user-score");
const popUp = document.getElementById("pop-up");
const enterQuiz = document.getElementById("enterQuiz");

enterQuiz.addEventListener("click", startQuiz);
//Todo
startQuizButton.addEventListener("click", showSubjectOptionPage);


// Retry quiz button
const retryButton = document.getElementById("retryButton");
retryButton.addEventListener("click", retryQuiz);

const previousButton = document.getElementById("previousButton")
previousButton.addEventListener("click", goToPreviousQuestion);

const skipButton = document.getElementById("skipButton");
skipButton.addEventListener("click", skipQuestion);

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", skipQuestion);

const end = document.getElementById("endQuiz");
end.addEventListener("click", goToHome);

function showSubjectOptionPage(){
    document.getElementById("hero-section").classList.add("d-none");
    popUp.classList.remove("d-none");
}



function startQuiz() {
    // Hide home section and show quiz section
    document.getElementById("hero-section").classList.add("d-none");
    popUp.classList.add("d-none");
    quizSection.classList.remove("d-none");

    // Display the first question
    displayQuestion();
}

function displayQuestion() {
    const currentCategory = quizData[currentCategoryIndex];
    const currentQuestion = currentCategory.questions[currentQuestionIndex];

    // Display the question text
    document.getElementById("question").textContent = currentQuestion.question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Display answer options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// function selectOption(index) {
//     const currentCategory = quizData[currentCategoryIndex];
//     const currentQuestion = currentCategory.questions[currentQuestionIndex];

//     // Check if the selected option is correct
//     if (currentQuestion.options[index] === currentQuestion.answer) {
//         userScore++;
//     }

//     // Move to the next question or category
//     if (currentQuestionIndex < currentCategory.questions.length - 1) {
//         currentQuestionIndex++;
//         displayQuestion();
//     } else if (currentCategoryIndex < quizData.length - 1) {
//         currentCategoryIndex++;
//         currentQuestionIndex = 0;
//         displayQuestion();
//     } else {
//         endQuiz();
//     }

//     // Update the displayed score
//     scoreElement.textContent = `Score: ${userScore}`;
// }

function selectOption(index) {
    const currentCategory = quizData[currentCategoryIndex];
    const currentQuestion = currentCategory.questions[currentQuestionIndex];

    // Check if the question has already been answered correctly
    const isQuestionAnsweredCorrectly = userAnswers.some(answer => answer.questionIndex === currentQuestionIndex && answer.categoryIndex === currentCategoryIndex);

    // If the question has not been answered correctly before, check the selected option
    if (!isQuestionAnsweredCorrectly) {
        // Check if the selected option is correct
        if (currentQuestion.options[index] === currentQuestion.answer) {
            userScore++;
        }

        // Store the user's selected answer
        userAnswers.push({
            categoryIndex: currentCategoryIndex,
            questionIndex: currentQuestionIndex,
            selectedOptionIndex: index
        });
    }

    // Move to the next question or category
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else if (currentCategoryIndex < quizData.length - 1) {
        currentCategoryIndex++;
        currentQuestionIndex = 0;
        displayQuestion();
    } else {
        endQuiz();
    }

    // Update the displayed score
    scoreElement.textContent = `Score: ${userScore}`;

    // Update the background color for selected option
    updateBackgroundColor(index);
}

function updateBackgroundColor(selectedOptionIndex) {
    const optionsButtons = optionsContainer.querySelectorAll('button');

    // Reset background color for all options
    optionsButtons.forEach((button, index) => {
        button.style.backgroundColor = '';
    });

    // Apply background color to the selected option
    optionsButtons[selectedOptionIndex].style.backgroundColor = 'blue';
}

function endQuiz() {
    userAnswers = [];
    //make subjects unmark
    sub.forEach((subject) =>{
        document.getElementById(subject).checked = false;
    })
    //
    // Hide quiz section and show results section
    quizSection.classList.add("d-none");
    resultsSection.classList.remove("d-none");

    // Display final score
    finalScoreElement.textContent = userScore;
}

function goToHome(){
    document.getElementById("hero-section").classList.remove("d-none");
    resultsSection.classList.add("d-none");
    console.log("go to Home");
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    } else if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        currentQuestionIndex = quizData[currentCategoryIndex].questions.length - 1;
        displayQuestion();
    }
}

function skipQuestion() {
    // Move to the next question or category without updating the score
    if (currentQuestionIndex < quizData[currentCategoryIndex].questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else if (currentCategoryIndex < quizData.length - 1) {
        currentCategoryIndex++;
        currentQuestionIndex = 0;
        displayQuestion();
    } else {
        endQuiz();
    }
}



function retryQuiz() {
    // Reset variables
    currentCategoryIndex = 0;
    currentQuestionIndex = 0;
    userScore = 0;

    // Hide results section and show quiz section
    resultsSection.classList.add("d-none");
    quizSection.classList.remove("d-none");

    // Display the first question
    displayQuestion();
}
