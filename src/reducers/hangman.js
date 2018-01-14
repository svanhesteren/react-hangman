import { GUESS } from '../actions/hangman'

const word = "hellooo"

const choices = {
  choicesLeft: 6,
  guesses: [],
  wordState: showGuess(word, [])
}

function wrongGuessCount(word, guesses) {
    return  guesses.filter(guess => word.indexOf(guess) == -1).length
}
// console.log("test wrong guesses: ", wrongGuessCount("hello", ["e", "d", "x", "o"]) === 2)

function inWord(word, letter){
  return word.indexOf(letter) != -1
}

function showGuess(word, guesses) {
  var arr = word.split("");
  var result = arr.map(letter => guesses.indexOf(letter) != -1 ? letter : "_");
  return result.join(" ");

}

// function next(word, guesses) {
//   // check if lost
//   if (wrongGuessCount(word, guesses) >= 6) {
//     console.log(showGuess(word, guesses));  //return wordStte + choicesLeft
//     console.log( "You lost!!");
//     return
//   }
//   // check if won
//   else if (isWinner(word, guesses)) {
//     console.log(showGuess(word, guesses));  //return wordState + choicesLeft
//     console.log( "You won!!");
//     return
//   }
//   else {
//     console.log("Guessed:", showGuess(word, guesses))  //return wordstate
//     console.log("Chances left", 6 - wrongGuessCount(word, guesses) )  //return choicesLeft
//
//     // ask for the next letter
//     // rl.question("next letter? ", answer => {
//     //     console.log("player wrote:", answer)
//     //
//     // if (guesses.indexOf(answer) == -1 && answer.trim() != "") {
//     //   guesses.push(answer.trim());
//     //     }
//     //
//     //     else{
//     //       console.log("You already chose this letter.")
//     //     }
//     //     next(word, guesses)
//     // })
//   }
// }

// console.log("test show guess 1:", showGuess("hello", ["l"]) === "_ _ l l _")
// console.log("test show guess 2:", showGuess("hello", ["l", "a", "e"]) === "_ e l l _")


function isWinner(word, guesses) {
  return showGuess(word, guesses).replace(/\s/g,"") == word && wrongGuessCount(word, guesses) < 6
}


export default function (state = choices, {type, payload} = {}) {

  switch (type){
    case GUESS :
      if (state.guesses.indexOf(payload) == -1 && payload != "") {
        // guesses.push(answer.trim());
        console.log("player wrote:", payload)
        const newGuesses = [...state.guesses, payload]

        if (wrongGuessCount(word, newGuesses) >= 6) {

          console.log(showGuess(word, newGuesses));  //return wordStte + choicesLeft
          console.log( "You lost!!");
          return { ...state,
            guesses: newGuesses,
            wordState: showGuess(word, newGuesses),
            choicesLeft: 6 - wrongGuessCount(word, newGuesses)
          }
        }
        else if (isWinner(word, newGuesses)) {
          console.log(showGuess(word, newGuesses));  //return wordState + choicesLeft
          console.log( "You won!!");
          return { ...state,
            guesses: newGuesses,
            wordState: showGuess(word, newGuesses)
          }
        }
        else {
          console.log("Guessed:", showGuess(word, newGuesses))  //return wordstate
          console.log("Chances left", 6 - wrongGuessCount(word, newGuesses) )  //return choicesLeft
            return { ...state,
              guesses: newGuesses,
              wordState: showGuess(word, newGuesses),
              choicesLeft: 6 - wrongGuessCount(word, newGuesses)
            }
        }

      }
      else{
            console.log("You already chose this letter.")
            return state
          }
    default :
      return state
  }
}
