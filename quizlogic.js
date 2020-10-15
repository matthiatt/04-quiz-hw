const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function quizBuild(){}
function showResults(){}

//The quiz here must be displayed right away
quizBuild();

//Once the submit button is push/activated - then results will show
submitButton.addEventListener("click", showResults);

//Next, after I built my basic structure of my quiz, I must structure the logic I want displayed in question format.
const myQuestions = [
    {
      question: "What is the highest-grossing film of all time without taking inflation into account?",
      answers: {
        a: "Titanic",
        b: "Avengers: Endgame",
        c: "Star Wars: The Force Awakens",
        d: "Avatar"
      },
      correctAnswer: "b"
    },
    {
      question: "Which film did Steven Spielberg win his first Oscar for Best Director?",
      answers: {
        a: "Jaws",
        b: "Catch Me If You Can",
        c: "Schindler’s List",
        d: "E.T."
      },
      correctAnswer: "c"
    },
    {
      question: "What is the name of Quint’s shark-hunting boat in Jaws?",
      answers: {
        a: "The Whale",
        b: "The Orca",
        c: "The Shark",
        d: "The Dolphin"
      },
      correctAnswer: "b"
    },
    {
      question: "What short film featured Mickey Mouse’s first appearance?",
      answers: {
        a: "Plane Crazy",
        b: "Wild Waves",
        c: "The Band Concert",
        d: "The Barnyard Concert"
      },
      correctAnswer: "a"
    },
    {
      question: "As the Disney princess with the fewest lines, how many lines did Aurora (or “Sleeping Beauty”) have in total?",
      answers: {
        a: "11",
        b: "15",
        c: "18",
        d: "20"
      },
      correctAnswer: "c"
    }
  ];

//Next, I am showing HOW the list of questions will be displayed on the web-page.
function quizBuild() {
}
var output = [];
var questionNumber = 1;
myQuestions.forEach(function(currentQuestion) {
        const answers = [];
        for (var letter in currentQuestion.answers) {
            answers.push( 
                `<label>
                    <input type="radio" name="questions${questionNumber}" value = "${letter}">${letter}</input> :
                    ${currentQuestion.answers[letter]}
                <label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          ); questionNumber++;
    });


//Next, since I generated the whole HTML concept for each question, I am going to join everything together and display it on the page.
quizContainer.innerHTML = output.join('');

//Now I need to be able to show my results based on the function loop and check them.

function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightblue';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
const answerContainers = quizContainer.querySelectorAll('.answers');

//Tracks the user's answers
let numCorrect = 0;