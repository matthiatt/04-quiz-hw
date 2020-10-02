const highScoreList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//I know we weren't supposed to usse jQuery with this homework assignmnet, but a friend of mine showed me a unique way to have "map" to take an incoming array (highScores) and allows me to convert items into something new in a different/new array.  At the end I joined all the elements in an array with an empty string. Just wanted to try ssomething new to experiment!
highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">$(score.name)-$(score.score)</li>`;
})
.join("");