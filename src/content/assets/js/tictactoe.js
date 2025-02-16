import "../css/restaurant.css";

const ticTacToe = document.getElementById("ticTacToe");
const currentPlayer = document.getElementById("currentPlayer");
const currentScore = document.getElementById("currentScore");
const currentPlayerP = document.createElement("p");
const currentScoreP = document.createElement("p");
let counter = 0;

const Player = (name, piece) => {
    const moves = [];
    let score = 0;

    const storeMove = (move) => {
        moves.push(move);
    };

    const storeScore = () => {
        ++score;
    };

    const getScore = () => {
        return score;
    };

    return { name, piece, score, storeMove, storeScore, getScore };
};

let gameboard = [
    [[], [], []],
    [[], [], []],
    [[], [], []]
];

const clearGameboard = () => {
    gameboard = [
        [[], [], []],
        [[], [], []],
        [[], [], []]
    ];
};

const score = () => {
    /**
     * If current piece is stored piece for each row OR 
 *      If current piece is stored piece for each col OR 
 *      If current piece is stored piece for 0, 0 && 1, 1 && 2, 2 OR 
 *      If current piece is stored piece for 0, 2 && 1, 1 && 2, 0
 *  */
    gameboard.forEach(row => {
        if (row[0] === "X" && row[1] === "X" && row[2] === "X") {
            player1.storeScore();
            clearGameboard();
            return;
        } else if (row[0] === "O" && row[1] === "O" && row[2] === "O") {
            player2.storeScore();

            clearGameboard();
            return;
        }
    });

    for (let cell = 0; cell < 3; cell++) {
        if (gameboard[0][cell] === "X" && gameboard[1][cell] === "X" && gameboard[2][cell] === "X") {
            player1.storeScore();

            clearGameboard();
            return;
        } else if (gameboard[0][cell] === "O" && gameboard[1][cell] === "O" && gameboard[2][cell] === "O") {
            player2.storeScore();
            clearGameboard();
            return;
        }
    }

    if (gameboard[0][0] === "X" && gameboard[1][1] === "X" && gameboard[2][2] === "X") {
        player1.storeScore();
        clearGameboard();
    } else if (gameboard[0][2] === "X" && gameboard[1][1] === "X" && gameboard[2][0] === "X") {
        player1.storeScore();
        clearGameboard();
    } else if (gameboard[0][0] === "O" && gameboard[1][1] === "O" && gameboard[2][2] === "O") {
        player2.storeScore();
        clearGameboard();
    } else if (gameboard[0][2] === "O" && gameboard[1][1] === "O" && gameboard[2][0] === "O") {
        player2.storeScore();
        clearGameboard();
    }
};

const drawGame = () => {
    const boardSection = document.createElement("section");

    for (let i = 0; i < 3; i++) {
        const row = document.createElement("p");

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("span");
            cell.setAttribute("style", "border: 1px solid black; margin: 0; padding: 0; height: 25px; width: 25px; display: inline-block;");

            cell.addEventListener("click", () => {
                game(i, j);
            });

            row.appendChild(cell);
        }

        boardSection.appendChild(row);
    }

    return boardSection;
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

let whoMoves = true;
let winner = null;

const game = (moveX, moveY) => {
    counter++;

    // Current player
    const cP = whoMoves === true ? player1 : player2;

    // Move
    const x = ticTacToe.childNodes[0].childNodes[moveX].childNodes[moveY];
    if (x.innerHTML === "") {
        x.innerHTML = cP.piece;
        gameboard[moveX][moveY] = cP.piece;
    }

    currentPlayerP.innerHTML = "Current Player: <strong>" + cP.name + "</strong>";
    currentPlayer.appendChild(currentPlayerP);

    // Current game score
    score();
    let scoreToDisplay = cP.getScore();

    if (counter === 9) {
        if (scoreToDisplay > 0) {
            currentScoreP.innerHTML = `${cP.name} is the winner.`;
        } else {
            currentScoreP.innerHTML = "The game is a draw.";
        }
    } else if (scoreToDisplay === 0) {
        currentScoreP.innerHTML = `${cP.name}'s score: <strong>` + scoreToDisplay + "</strong>";
    } else if (scoreToDisplay > 0) {
        currentScoreP.innerHTML = `${cP.name} is the winner.`;
    }

    currentScore.appendChild(currentScoreP);
    whoMoves = !whoMoves;
};

// Game board
const boardSection = drawGame();

ticTacToe.appendChild(boardSection);


