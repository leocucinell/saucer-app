import './HamburgerMenu.css'
import { useDispatch } from 'react-redux';
import { changeVisibility } from '../../features/menuPopupSlice';


const HamburgerMenu = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeVisibility())
    }

    return (
        <div className="menu-box"
            onClick={handleClick}
        >
            <div id="hamburger-1" className="hamburger-bar"></div>
            <div id="hamburger-2" className="hamburger-bar"></div>
            <div id="hamburger-3" className="hamburger-bar"></div>
        </div>
    );
}

export default HamburgerMenu