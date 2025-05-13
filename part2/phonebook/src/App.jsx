import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PersonDetails from './components/PersonDetails'
import PeopleList from './components/PeopleList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log(persons)


  const handleNameChange = (event) => {

    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
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
    else if (person => person.name === '' || person.number === ''){
      window.alert('Name and number must be filled')
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length,
      }
      console.log(personObject)
      setPersons(persons.concat(personObject))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPersonForm onChange={handleNameChange} onSubmit={addPerson}/>
      <PeopleList personsToShow={personsToShow} />
      <div>debug: {newName}</div>
    </div>
    
  )
}

export default App