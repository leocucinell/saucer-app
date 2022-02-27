import './ReservationCard.css';

const ReservationCard = ({id, title, description}) => {
    return(
        <div className='reservation-card-container'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ReservationCard;