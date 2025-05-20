const PersonDetails = ({id, name, number, handleDeletePerson}) => {
    return (
        <li key = {id}>
            {name} {number.concat(' ')}   
            <button onClick={handleDeletePerson}>delete</button>
        </li>
    )
  }

  export default PersonDetails