# Rock-Paper-Scissors Game

This is a simple JavaScript implementation of the classic **Rock-Paper-Scissors** game. The game is built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Features

- User plays five rounds of Rock-Paper-Scissors against the computer.
- The computer makes random choices of Rock, Paper, or Scissors.
- After five rounds, the game declares the overall winner.
- Input is taken via a prompt in the browser.
- Game results are displayed using `alert`.

## How to Play

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/animeshlego5/rock-paper-scissors.git
    ```
2. Open the `index.html` file in a browser or run the JavaScript file in the console.
3. The game will prompt you to enter "Rock", "Paper", or "Scissors". The input is case-insensitive.
4. The game will display the result of each round and the overall winner after five rounds.

## Code Overview

### `getComputerChoice()`

- Randomly returns "rock", "paper", or "scissors" based on a random number.

### `getHumanChoice()`

- Prompts the user to input "rock", "paper", or "scissors" and returns the input in lowercase.

### `playRound(humanChoice, computerChoice)`

- Takes the user's choice and the computer's choice as input.
- Compares them and updates the score.
- Alerts the result of the round.

### `playGame()`

- Runs the game for 5 rounds.
- Tracks the scores of the human and computer.
- Displays the final result (Win, Lose, or Draw) after the rounds.

## Game Rules

- **Rock** beats Scissors.
- **Scissors** beats Paper.
- **Paper** beats Rock.

## Project Structure

```bash
rock-paper-scissors/
│
├── index.html          # Main HTML file (if UI is used)
└── script.js           # Main JavaScript logic
