import { Link } from "react-router-dom";
import "../Styles/navBar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            
            {/* <div className="logo">
                <h1>Portfolio</h1>
            </div> */}
            
            <ul className="nav-menu">
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

