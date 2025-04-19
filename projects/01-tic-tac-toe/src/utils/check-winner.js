import { WINNER_COMBOS } from '../consts/winner-combos.js'
import { GAME_STATUS } from '../consts/game-status.js'

export const checkWinner = (squares) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) return squares[a]
  }

  return GAME_STATUS.NO_WINNER
}
