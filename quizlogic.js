var body = document.body;
var questionBody = document.getElementById("questionContents");
var displayScore = document.getElementById("score");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var startButton = document.getElementById("start");
var questionsElement = document.getElementById("questions");
var submitButton = document.getElementById("submit");
var timerElement = document.getElementById("timer");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var buttonlbl1 = document.getElementById("lbl-button1");
var buttonlbl2 = document.getElementById("lbl-button2");
var buttonlbl3 = document.getElementById("lbl-button3");
var buttonlbl4 = document.getElementById("lbl-button4");
var initialsHighScore = document.getElementById("initialsHighScore");
var secondsLeft = 10;
var questionTracker = 0;
var allScores = [];
var count = 40;
var score = 0;
var currentQuestion = 0;
var countDownTimer;
var time = 45;
var timerId;
var myQuestionsIndex = 0;
var myQuestions = [
  {
    question:
      "What is the highest-grossing film of all time without taking inflation into account?",
    answers: {
      a: "Titanic",
      b: "Avengers: Endgame",
      c: "Star Wars: The Force Awakens",
      d: "Avatar",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which film did Steven Spielberg win his first Oscar for Best Director?",
    answers: {
      a: "Jaws",
      b: "Catch Me If You Can",
      c: "Schindler’s List",
      d: "E.T.",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the name of Quint’s shark-hunting boat in Jaws?",
    answers: {
      a: "The Whale",
      b: "The Orca",
      c: "The Shark",
      d: "The Dolphin",
    },
    correctAnswer: "b",
  },
  {
    question: "What short film featured Mickey Mouse’s first appearance?",
    answers: {
      a: "Plane Crazy",
      b: "Wild Waves",
      c: "The Band Concert",
      d: "The Barnyard Concert",
    },
    correctAnswer: "a",
  },
  {
    question:
      "As the Disney princess with the fewest lines, how many lines did Aurora (or “Sleeping Beauty”) have in total?",
    answers: {
      a: "11",
      b: "15",
      c: "18",
      d: "20",
    },
    correctAnswer: "c",
  },
];

function startQuiz() {
  questionBody.removeAttribute("class");
  timerId = setInterval(timingInterval, 1000);
  timerElement.textContent = time;
  getQuestion();
  startButton.setAttribute("class", "hidden");
}

function getQuestion() {
  var cQuestion = myQuestions[myQuestionsIndex];

  buttonlbl1.innerText = cQuestion.answers.a;
  buttonlbl2.innerText = cQuestion.answers.b;
  buttonlbl3.innerText = cQuestion.answers.c;
  buttonlbl4.innerText = cQuestion.answers.d;

  questionsElement.textContent = cQuestion.question;
}

function questionClick() {
  var userAnswer = getAnswer();
  var errorText = document.getElementById("lbl-error");
  errorText.innerText = "";
  if (userAnswer === "") {
    errorText.innerText = "Please select an answer.";
  } else {
    if (userAnswer !== myQuestions[myQuestionsIndex].correctAnswer) {
      time -= 3;
      if (time <= 0) {
        errorText.innerText = "Time has expired, SLOW, so sad";
        quizEnd();
        time = 0;
      }
      timerElement.textContent = time;
    } else {
      score++;
    }

    myQuestionsIndex++;

    if (myQuestionsIndex === myQuestions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
}

function getAnswer() {
  var radios = document.getElementsByName("btnChoice");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
      return radios[i].value;
    }
  }

  return "";
}

function quizEnd() {
  clearInterval(timerId);

  var finalScoreScreen = document.getElementById("finalScore");
  finalScoreScreen.textContent = "Your final score is " + score;

  questionBody.setAttribute("class", "hidden");
  submitButton.removeAttribute("class");
}

function timingInterval() {
  time--;
  timerElement.textContent = time;
  if (time <= 0) {
    var errorText = document.getElementById("lbl-error");
    errorText.innerText = "Time has expired, SLOW, so sad";
    quizEnd();
  }
}

function saveHighscore() {
  var initials = initialsHighScore;
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

function check(event) {
  if (event.keyEvent === "Enter") {
    saveHighscore();
  }
}

// initialsEl.onkeyup = check;
// display new time on page    timerElement.textContent = time;
//   function nextQuestion() {
//   for (i = 0; i < myQuestions.length; i++) {
//     body.innerHTML = "<p>" + myQuestions[currentQuestion].question + "</p>";
//     // button1.
//     textContent = myQuestions[currentQuestion].answers.a;
//     // button2.
//     textContent = myQuestions[currentQuestion].answers.b;
//     // button3.
//     textContent = myQuestions[currentQuestion].answers.c;
//     // button4.
//     textContent = myQuestions[currentQuestion].answers.d;
// }
//   }
//   nextQuestion();

// function renderQuestion() {
//   var i = currentQuestion;
//   body.innerHTML = "<p>" + myQuestions[i].question + "</p>";
//   button1.textContent = myQuestions[i].answers.a;
//   button2.textContent = myQuestions[i].answers.b;
//   button3.textContent = myQuestions[i].answers.c;
//   button4.textContent = myQuestions[i].answers.d;
// }
// renderQuestion();

// var answers = [];
// for (var letter in currentQuestion.answers)
//     {
//         answers.push(
//             `<label>
//                 <input type="radio" name="questions${questionNumber}" value = "${letter}">${letter}</input> :
//                 ${currentQuestion.answers[letter]}
//             </label>`
//         );
//     }

//     output.push(
//         `<div id="quizAnswerAndQuestion${questionNumber}" style = "display: none">
//         <div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>
//         </div>`
//       ); questionNumber++;
// });
//   document.getElementById("quizAnswerAndQuestion" + questionTracker ).style.display = "none";
//   questionTracker++;
//   document.getElementById("quizAnswerAndQuestion" + questionTracker ).style.display = "block";
// questionTracker.foreachQuestion(myQuestions);
// output.push(
//       `<div id="quizAnswerAndQuestion${questionNumber}" style = "display: none">`
// var q1 = document.getElementById("question1").innerHTML += index;
//Use question tracker to hide current <div id="quizAnswerAndQuestion${questionNumber}">
// incriment questionTracker by 1
// use questionTracker to show new current div
// ); questionTracker++;
// }

//Next, since I generated the whole HTML concept for each question, I am going to join everything together and display it on the page.
// quizContainer.innerHTML = output.join('');

//Now I need to be able to show my results based on the function loop and check them.

// function showResults()
// {
//     var answerContainers = quizContainer.querySelectorAll('.answers');
//     var numCorrect = 0;
//     for (var i = 0; i < myQuestions.length; i++);

//     function myQuestions(currentQuestion, questionNumber)
//     {

//       var selector = `input[name='questions${questionNumber}']:checked`;
//       var userAnswer = document.querySelector(selector);
//       if(userAnswer.value === currentQuestion.correctAnswer)
//       {
//         numCorrect++;
//         score++;
//         userAnswer.parentElement.style.color = 'lightblue';
//       }
//       else
//       {
//         userAnswer.parentElement.style.color = 'red';
//       }
//     }

//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }
//The quiz here must be displayed right away
// quizBuild();

// Ask tutor why this is not working.

// function setTime()
// {

//   var timerInterval = setInterval(function()
//   {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left to answer the question.";

//     if(secondsLeft === 0)
//     {
//       clearTime(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage()
// {
//   timeEl.textContent = "Time is up, try again!";

//   var pEl = document.createElement("p");
//   mainEl.appendChild(pEl);

// }

// setTime();

// function scoreboard() {

// }
