import './RestuarantButtonsContainer.css';
import { Link } from 'react-router-dom';

const RestuarantButtonsContainer = ({menuUrl, restuarantId}) => {
    return(
        <div className="RestuarantDetail-buttons-container">
            <a href={menuUrl}>View Menu</a>
            <Link to={`/reservationDetail/${restuarantId}`} >Reservations</Link>
        </div>
    );
}

export default RestuarantButtonsContainer;