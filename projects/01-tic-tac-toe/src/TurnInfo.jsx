import { TURNS } from './consts/turns.js'
import { BoardSquare } from './BoardSquare.jsx'

export function TurnInfo ({ turn }) {
  return (
    <section className='turn'>
      <BoardSquare isSelected={turn === TURNS.X}>{TURNS.X}</BoardSquare>
      <BoardSquare isSelected={turn === TURNS.O}>{TURNS.O}</BoardSquare>
    </section>
  )
}
