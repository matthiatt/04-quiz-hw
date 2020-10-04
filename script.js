//list of raw variables
var time = questions.length * 10;
var timerId;
var startIndex = 0;
var scoreText;
var score = 0;;
//Varables ref DOM elements
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//local storage even process code and scoring process
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScores = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("")

score = {
    //score: mostRecentScore,
    score: Math.floor(Math.random()*100),
    name: username.value
};
highScores.push(score);

//returning a sorted score based on highest to lowest. Putting B before A. No return becuase the arrow is there.
highScores.sort( (a,b) => b.score - a.score)

//splicing with 5 scores in reference to "const maxHighScores"
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));

//learned this command to clear everything out and return back to the homepage with no data of scores
window.location.assign("/");

console.log(highScores);

//var elements
var questionsE1 = document.getElementById("question");
var timeE1 = document.getElementById("timer");
var buttonE1 = document.getElementById("submit");
var startE1 = document.getElementById("start");


//------------------------------------

//function populate() {
    //if(quiz.isEnded()) {
        //showScores();
    //}
    //else {
        //Show question
        //var element = document.getElementById("question");
        //element.innerHTML = quiz.getQustionIndex().text;
    //}

//}

//first set of question array's I thought of, how to structure it.
//var questions = [
    //{
       // title:"xx",
      //  choices:["x", "v", "y", "z"], 
      //  answer:"z"
    //},
   // {
      //  title:"xx", 
      //  choices:["x", "v", "y", "z"], 
       // answer:"z"
    //},
    //{
       // title:"xx", 
       // choices:["x", "v", "y", "z"], 
       // answer:"z"
   // },
    //{
        //title:"xx", 
        //choices:["x", "v", "y", "z"], 
       // answer:"z"
   // },
    //{
        //title:"xx", 
        //choices:["x", "v", "y", "z"], 
        //answer:"z"
    //}
//];

//var quiz = new quiz(questions);

//populate();