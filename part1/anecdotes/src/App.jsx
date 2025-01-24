import { useState } from 'react'

const Button = (props) =>{
  return <button onClick={props.onClick}>{props.text}</button>
}

//This function manages the calculation of the most voted story and the component that displays it 
const MostVoted = (props) =>{
  const max = Math.max.apply(null, props.votes) // Storing the highest votes value
  const story = props.votes.indexOf(max) // Getting the index of the first element of the array that is equal tto the maximum
  if (max > 0){
    return(
      <div>
        <p>{props.anecdotes[story]}</p>
        <p> has {props.votes[story]} votes</p>
      </div>
    )
  }
  else {
    return(
      <div>
        <p>No votes yet</p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length)) 


  const handleClickNextAnecdote = () =>{
    // Here the random nextt anecdote is chosen 
    // Random delivers a number between 0-1 then when multipled by the lenght of the array turn into a number between 0-arrya´s lencth and finnaly with the floor function it becomes and integer and ensures that is not going to get out of bounds.
    const selected_aux = Math.floor(Math.random() * anecdotes.length) 
    setSelected(selected_aux)
  }
  const handleClickVote = () =>{
    const aux = [...votes]
    aux[selected] += 1
    setVotes(aux)
  }

  return (
    <div>

      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleClickNextAnecdote} text = 'Next anecdote'/>
      <Button onClick={handleClickVote} text = 'Vote'/>
      <h1>Anecdote with the most votes</h1>
      <MostVoted anecdotes = {anecdotes} votes = {votes}/>
    </div>
  )
}

export default App