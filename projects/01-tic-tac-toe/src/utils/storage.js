export function getSavedSquares() {
    return localStorage.getItem('squares')
}

export function getSavedTurn() {
    return localStorage.getItem('turn')
}

export function saveGameStorage({ squares, turn }) {
    localStorage.setItem('squares', JSON.stringify(squares))
    localStorage.setItem('turn', turn)
}

export function resetGameStorage() {
    localStorage.removeItem('squares')
    localStorage.removeItem('turn')
}
