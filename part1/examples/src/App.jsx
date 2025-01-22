import { useState } from "react"


const App = () => {
  const [clicks, setClicks] = useState({ //Se define una función con una variable de estado que tiene dos componentes
    left: 0, right: 0
  })

  const handleLeftClick = () => { // Esta es la función que maneja el cambio de estado del componente left 
    const newClicks = { //Esta sintaxis creo que es nueva, las funciones de cambio de estado usan : para asignar valor, raro... debe ser de la librería,  perdón ya lo entandí es un objeto 
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks) // se le asignan los valores del nuevo objeto a left y righ
  }

  const handleRightClick = () => { //Lo mismo que la función anterior pero para right
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  const interChangevalues = () => {
    let aux = clicks.left
    const newClicks = {
      ...clicks,
      left: clicks.right,
      right: aux
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={interChangevalues}>change</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
export default App