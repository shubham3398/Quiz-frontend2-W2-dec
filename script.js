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
                "question": "In which year did the Titanic sink?",
                "options": ["1912", "1905", "1923", "1931"],
                "answer": "1912"
            },
            {
                "question": "What is the capital of France?",
                "options": ["Berlin", "London", "Paris", "Madrid"],
                "answer": "Paris"
            },
            {
                "question": "Which planet is known as the 'Red Planet'?",
                "options": ["Earth", "Mars", "Venus", "Jupiter"],
                "answer": "Mars"
            }
            // Add more questions for the General Knowledge category...
        ]
    },
    {
        "category": "Science",
        "questions": [
            {
                "question": "What is the chemical symbol for water?",
                "options": ["H2O", "CO2", "O2", "NaCl"],
                "answer": "H2O"
            },
            {
                "question": "Who developed the theory of relativity?",
                "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
                "answer": "Albert Einstein"
            },
            {
                "question": "What is the largest planet in our solar system?",
                "options": ["Mars", "Jupiter", "Saturn", "Neptune"],
                "answer": "Jupiter"
            },
            {
                "question": "Which gas do plants absorb from the atmosphere?",
                "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                "answer": "Carbon Dioxide"
            }
            // Add more questions for the Science category...
        ]
    },
    {
        "category": "Mathematics",
        "questions": [
            {
                "question": "What is the value of π (pi) to two decimal places?",
                "options": ["3.14", "2.71", "1.62", "4.20"],
                "answer": "3.14"
            },
            {
                "question": "Solve the equation: 2x + 5 = 15",
                "options": ["5", "7", "10", "20"],
                "answer": "5"
            },
            {
                "question": "What is the square root of 64?",
                "options": ["8", "6", "10", "4"],
                "answer": "8"
            },
            {
                "question": "If a = 3 and b = 4, what is the value of a² + b²?",
                "options": ["25", "16", "9", "13"],
                "answer": "25"
            }
            // Add more questions for the Mathematics category...
        ]
    },
    {
        "category": "About Me",
        "questions": [
            {
                "question": "What is the name of the language model that powers this quiz application?",
                "options": ["GPT-2", "GPT-3", "BERT", "ELMo"],
                "answer": "GPT-3"
            },
            {
                "question": "In which year was the language model GPT-3 released?",
                "options": ["2018", "2019", "2020", "2021"],
                "answer": "2020"
            },
            {
                "question": "Which organization developed the GPT-3 language model?",
                "options": ["Google", "Facebook", "OpenAI", "Microsoft"],
                "answer": "OpenAI"
            },
            {
                "question": "How many parameters does GPT-3 have?",
                "options": ["1 million", "10 million", "175 billion", "500 billion"],
                "answer": "175 billion"
            }
            // Add more questions about me...
        ]
    },
    {
        "category": "History",
        "questions": [
            {
                "question": "In which year did World War I begin?",
                "options": ["1914", "1917", "1919", "1922"],
                "answer": "1914"
            },
            {
                "question": "Who was the first President of the United States?",
                "options": ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                "answer": "George Washington"
            },
            {
                "question": "Which ancient civilization built the pyramids of Giza?",
                "options": ["Mayans", "Romans", "Egyptians", "Greeks"],
                "answer": "Egyptians"
            },
            {
                "question": "In which year did the Titanic sink?",
                "options": ["1912", "1905", "1923", "1931"],
                "answer": "1912"
            }
            // Add more questions for History...
        ]
    },
    {
        "category": "Geography",
        "questions": [
            {
                "question": "What is the capital of Australia?",
                "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
                "answer": "Canberra"
            },
            {
                "question": "Which river is the longest in the world?",
                "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                "answer": "Nile River"
            },
            {
                "question": "Which country is known as the 'Land of the Rising Sun'?",
                "options": ["China", "Japan", "South Korea", "Vietnam"],
                "answer": "Japan"
            },
            {
                "question": "What is the largest desert in the world?",
                "options": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
                "answer": "Antarctica"
            }
            // Add more questions for Geography...
        ]
    },
    {
        "category": "Technology",
        "questions": [
            {
                "question": "Who co-founded Apple Inc. along with Steve Jobs?",
                "options": ["Tim Cook", "Bill Gates", "Steve Wozniak", "Mark Zuckerberg"],
                "answer": "Steve Wozniak"
            },
            {
                "question": "What does the acronym 'URL' stand for?",
                "options": ["Universal Resource Locator", "Uniform Resource Locator", "Unified Resource Locator", "Ultra Rapid Language"],
                "answer": "Uniform Resource Locator"
            },
            {
                "question": "Which programming language is often used for building web pages?",
                "options": ["Java", "Python", "HTML", "C++"],
                "answer": "HTML"
            },
            {
                "question": "What is the term for a small piece of code that enhances a web page's functionality?",
                "options": ["Snippet", "Widget", "Plugin", "Script"],
                "answer": "Script"
            }
            // Add more questions for Technology...
        ]
    }
    // Add more categories...
];

