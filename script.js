const quizData = [
    {
        question: 'What is the capital city of Czech Republic?',
        a: 'Prague',
        b: 'Brno',
        c: 'Liberec',
        d: 'Pilsen',
        correct: 'a'
    }, {
        question: 'What is approximately the population of Czech Republic?',
        a: '14 mil',
        b: '12 mil',
        c: '10 mil',
        d: '8 mil',
        correct: 'c'
    }, {
        question: 'Who is the president of Czech Republic?',
        a: 'Václav Havel',
        b: 'Miloš Zeman',
        c: 'Václav Klaus',
        d: 'Gustav Husák',
        correct: 'b'
    }, {
        question: 'Who was the first president of Czechoslovakia? This man has a statue in Uzgorod.',
        a: 'Tomáš Garrigue Masaryk',
        b: 'Edward Beneš',
        c: 'Jára Cimrman',
        d: 'Emil Hácha',
        correct: 'a'
    }, {
        question: 'Which year and in which city did Czech Republic won olympic games in hockey in so called tournament of the century?',
        a: 'Albertville 1992',
        b: 'Lillehammer 1994',
        c: 'Nagano 1998',
        d: 'Salt lake city 2002',
        correct: 'c'
    }
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit-btn')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    
}

function getSelected() {

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;  

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly to ${score} out of ${quizData.length} questions. Congratulation!</h2> <button class="btn-grad" onclick="location.reload()">Reload</button>`
        }
    }


    
        
    

    

   
})