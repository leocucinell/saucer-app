import './MyReservationsList.css'
import ReservationList from '../ReservationList/ReservationList';

const MyReservationsList = () => {
    return (
        <div className='my-reservations-list-container'>
            <h2>My Reservations: </h2>
            <ReservationList />
        </div>
    );
}

export default MyReservationsList