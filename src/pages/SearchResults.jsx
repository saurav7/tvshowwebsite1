import { useState, useEffect } from "react"
import axios from "axios"
import TvShowCard from "../components/TvShowCard"

function SearchResults(props) {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {

        const query = new URLSearchParams(props.location.search).get("q")

        const fetchData = async () => {
            setSearchResults([])

            if (query) {
                const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
                const results = response.data;

                results.forEach(({ show }) => {
                    axios.get(show._links.self.href)
                        .then(res => {
                            setSearchResults(prevState => ([...prevState, res.data]))
                            setSearchTerm(query)
                        })
                });
            }
        }
        fetchData()
    }, [props.location.search])
    return (
        <div className="container">
            <h1>Search Results for "{searchTerm !== "" ? searchTerm : 'Your Query'}"</h1>
            <div className="tvShow-list">
                {searchResults.map((tvshow) => (
                    <TvShowCard key={tvshow.id} tvShow={tvshow} />
                ))}
            </div>
        </div>
    )
}
export default SearchResults