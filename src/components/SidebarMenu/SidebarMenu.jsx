import './SidebarMenu.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeVisibility } from '../../features/menuPopupSlice';

const SidebarMenu = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeVisibility());
    }

    return(
        <div className="menu-screen-container">
            <div className="gray-background">
            </div>
            <div className='sidebar-menu-container'>
                <ul className="menu-list">
                    <li>Create Restuarant</li>
                    <hr />
                    <li><Link onClick={handleClick} className="menu-list-link" to="/about">about</Link></li>
                    <hr />
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;