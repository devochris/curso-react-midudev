import { BoardSquare } from './BoardSquare.jsx'

export function BoardSquares ({ squares, updateBoard }) {
  return (
    <>
      {
        squares.map((_, index) => {
          return (
            <BoardSquare key={index} index={index} updateBoard={updateBoard}>
              {squares[index]}
            </BoardSquare>
          )
        })
      }
    </>
  )
}
