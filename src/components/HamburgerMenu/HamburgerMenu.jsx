import './HamburgerMenu.css'

const HamburgerMenu = ({menuStatus, setMenuStatus}) => {

    const handleClick = () => {
        setMenuStatus(!menuStatus);
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