
//Arrays and Variables for holding data 
var wordoptions = ["Daenerys", "Jon", "Cregor", "", "Cersei", "arya", "Tyrion", "Joffrey", "Sansa", "Khal"];
var selectedWord = "";
var lettersinWord = [];
numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions 
function startGame() {
    selectedWord = wordoptions[Math.floor(Math.random() * wordoptions.length)].toLowerCase();
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //change HTML to reflect round conditions
    document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



//   console.log(selectedWord);
//   console.log(lettersinWord);
//    console.log(numBlanks);
    console.log(blanksAndSuccesses);
};

function checkLetters(letter) {
    //check if letter exists in code at all
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss COunt: " + lossCount + " | Guesses Left: " + guessesLeft);

    //UPdate the HTML to reflect the most recent count stats
    document.getElementById("guesses").innerHTML = guessesLeft;
    document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    //check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won")

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    //check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }


}

startGame();


document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}

