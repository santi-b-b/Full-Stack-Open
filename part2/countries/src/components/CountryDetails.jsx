const CountryDetails = ({showDetail, country}) => {

    if(!showDetail || !country){
        return null
    }

    console.log(country.languages)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => 
                    <li key = {language}> {language} </li>
                )}
            </ul>
            <picture>
                <img src = {country.flags.png}/>
            </picture>
        </div>
        
    )
  }

export default CountryDetails