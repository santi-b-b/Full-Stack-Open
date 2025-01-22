import { useState } from "react"


const App = () => {

const History = (props) => { // este método se encarga de manejar la información que se va a desplegar en base a los estados de la app
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <p>button press history: {props.allClicks.join(' ')}</p>
      <p>Left:{props.left} </p>
      <p>right:{props.right} </p>
    </div>
  )
}

const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])
const [total, setTotal] = useState(0)

const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left + 1)
  setTotal(left + right)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
  setTotal(left + right)
}

  return (
    <div>
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>

      <History allClicks={allClicks} left = {left} right = {right} />
    </div>
  )
}
export default App