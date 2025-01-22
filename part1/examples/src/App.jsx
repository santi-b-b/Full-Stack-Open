import { useState } from "react"


const App = () => {
  const [value, setValue] = useState(10)


  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  
  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
export default App