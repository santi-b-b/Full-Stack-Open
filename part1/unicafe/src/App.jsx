import { useState } from 'react'

const StatisticLine = (props) =>{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) =>{
  return <button onClick={props.onClick}>{props.text}</button>
}

const Statistics = (props) => {
  console.log(props.all)
  if(props.all > 0){
    const avg = props.sum / props.all
    const percentage = '' + 100 * props.good / props.all + ' %'
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value = {props.good}/>
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value = {props.bad} />
            <StatisticLine text="average" value = {avg} />
            <StatisticLine text="percentage" value = {percentage} />
          </tbody>  
        </table>
      </div>
    )
  }
  else{
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  
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
      <Button onClick={handleClickGood} text = 'good'/>
      <Button onClick={handleClickNeutral} text = 'neutral'/>
      <Button onClick={handleClickBad} text = 'bad'/>
      <h1>statistics</h1>
      <Statistics all = {all} good = {good} sum = {sum} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App