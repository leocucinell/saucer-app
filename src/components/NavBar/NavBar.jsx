import './NavBar.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/currentUserSlice';
import { validateAndSetCurrentUser } from '../../features/currentUserSlice';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const NavBar = () => {

    const dispatch = useDispatch();
    //check if a user is inside local storage
    useEffect(() => {
        const savedUser = localStorage.getItem('SaucerCurrentUser');
        const parsedUser = JSON.parse(savedUser);
        dispatch(validateAndSetCurrentUser(parsedUser));
    }, [dispatch]);

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