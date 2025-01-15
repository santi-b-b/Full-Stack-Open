const Header = (props) => {
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
    console.log(props.parts)
    const result = props.parts.map((value, index) => (<p key={index}>{value.name} {value.exercises}</p>))
    return (
      <div>
        <p>{result}</p>
      </div>
    )
  }
  
  const Total = (props) => {
    let result = 0

    props.parts.forEach(element => {
        result += element.exercises
    });

    return (
      <div>
        <p>Number of exercises {result}</p>
      </div>
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
      
    )
  }
  
  export default App