const quizDB = [{
        question: "Q1.what is the full form of HTML?",
        a: "Hello To Markup Language ",
        b: "Hey Text Markup Language ",
        c: "HyperText Makeup Language ",
        d: "HyperText Markup Language ",
        ans: "ans4"
    },
    {
        question: "Q2.what is the full form of CSS?",
        a: "Cascading Style Sheets ",
        b: "Cascading Style Sheep ",
        c: "CartoonStyle Sheets ",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3.what is the full form of HTTP?",
        a: "HyperText Transfer Product ",
        b: "Hey Text Markup Language ",
        c: "Hey Transfer Protocol ",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4.what is the full form of JS?",
        a: "Jason ",
        b: "jquery ",
        c: "Java Script",
        d: "Java sheet ",
        ans: "ans3"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {


        showScore.innerHTML = `
            <h3>your ${score}/${quizDB.length}</h3>
            <button class="btn" onClick="location.reload()">RETRY</button>
            `;

        showScore.classList.remove('scoreArea');
    }



});