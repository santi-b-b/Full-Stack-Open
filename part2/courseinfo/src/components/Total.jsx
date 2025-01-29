const Total = ({parts}) => {
    let total = 0

    console.log('el parametro que recibe la funcion total es: ', parts)
    parts.forEach((element) => total += element.exercises);
    console.log('el total de ejercicios es: ', total)
    return (
        <p><b>total of {total} exercises</b></p>
    )
  }

  export default Total