import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import countriesService from './services/countries'
import './index.css'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [filter, setFilter] = useState('')
  const [showDetail, setDetail] = useState(false)
  const [showList, setList] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [countriesToShow, setCountriesToShow] = useState('')

  
  useEffect(() => {
      countriesService
        .getAll()
        .then(initialCountries => {
          setCountries(initialCountries)
          console.log(initialCountries)
        })
    }, [])


  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(filterValue.toLowerCase()))
    setFilter(filterValue)
    setCountriesToShow(filtered)
    console.log(filtered)

    if(filterValue.length === 0 )
    {
      setNotificationMessage('')
    }

    else if (filtered.length === 0){
      setDetail(false)
      setList(false)
      setNotificationMessage('No countries found')
    }
    else if (filtered.length === 1){
      setDetail(true)
      setList(false)
      setNotificationMessage('')
      console.log(filtered[0])
      setCountry(filtered[0])

    }
    else if (filtered.length > 10){
      setDetail(false)
      setList(false)
      setNotificationMessage('Too many countries to show')
    }
    else {
      setDetail(false)
      setList(true)
      setNotificationMessage('')
    }
  }


  return (
    <div>
      <Filter onChange={handleFilterChange}/>
      <>{notificationMessage}</>
      <CountriesList countriesToShow={countriesToShow} showList={showList}/>
      <CountryDetails showDetail={showDetail}  country = {country}/>
    </div>
    
  )
}

export default App