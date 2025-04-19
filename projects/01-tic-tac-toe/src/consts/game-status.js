export const GAME_STATUS = Object.freeze({
    NO_WINNER: null,
    TIE: false
})

export function checkEndGame(squares) {
    return squares.every((square) => square !== GAME_STATUS.NO_WINNER)
}
