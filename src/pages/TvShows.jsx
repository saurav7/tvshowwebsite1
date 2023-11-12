import axios from "axios";
import { useEffect, useState } from "react";
import TvShowCard from "../components/TvShowCard";

function TvShows() {
    const[tvShows, setTvShows] = useState([])

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows',{ timeout: 5000 })
        .then((res) => {
            const results = res.data

            results.forEach(({_links: {self: {href}}}) => {
                axios.get(href)
                .then(res => {
                    setTvShows(prevState => ([...prevState, res.data]))
                })
            });
        })
    }, [])

    return (
        <div className="container">
            <div className="tvShow-list">
                {tvShows.map((tvshow) => (<TvShowCard key={tvshow.id} tvShow={tvshow}/>))}
            </div>
        </div>
    )
}
export default TvShows