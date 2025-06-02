const CountriesList = ({countriesToShow, showList}) => {

    if(!showList){
        return null
    }

    return (
            <ul>
                {countriesToShow.map(country => 
                    <li key = {country.cca3}> {country.name.official} </li>
                )}
            </ul>
    )
  }

  export default CountriesList