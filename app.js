const questions = [{
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': "Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': 'd',
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': 'b',
    }
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    console.log(data);
    quesbox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h2> Thank you for playing the Quiz </h2>
        <h2> ${right} / ${total} are correct </h2>
        </div>
    `
}

loadquestion();