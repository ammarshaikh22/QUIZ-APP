const Questions = [
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
]

let index = 0;
let total = Questions.length
let correct = 0;
let incorrect = 0;
let mainHead = document.getElementById('main-ques')
let options = document.querySelectorAll('.options')
const loadQuiz = () => {
    if(index == total){
        return result();
    }
    reset()
    let data = Questions[index]
    mainHead.innerText = `${index + 1}: ${data.ques}`
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d
}
const submitQuiz = () => {
    const data = Questions[index]
    const ans = getAns()
    if(ans === data.correct){
    correct++
    }else{
    incorrect++
    }
    index++
    loadQuiz()
    return
}
const getAns = () => {
    let answer
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value
            }

        }
    )
    return answer;
}
const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const result = () => {
    document.querySelector('.box').innerHTML = `
    <h3>Thank you for taking QUIZ</h3>
    <h4>Your result is ${correct} / ${total} </h4>
    <button onclick="location.reload()" id = "btn">Reload</button>
    `
}
const previousQuiz = () => {
    if(index == 0) return
    index--
    correct--
    incorrect--
    loadQuiz()
    return;
}


loadQuiz()