let questions = [];
let index = 0;

let studentAnswer = {};
const menuButton = document.querySelector(".menuButton")
const form = document.querySelector(".category");
const startQuiz = document.getElementById("startQuiz");
const home = document.getElementById("hero-section");
const questionContainer = document.querySelector(".questions");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const submit = document.querySelector(".submit");
const optionForm = document.getElementById("select-option");
const userScore = document.getElementById("user-score");
const resultSection = document.getElementById("results-section");

let categories = quizData.map((item) => item.category);
menuButton.style.cursor = "pointer";

categories.forEach((item) => {
    form.innerHTML += `<input type="checkbox" value="${item}" id="${item}">
    <label for="${item}">
        <span>${item}</span>
        <span class="material-icons unselect">close</span>
    </label>`;
});

function toggleMenu(e){
    const menu = document.getElementById("menu");
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
}

function showPopUp(e){
  const popup = document.getElementById("pop-up");
    popup.style.display = "flex";
}
function closePopUp(){
    const popup = document.getElementById("pop-up");
    popup.style.display = "none";
    form.reset();
}

function showQuestions(e){
    e.preventDefault();
    //save selected categories
    let selectedCategory = new Set();

    let allCategory = document.querySelectorAll(".category input");
    allCategory.forEach((category) => {
        if(category.checked === true){
            selectedCategory.add(category.value);
        }   
    });

    if(selectedCategory.size < 5){
        alert("Select atleast 3 categories");
    }else{
        //fill the selected category question in questions array
        let selected = quizData.map((item) => {
            if(selectedCategory.has(item.category)){
                questions.push(...item.questions);
            }
        });
        closePopUp();
        openQuestions();
    }
}
function saveAnswer(e){
    let selectedAnswer = e.target.innerText;
    studentAnswer[index] = selectedAnswer;
}

function openQuestions() {
    home.style.display = "none";
    questionContainer.style.display = "flex";

    let question = questions[index];
    const title = document.querySelector(".questions > .question");
    title.textContent = question["question"];

    //now set the options
    const lebelforA = document.querySelector("#A + label");
    console.log(question.options[0]);
    lebelforA.textContent = question.options[0];
    lebelforA.addEventListener("click", saveAnswer);

    const lebelforB = document.querySelector("#B + label");
    lebelforB.textContent = question.options[1];
    lebelforB.addEventListener("click", saveAnswer);
    
    const lebelforC = document.querySelector("#C + label");
    lebelforC.textContent = question.options[2];
    lebelforC.addEventListener("click", saveAnswer)

    const lebelforD = document.querySelector("#D + label");
    lebelforD.textContent = question.options[3];
    lebelforD.addEventListener("click", saveAnswer); 
}


form.addEventListener("submit", showQuestions);
startQuiz.addEventListener("click", showPopUp);

menuButton.addEventListener("click", toggleMenu);

previous.addEventListener("click", function(e){
    if(index === 0) return;
    index--;
    optionForm.reset();
    openQuestions();
});

next.addEventListener("click", function(e){
    if(index === questions.length - 1) return;
    index++;
    optionForm.reset();
    openQuestions();
});

submit.addEventListener("click", function(e) {
    let score = 0;

    for(let questionNo in studentAnswer){
        if(questions[questionNo].answer === studentAnswer[questionNo]){
            score++;
        }
    }

    home.style.display = "flex";
    questionContainer.style.display = "none";
    optionForm.reset();
    userScore.textContent = score;
    toggleResultSection();
});

function toggleResultSection(){
    if(resultSection.style.display === "none"){
        resultSection.style.display = "flex";
    }else{
        resultSection.style.display = "none";
    }
}




