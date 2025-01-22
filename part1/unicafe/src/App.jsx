import { useState } from 'react'

const Statistics = (props) => {
  console.log(props.all)
  if(props.all > 0){
    const avg = props.sum / props.all
    const percentage = props.good / props.all
    return(
      <div>
        <p>average: {avg}</p>
        <p>positive: {percentage} %</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <p>Aun no hay clicks para generar estadisticas</p>
      </div>
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleClickGood = () => {
    const sum_aux = sum + 1
    const all_aux = all + 1
    setGood(good + 1)
    setAll(all_aux)
    setSum(sum_aux)

  }
  const handleClickNeutral = () => {
    const all_aux = all + 1
    setNeutral(neutral + 1)
    setAll(all_aux)
  }
  const handleClickBad = () => {
    const sum_aux = sum - 1
    const all_aux = all + 1
    console.log(all_aux)
    setBad(bad + 1)
    setAll(all_aux)
    setSum(sum_aux)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>
        good
      </button>
      <button onClick={handleClickNeutral}>
        neutral
      </button>
      <button onClick={handleClickBad}>
        bad
      </button>
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <Statistics all = {all} good = {good} sum = {sum}/>
    </div>
  )
}

export default App