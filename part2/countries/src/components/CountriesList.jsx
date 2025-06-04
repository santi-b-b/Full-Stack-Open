const CountriesList = ({countriesToShow, showList, handleClickDetails}) => {

    if(!showList){
        return null
    }

    return (
            <ul>
                {countriesToShow.map(country => 
                    <li key = {country.cca3}> 
                        {country.name.common.concat(' ')} 
                        <button onClick={() => handleClickDetails(country.name.common)}> Show details </button>
                    </li> 
                    
                )}
            </ul>
    )
  }

  export default CountriesList