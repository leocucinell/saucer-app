import './NavBar.css';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const NavBar = () => {

    return(
        <nav className="navbar-container">
            <ul className="navbar-ul">
                <HamburgerMenu />
                <span id='nav-logo' className="Logo">Saucer</span>
            </ul>
        </nav>
    );
}

export default NavBar;