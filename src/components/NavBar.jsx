import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar(){
    return(
        <nav className="NavBar">
            <NavLink className = "NavLink" to = "/" >Home</NavLink>
            <NavLink className = "NavLink" to = "/about" >About</NavLink>
            
        </nav>
    )
}
export default NavBar