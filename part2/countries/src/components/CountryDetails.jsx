import weatherService from '../services/weather'
import { useState, useEffect } from 'react'


const CountryDetails = ({showDetail, country}) => {
    const [capitalWeather, setCapitalWeather] = useState(null)
    useEffect(() => {
        if(country && country.capital) { 
            weatherService.get(country.capital)
            .then( weatherInfo => {
                setCapitalWeather(weatherInfo)
                console.log('clima de la capital:', weatherInfo)
            })
        }
    }, [country])


    if(!showDetail || !country || !capitalWeather){
        return null
    }
    


    console.log('idiomass del pais seleccionado: ', country.languages)
    console.log('clima de la capital:', capitalWeather)





    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area} km²</div>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => 
                    <li key = {language}> {language} </li>
                )}
            </ul>
            <picture>
                <img src = {country.flags.png}/>
            </picture>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature {Math.round(capitalWeather.main.temp)}°C</div>
            <picture>
                <img src = {`https://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`} />
            </picture>
            <div>Wind {capitalWeather.wind.speed} m/s</div>
        </div>
        
    )
  }

export default CountryDetails