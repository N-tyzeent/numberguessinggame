import React, { useRef, useState } from "react";
import "./Game.css";

const Game = () => {
  const [randomnumber, setRandomNumber] = useState(
    parseInt(Math.random() * 100) + 1
  );

  // console.log(randomnumber);

  const [submit, setSubmit] = useState("#submit");
  const [input, setInput] = useState("#guessInput");
  const [guess, setGuess] = useState(10);
  const [finalresult, setFinalResult] = useState("Play again");
  const [guessedresults, setGuessedResults] = useState(".guessedResults");
  const [lowhigh, setLowHigh] = useState(true);
  const [p, setP] = useState("p");
  const [previousguesses, setPreviousGuesses] = useState([]);
  const [guesses, setGuesses] = useState(1);
  const [game, setGame] = useState(true);

  const btnRef = useRef();

  return (
    <div className="container">
      <div>
        <h1>Number Guessing Game</h1>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        <div id="formContainer">
          <form
            action=""
            class="form"
            onSubmit={(e) => {
              e.preventDefault();

              if (guess < 2) {
                btnRef.current.disabled = true;
              }

              if (input == randomnumber) {
                console.log("You are right");
                setFinalResult("You are right");
              } else if (input > randomnumber) {
                setFinalResult("Too high");
              } else if (input < randomnumber) {
                setFinalResult("Too low");
              }

              if (input > randomnumber) {
                setLowHigh(false);
              } else if (input < randomnumber) {
                setLowHigh(true);
              }

              setPreviousGuesses([...previousguesses, input]);
              setGuess(guess - 1);

              console.log(btnRef.current.disabled);
            }}
          >
            <label htmlFor="guessInput" id="guessNumber">
              Guess a number
            </label>

            <input
              onChange={(e) => {
                // console.log(e.target.value);
                setInput(e.target.value);
              }}
              type="text"
              id="guessInput"
              class="guessInput"
            />
            <input
              ref={btnRef}
              type="submit"
              id="submit"
              value="Submit Guess"
              class="submitGuess"
            />
          </form>
          <div class="guessedResults">
            <p>
              <span> Previous Guesses: </span>

              {previousguesses.map((eachNumber) => {
                return <span>{`${eachNumber}, `}</span>;
              })}
            </p>{" "}
            <p>
              Guesses Remaining: <span class="finalResult">{guess}</span>
            </p>
            <p class="numbTooLowOrHigh"></p>
            {/* {lowhigh ? (
              <p className="lowhigh">Too low! Try again!</p>
            ) : (
              <p className="lowhigh">Too high! Try again!</p>
            )} */}
            {/* {randomnumber == input ? (
              <p className="lowhigh">You are right</p>
            ) : randomnumber > input ? (
              <p className="lowhigh">Too low! Try again!</p>
            ) : (
              <p className="lowhigh">Too high! Try again!</p>
            )} */}
            <p className="lowhigh">{finalresult}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
