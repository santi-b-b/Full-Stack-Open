
const Content = (props) => {
    console.log(props.parts)
    const result = props.parts.map((value, index) => (<p key={index}>{value.name} {value.exercises}</p>))
    return (
      <div>
        {result}
      </div>
    )
  }

  export default Content