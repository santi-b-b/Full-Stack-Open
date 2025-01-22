import { useState } from "react"


const App = () => {
    const [left, setLeft] = useState(0) // Se setea el estado para left y su metodo set setLeft
    const [right, setRight] = useState(0)
  
    const [allClicks, setAll] = useState([]) // Se setea un estado con un objeto que es un arreglo vacío
  
  
    const handleLeftClick = () => { // Este manejador suma 1 a la variable left cada vez que es llamado y al arreglo allClicks le interta una 'L' de left al final
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
  
    return ( // me imagino que la funcion join de un arreglo une todos los elementos de este intercalando con el parámetro que recibe
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
  
        <p>{allClicks.join(' ')}</p> 
      </div>
    )
  }
export default App