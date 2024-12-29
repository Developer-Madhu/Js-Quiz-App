const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2,
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1,
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
        answer: 0,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
    },
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultsEl = document.getElementById("results");
const scoreEl = document.getElementById("score");
const starsEl = document.getElementById("stars");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectOption(index));
        optionsEl.appendChild(li);
    });
}

function selectOption(index) {
    const options = document.querySelectorAll(".options li");
    options.forEach((option) => option.classList.remove("selected"));
    options[index].classList.add("selected");
    selectedOption = index;
}

function submitAnswer() {
    if (selectedOption === null) {
        alert("Please select an option!");
        return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    selectedOption = null;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    resultsEl.style.display = "block";
    scoreEl.textContent = score;

    starsEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        if (i >= score) {
            star.classList.add("inactive");
        }
        starsEl.appendChild(star);
    }
}

submitBtn.addEventListener("click", submitAnswer);

loadQuestion();