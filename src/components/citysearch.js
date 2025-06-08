import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEODB_API_URL, GEODB_API_OPTIONS } from "../apis/geodbcities"

function CitySearch({onSearchChange}){
    const [search, setSearch] = useState(null)

    const handleOnChange = (searchValue) => {
        setSearch(searchValue);
        onSearchChange(searchValue);
    }

    const loadOptions = (searchValue) => {
        return fetch(`${GEODB_API_URL}/cities?minPopulation=500000&namePrefix=${searchValue}`, GEODB_API_OPTIONS)
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    };
                })
            };
        })
        .catch((err) => console.log(err))
    }

    return (
        <AsyncPaginate
            placeholder="Enter city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default CitySearch