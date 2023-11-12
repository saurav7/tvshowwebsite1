import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function TvShowCard({ tvShow }) {

    const history = useHistory()
    
    function handleClick(){
        history.push(`/tvshows/${tvShow.name}`,tvShow)
    }



    return (
        <div className="tvShow-card">
            <div className="show-img-title-button">
                {/* Check if tvShow is not null before accessing its properties  */}
                {tvShow && tvShow.image && tvShow.image.medium && (
                    <img className="card-image" src={tvShow.image.medium} alt={tvShow.name} />
                )}
                {tvShow && tvShow.name && (
                    <h1>{tvShow.name}</h1>
                )}

                <button className="show-info" onClick={handleClick}> Show Info</button>
            </div>
        </div>
    )
}
export default TvShowCard