import axios from "axios";
import { useEffect, useState } from "react";
import TvShowCard from "../components/TvShowCard";

function TvShows() {
    const[tvShows, setTvShows] = useState([])

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
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

    return 
}