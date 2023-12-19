const ques = [
    {
        'ques': 'Who is the father of JavaScript?',
        'a': 'Brendan Eich',
        'b': 'James Gosling',
        'c': 'Dennis Ritchie',
        'd': 'Guido van Rossum',
        'correct': 'd'
    },
    {
        'ques': 'What is the full form of HTML?',
        'a': 'HyperText Markup Language',
        'b': 'Hypertext Markup Language',
        'c': 'Hypertext Markdown Language',
        'd': 'Hypertext Markdown Language',
        'correct': 'b'
    },
    {
        'ques': 'What is the full form of CSS?',
        'a': 'Cascading Style Sheets',
        'b': 'Cascading Super Sheet',
        'c': 'Cascading Style Sheet',
        'd': 'Cascading Super Sheet',
        'correct': 'c'
    },
    {
        'ques': 'What is the full form of PHP?',
        'a': 'Hypertext Preprocessor',
        'b': 'Hypertext Programming',
        'c': 'Hypertext Preprogramming',
        'd': 'Hometext Preprocessor',
        'correct': 'a'
    },
    {
        'ques': 'What is the full form of SQL?',
        'a': 'Stylish Question Language',
        'b': 'Stylesheet Query Language',
        'c': 'Statement Question Language',
        'd': 'Structured Query Language',
        'correct': 'd'
    },
    {
        'ques': 'What is the full form of XML?',
        'a': 'eXtensible Markup Language',
        'b': 'eXecutable Multiple Language',
        'c': 'eXamine Multiple Language',
        'd': 'eXecutable Multiple Language',
        'correct': 'a'
    }
]
let index = 0;
let total = ques.length;
let correct = 0;
let incorrect = 0;
let quesBox = document.getElementById('quesBox');
let getOptions = document.querySelectorAll('.options');
const loadQues = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = ques[index]
    quesBox.innerText = `${index + 1}: ${data.ques}`
    document.getElementById('')
    getOptions[0].nextElementSibling.innerText = data.a
    getOptions[1].nextElementSibling.innerText = data.b
    getOptions[2].nextElementSibling.innerText = data.c
    getOptions[3].nextElementSibling.innerText = data.d
}
const submitQuiz = () => {
    const data = ques[index]
    const ans = getAns()
    if (ans === data.correct) {
        correct++
    } else {
        incorrect++
    }
    index++
    loadQues()
    return;
}

const getAns = () => {
    let answer;
    getOptions.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value
            }
        }
    )
    return answer
}

const reset = () => {
    getOptions.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.querySelector('.box').innerHTML = `
    <h3>Thank You for playing quiz</h3>
    <h4>You scored ${correct} / ${total} </h4>
    `
}
loadQues()
