import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

function TvShowDetails() {

    const { state } = useLocation()

    return (
        <div className="show-detail-container">
            <div className="show-card">
                <div className="show-details">

                    <img src={state.image.medium} alt={state.name} />
                    <div className="img-title-genres-rating">
                        <h1>Name: {state.name}</h1>
                        <h1>Genres: {state.genres}</h1>
                        <h1>Rating: {state.rating.average}</h1>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default TvShowDetails