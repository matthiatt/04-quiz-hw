//1.) get questions to work first - reference: LookMaNoHTML VSCode, tip: appending into HTML
//2.) get the scores and other var's to work in suite
//3.) get the time to work
//-------------------------------------------------------------------------------------------------------------------
//Declare function .timeEL - call Jquary
//Declare function global var's - userscore, container, high-score, 
//Button with toggle(logic) to start quiz and timer.
//Quiz timer starts - setInterval(sumFunction, seconds*1000) 
//Declare sumFunction [array of object(s)] - questions, options, and/or [booleans]: Each question is an object, its on set of {}
//Append elements in array based on index
//Array starts - indentify for loop, i>x, i++. (doesnt have to be ">" symbol) Use == to have a True or false anwser.
//--------------------------------------------------------------------------------------------------------------------

// Declare global var: correct, wrong, container, highscore, time

// When webpage loads, want to see view highscores, timer, score, and intro page
// Declare toggle function to change intro to quiz display & trigger timer via start button
    // toggle .add("hide")/.remove("hide")

// Timer starts --> setInterval(someFunction, seconds*1000)

// Declare someFunction
    // Declare array of objects (rep questions) consisting of options & boolean

    // Loop through array --> for (var i=0; i<array.length; i++) {
        // One Question
        // Use If/else
        // userScore ++/--