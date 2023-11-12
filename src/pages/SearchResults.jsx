import { useState, useEffect } from "react"
import axios from "axios"

function SearchResults(props) {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setSearchResults] = useState([])

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
    return
}
export default SearchResults