function TvShowCard({ tvShow }) {
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

                <button className="show-info"> Show Info</button>
            </div>
        </div>
    )
}
export default TvShowCard