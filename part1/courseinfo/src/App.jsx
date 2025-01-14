const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.content} {props.exercises}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        < Part content = {props.part1} exercises = {props.exercises1}/> 
        < Part content = {props.part2} exercises = {props.exercises2}/> 
        < Part content = {props.part3} exercises = {props.exercises3}/> 
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>{props.total}</p>
      </div>
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
  
    return (
      <div>
        < Header course = {course}/> 
        < Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/> 
        < Total total = {part1.exercises + part2.exercises + part3.exercises}/> 
      </div>
      
    )
  }
  
  export default App