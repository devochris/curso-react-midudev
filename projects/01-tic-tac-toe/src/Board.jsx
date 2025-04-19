import { BoardSquares } from "./BoardSquares.jsx";
import { useState } from "react";
import { useArray } from "./hooks/useArray.js";
import { TURNS } from "./consts/turns.js";
import { TurnInfo } from "./TurnInfo.jsx";
import { Game } from "./Game.jsx";
import { checkEndGame, GAME_STATUS } from "./consts/game-status.js";
import { checkWinner } from "./utils/checkWinner.js";
import { Winner } from "./Winner.jsx";
import { ResetGame } from "./ResetGame.jsx";

export function Board() {
    const positions = useArray(9)
    const [squares, setSquares] = useState(positions)
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(GAME_STATUS.NO_WINNER)

    const resetGame = () => {
        setSquares(positions)
        setTurn(TURNS.X)
        setWinner(GAME_STATUS.NO_WINNER)
    }

    const updateBoard = (squarePosition) => {
        if (squares[squarePosition] || winner) return

        const newSquares = [...squares]
        newSquares[squarePosition] = turn

        setSquares(newSquares)

        const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
        setTurn(newTurn)

        const newWinner = checkWinner(newSquares)

        if (newWinner) {
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

            {winner !== null && <Winner winner={winner} resetGame={resetGame} />}
        </main>
    )
}
