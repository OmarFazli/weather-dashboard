import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

function CitySearch({onSearchChange}){
    const [search, setSearch] = useState(null)

    const handleOnChange = (searchValue) => {
        setSearch(searchValue);
        onSearchChange(searchValue);
    }
    return (
        <AsyncPaginate
            placeholder="Enter city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    )
}

export default CitySearch