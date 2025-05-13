const PersonDetails = ({id, name, number}) => {
    return (
        <li key = {id}>{name} {number}</li>
    )
  }

  export default PersonDetails