const quizData = [
    {
        question: "Over the last two weeks, how often have you felt down, depressed, or hopeless?",
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: "On a scale from 1 to 10, how would you rate your overall stress level in the past month?",
        a: "Very Low (0-3)",
        b: "Low (3-5)",
        c: "Moderate (5-8)",
        d: "High (8-10)",
        correct: "a",
    },
    {
        question: "How satisfied are you with your life as a whole?",
        a: "Not At All",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly every day",
        correct: "a",
    },
    {
        question: "How often do you feel you have someone to talk to about your problems?",
        a: "Always",
        b: "Sometimes",
        c: "Occasionally",
        d: "Rarely or Never",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

let arr = []
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
    //    if(answer === quizData[currentQuiz].correct) {
    //        score++
    //    }
        if(answer === "a"){
            arr.push(10);
        }else if(answer === "b"){
            arr.push(7);
        }else if(answer === "c"){
            arr.push(4);
        }else{
            arr.push(1);
        }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
            let sum = 0; let speak = "";
            for (let num of arr) {
                sum += num;
            }
            
            if(sum >= 25 && sum < 40){
            speak = "You are doing great! keep sailing";
            }else if(sum >= 15 && sum < 25){
            speak = "Hold Tight";
            }else if(sum >= 5 && sum < 15){
            speak = "We are with you <3";
            }else{
            speak = "Kindly consult a doctor";
            }
           quiz.innerHTML = `
           <h2> Your pyschometric score is ${sum}/${quizData.length*10} </h2>
           <h3 class = "prescribe">${speak}</h3>
           <button onclick="location.reload()">Take the test again</button>
           `
           

           console.log(arr);

       }
    }
})