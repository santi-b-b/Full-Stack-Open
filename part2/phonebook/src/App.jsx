import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PeopleList from './components/PeopleList'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notificationMessage, setNotificationMessage] = useState(null)
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  
  useEffect(() => {
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
    }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    if (filter === ''){
      setShowAll(true)
    }
    else {
      setShowAll(false)
    }
  }

  const handleDeletePerson = (id) => {

    const personToDelete = persons.find(p => p.id === id)

    if (window.confirm(`Do you really want remove ${personToDelete.name} from the phonebook?`)) {
      personService
      .remove(id)
      .then(personDeleted => {
      setPersons(persons.filter(person => person.id !== personDeleted.id))
      })
    }
  
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)){

      const personToUpdate = persons.find(person => person.name === newName)
      personToUpdate.number = newNumber
      

      if (window.confirm(`${personToUpdate.name} is already on the phonebook, do you want to replace the old number with this one?`)) {

        personService
        .update(personToUpdate.id, personToUpdate)
        .then(setPersons(persons.map(person =>person.id === personToUpdate.id ? personToUpdate : person)))

        setNotificationMessage(
          `${personToUpdate.name}'s number was updated`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

      }

    }
    else if (persons.some(person => person.number === newNumber)){
      window.alert(`${newNumber} is already added to phonebook`)
    }
    else if (newName === '' || newNumber === ''){
      window.alert('Name and number must be filled')
      console.log(`name: ${newName} number: ${newNumber}`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
            .create(personObject)
            .then(returnedPerson => {

              setPersons(persons.concat(returnedPerson))
              setNotificationMessage(`${newName} was added to the phonebook :)`)
              setNewNumber("")
              setNewName("")
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000)
              
            })            
      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPersonForm 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} 
        onSubmit={addPerson} 
        nameValue={newName}
        numberValue={newNumber}
      />
      <PeopleList personsToShow={personsToShow} handleDeletePerson = {handleDeletePerson}/>
    </div>
    
  )
}

export default App