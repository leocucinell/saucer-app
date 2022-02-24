import './NavBar.css';
import { useState } from 'react';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const NavBar = () => {

    // TODO: Make menuStatus a redux controlled state so we can put menu in content view easily
    const [menuStatus, setMenuStatus] = useState(false);

    return(
        <>
            <nav className="navbar-container">
                <ul className="navbar-ul">
                    <HamburgerMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
                    <span id='nav-logo' className="Logo">Saucer</span>
                </ul>
            </nav>
            {menuStatus ? <SidebarMenu /> : null}
        </>
    );
}

export default NavBar;