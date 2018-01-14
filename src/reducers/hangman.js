import { GUESS } from '../actions/hangman'
import faker from 'faker'

const word = faker.hacker.noun()
const defaultTitle = "Welcome to Hangman"

// console.log(word);

const choices = {
  choicesLeft: 6,
  guesses: [],
  wordState: showGuess(word, []),
  titleText: defaultTitle
}

function wrongGuessCount(word, guesses) {
    return  guesses.filter(guess => word.indexOf(guess) === -1).length
}

function showGuess(word, guesses) {
  var arr = word.split("");
  var result = arr.map(letter => guesses.indexOf(letter) !== -1 ? letter : "_");
  return result.join(" ");
}

function isWinner(word, guesses) {
  return showGuess(word, guesses).replace(/\s/g,"") === word && wrongGuessCount(word, guesses) < 6
}

export default function (state = choices, {type, payload} = {}) {

  switch (type){
    case GUESS :
      if (state.guesses.indexOf(payload) === -1 && payload !== "") {

        // guesses.push(answer.trim());
        // console.log("player wrote:", payload)
        const newGuesses = [...state.guesses, payload]

        if (wrongGuessCount(word, newGuesses) >= 6) {

          // console.log(showGuess(word, newGuesses));  //return wordStte + choicesLeft
          // console.log( "You lost!!");
          document.getElementById("guessInput").disabled = true;
          return { ...state,
            guesses: newGuesses,
            wordState: showGuess(word, newGuesses),
            choicesLeft: 6 - wrongGuessCount(word, newGuesses),
            titleText: `You lost!! the word was ${word}`
          }
        }
        else if (isWinner(word, newGuesses)) {
          // console.log(showGuess(word, newGuesses));  //return wordState + choicesLeft
          // console.log( "You won!!");
          return { ...state,
            guesses: newGuesses,
            wordState: showGuess(word, newGuesses),
            titleText: "Hurray, you won!!"
          }
        }
        else {
          // console.log("Guessed:", showGuess(word, newGuesses))  //return wordstate
          // console.log("Chances left", 6 - wrongGuessCount(word, newGuesses) )  //return choicesLeft
            return { ...state,
              guesses: newGuesses,
              wordState: showGuess(word, newGuesses),
              choicesLeft: 6 - wrongGuessCount(word, newGuesses),
              titleText: defaultTitle
            }
        }

      }
      else{
            return {...state, titleText: "You already chose this letter before."}
          }
    default :
      return state
  }
}
