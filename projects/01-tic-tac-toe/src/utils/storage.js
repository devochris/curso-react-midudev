export function getSavedSquares () {
  return window.localStorage.getItem('squares')
}

export function getSavedTurn () {
  return window.localStorage.getItem('turn')
}

export function saveGameStorage ({ squares, turn }) {
  window.localStorage.setItem('squares', JSON.stringify(squares))
  window.localStorage.setItem('turn', turn)
}

export function resetGameStorage () {
  window.localStorage.removeItem('squares')
  window.localStorage.removeItem('turn')
}
