import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PeopleList from './components/PeopleList'
import personService from './services/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  
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

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
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
            })
      console.log(personObject)
      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPersonForm onNameChange={handleNameChange} onNumberChange={handleNumberChange} onSubmit={addPerson}/>
      <PeopleList personsToShow={personsToShow} handleDeletePerson = {handleDeletePerson}/>
    </div>
    
  )
}

export default App