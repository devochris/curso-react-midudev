export function ResetGame ({ children, onReset }) {
  const handleClick = () => {
    onReset()
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
