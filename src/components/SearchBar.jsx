import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function SearchBar() {

    const history = useHistory()

    const [searchTerm, setSearchTerm] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        if (searchTerm) {
            history.push(`/search?q=${searchTerm}`)
        }
    }

    

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search TV Shows" className="search" value={searchTerm} />
            <button className="search-button" onClick={handleClick}>Search</button>
        </div>
    )
}
export default SearchBar