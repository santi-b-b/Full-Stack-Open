import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState('aun no hay actividad')
  const [sum, setSum] = useState(0)
  const [pos, setPos] = useState(0)
  const [percentage, setPercentage] = useState('aun no hay actividad')

  const handleClickGood = () => {
    const sum_aux = sum + 1
    const all_aux = all + 1
    const pos_aux = pos + 1 
    setGood(good + 1)
    setAll(all_aux)
    setPos(pos_aux)
    setSum(sum_aux)
    setAvg(sum_aux/all_aux)
    setPercentage('' + pos_aux/all_aux + '%')

  }
  const handleClickNeutral = () => {
    const all_aux = all + 1
    setNeutral(neutral + 1)
    setAll(all_aux)
    setAvg(sum/all_aux)
    setPercentage('' + pos/all_aux + '%')
  }
  const handleClickBad = () => {
    const sum_aux = sum - 1
    const all_aux = all + 1
    setBad(bad + 1)
    setAll(all_aux)
    setSum(sum_aux)
    setAvg(sum_aux/all_aux)
    setPercentage('' + pos/all_aux + '%')
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
      <p>all: {all}</p>
      <p>average: {avg}</p>
      <p>positive: {percentage}</p>
    </div>
  )
}

export default App