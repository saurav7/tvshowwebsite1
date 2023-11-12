import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

function TvShowDetails(){

    const { state } = useLocation()
    console.log("State::::::",state)

}
export default TvShowDetails