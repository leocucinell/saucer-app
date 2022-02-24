import './SidebarMenu.css';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    return(
        <div className="menu-screen-container">
            <div className="gray-background">
            </div>
            <div className='sidebar-menu-container'>
                <ul className="menu-list">
                    <li>Create Restuarant</li>
                    <hr />
                    <li><Link className="menu-list-link" to="/about">about</Link></li>
                    <hr />
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;