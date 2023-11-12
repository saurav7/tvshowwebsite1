import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {
    return (
        <nav className="NavBar">
            <div className="NavContent">
                <NavLink className="NavLink" to="/" >Home</NavLink>
                <NavLink className="NavLink" to="/about" >About</NavLink>
                <NavLink className="NavLink" to='/tvshows'>TvShows</NavLink>
            </div>
        </nav>
    )
}
export default NavBar