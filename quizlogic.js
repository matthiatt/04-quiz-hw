var questionBody = document.getElementById("questionContents");
var startButton = document.getElementById("start");
var questionsElement = document.getElementById("questions");
var timerElement = document.getElementById("timer");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var buttonlbl1 = document.getElementById("lbl-button1");
var buttonlbl2 = document.getElementById("lbl-button2");
var buttonlbl3 = document.getElementById("lbl-button3");
var buttonlbl4 = document.getElementById("lbl-button4");
var score = 0;
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
  var divFinal = document.getElementById("div-Final");
  var finalScoreScreen = document.getElementById("lbl-finalscore");
  clearInterval(timerId);
  finalScoreScreen.innerText = "Your final score is " + score;
  questionBody.setAttribute("class", "hidden");
  divFinal.removeAttribute("class");
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
  var initials = document.getElementById("txt-Initials").value;
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: score,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    // This redirect is used to display highscores.
    // window.location.href = "highscores.html";
    var divFinal = document.getElementById("div-Final");
    var homeLink = document.getElementById("home");
    divFinal.setAttribute("class", "hidden");
  } else {
    var errorText = document.getElementById("lbl-error");
    errorText.innerText = "Please enter your initials to submit your quiz.";
  }
}

function check(event) {
  if (event.keyEvent === "Enter") {
    saveHighscore();
  }
}
