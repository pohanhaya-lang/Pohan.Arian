let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

function startQuiz(){

let subject = document.getElementById("subject").value;

selectedQuestions = questions[subject];

currentQuestion = 0;
score = 0;

showQuestion();

}

function showQuestion(){

let q = selectedQuestions[currentQuestion];

let html = "<h2>"+q.question+"</h2>";

for(let i=0;i<q.answers.length;i++){

html += "<button onclick='checkAnswer("+i+")'>"
+ q.answers[i] +
"</button><br><br>";

}

document.getElementById("quiz").innerHTML = html;

}

function checkAnswer(i){

if(i === selectedQuestions[currentQuestion].correct){

score++;

}

nextQuestion();

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < selectedQuestions.length){

showQuestion();

}else{

document.getElementById("quiz").innerHTML = "Quiz Finished";
document.getElementById("result").innerText = "Score: " + score;

}

}
