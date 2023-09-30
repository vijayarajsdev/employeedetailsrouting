import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const navBarStyle=({isActive})=>{
    return {
        fontWeight:isActive? 'bold':'normal'
    }
}


const Navbar = () => {
    return ( 
        <nav>
            <NavLink style={navBarStyle} to="/">Home</NavLink>
            <NavLink style={navBarStyle} to="/about">About</NavLink>
            <NavLink  style={navBarStyle} to="/contact">Contact</NavLink>
            <NavLink  style={navBarStyle} to="/employee">Employee</NavLink>
        </nav>
     );
}
 
export default Navbar;