import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import SearchBar from "./SearchBar"
import logo from "../images/logo.png"

function NavBar() {
    return (
        <nav className="NavBar">
            <div className="NavContent">
                <NavLink className="NavLink" to='/tvshows'><img className="logo" src={logo} alt="logo of the site"/></NavLink>
                <NavLink className="NavLink" to="/" >Home</NavLink>
                <NavLink className="NavLink" to="/about" >About</NavLink>
                <NavLink className="NavLink" to='/tvshows'>TvShows</NavLink>
                <SearchBar />
            </div>
        </nav>
    )
}
export default NavBar