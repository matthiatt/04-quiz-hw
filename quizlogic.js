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
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

//Next, I am showing HOW the list of questions will be displayed on the web-page.
function quizBuild(){
    const output = [];
}  

myQuestions.forEach(
    currentQuestion, questionNumber); {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                <label>
                    <input type="radio" name="questions${questionNumber}" value = "${letter}">${letter}</input> :
                    ${currentQuestion.answers[letter]}
                </label>
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
    }

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