import { BoardSquares } from "./BoardSquares.jsx";
import { useState } from "react";
import { TURNS } from "./consts/turns.js";
import { TurnInfo } from "./TurnInfo.jsx";
import { Game } from "./Game.jsx";
import { checkEndGame, GAME_STATUS } from "./consts/game-status.js";
import { checkWinner } from "./utils/checkWinner.js";
import { Winner } from "./Winner.jsx";
import { ResetGame } from "./ResetGame.jsx";
import confetti from 'canvas-confetti';
import { SQUARES_POSITIONS } from "./consts/board.js";
import { getSavedSquares, getSavedTurn, resetGameStorage, saveGameStorage } from "./utils/storage.js";

export function Board() {
    const [squares, setSquares] = useState(() => {
        const savedSquares = getSavedSquares()

        return savedSquares
            ? JSON.parse(savedSquares)
            : SQUARES_POSITIONS
    })

    const [turn, setTurn] = useState(() => {
        const savedTurn = getSavedTurn()
        return savedTurn ?? TURNS.X
    })

    const [winner, setWinner] = useState(GAME_STATUS.NO_WINNER)

    const resetGame = () => {
        setSquares(SQUARES_POSITIONS)
        setTurn(TURNS.X)
        setWinner(GAME_STATUS.NO_WINNER)

        resetGameStorage()
    }

    const updateBoard = (squarePosition) => {
        if (squares[squarePosition] || winner) return

        const newSquares = [...squares]
        newSquares[squarePosition] = turn

        setSquares(newSquares)

        const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
        setTurn(newTurn)

        saveGameStorage({
            squares: newSquares,
            turn: newTurn,
        })

        const newWinner = checkWinner(newSquares)

        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newSquares)) {
            setWinner(GAME_STATUS.TIE)
        }
    }

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <ResetGame onReset={resetGame}>
                Reset del juego
            </ResetGame>

            <Game>
                <BoardSquares squares={squares} updateBoard={updateBoard} />
            </Game>

            <TurnInfo turn={turn} />
            <Winner winner={winner} resetGame={resetGame} />
        </main>
    )
}
