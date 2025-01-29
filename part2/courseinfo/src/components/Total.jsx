const Total = ({parts}) => {
    console.log('el parametro que recibe la funcion total es: ', parts)

    const initialValue = 0

    const total = parts.reduce(

        (accumulator, currentValue) => accumulator + currentValue.exercises, initialValue,

    );

    console.log('el total de ejercicios es: ', total)
    
    //parts.forEach((element) => total += element.exercises);
    
    return (
        <p><b>total of {total} exercises</b></p>
    )
  }

  export default Total