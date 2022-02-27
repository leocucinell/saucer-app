import './ReservationList.css'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import api from '../../api/api';

import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationList = () => {

    const currentUser = useSelector((state) => state.currentUser.value);
    const [reservationsList, setReservationsList] = useState([]);
    //runs when the current user is loaded into redux state
    console.log(reservationsList);
    useEffect(() => {
        if(currentUser === null){
            return;
        }
        api.get(
            'reservation/user_list',
            {
                params: {
                    id: currentUser.userData.id
                }
            }
        ).then((result) => {
            setReservationsList(result.data.data.reservations);
        })
    }, [currentUser]);


    return(
        <div className="reservation-list">
            {
                reservationsList.length ?
                reservationsList.map(({id, title, description}) => {
                    return <ReservationCard id={id} title={title} description={description} />
                })
                :
                <p>Loading...</p>
            }
        </div>
    );
}

export default ReservationList;