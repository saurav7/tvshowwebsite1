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

    const handleChange = ((e) => {
        setSearchTerm(e.target.value)
    })

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search TV Shows" className="search" value={searchTerm} onChange={handleChange}/>
            <button className="search-button" onClick={handleClick}>Search</button>
        </div>
    )
}
export default SearchBar