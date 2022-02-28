import './ReservationList.css'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserReservations } from '../../api/getUserReservationsList';

import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationList = () => {

    const currentUser = useSelector((state) => state.currentUser.value);
    const [reservationsList, setReservationsList] = useState([]);

    useEffect(() => {
        if(currentUser == null){
            return;
        }
        getUserReservations(currentUser.id).then((res) => {
            const reservations = res.data.data.reservations;
            setReservationsList(reservations);
        });
        
    }, [currentUser]);


    return(
        <div className="reservation-list">
            {
                reservationsList.length ?
                reservationsList.map(({id, title, description}) => {
                    return <ReservationCard key={id} id={id} title={title} description={description} />
                })
                :
                <p>Loading...</p>
            }
        </div>
    );
}

export default ReservationList;