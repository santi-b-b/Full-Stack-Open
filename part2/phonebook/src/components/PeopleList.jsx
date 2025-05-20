import PersonDetails from './PersonDetails'

const PeopleList = ({personsToShow, handleDeletePerson}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person => 
                    <PersonDetails key={person.id} name={person.name} number={person.number} handleDeletePerson = {handleDeletePerson} />
                )}
            </ul>
        </div>
    )
  }

  export default PeopleList