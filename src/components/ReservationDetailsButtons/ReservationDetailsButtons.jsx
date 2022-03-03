import "./ReservationDetailsButtons.css";

const ReservationDetailsButtons = ({ handleSubmit }) => {
    return(
        <div className='reservationDetail-buttons-container'>
            <button onClick={handleSubmit}>Add Reservation</button>
        </div>
    );
}

export default ReservationDetailsButtons;