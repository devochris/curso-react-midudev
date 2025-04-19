import { GAME_STATUS } from "./consts/game-status.js";
import { BoardSquare } from "./BoardSquare.jsx";
import { ResetGame } from "./ResetGame.jsx";

export function Winner({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === GAME_STATUS.TIE
        ? 'Empate'
        : `Ha ganado ${winner}`

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <BoardSquare>{winner}</BoardSquare>}
                </header>

                <footer>
                    <ResetGame onReset={resetGame}>
                        Empezar de nuevo
                    </ResetGame>
                </footer>
            </div>
        </section>
    )
}
