import './ReservationList.css'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import api from '../../api/api';

const ReservationList = () => {

    const currentUser = useSelector((state) => state.currentUser.value);
    const [reservationsList, setReservationsList] = useState([]);
    const [reservationRestuarantItems, setReservationRestuarantItems] = useState({});

    //runs when the current user is loaded into redux state
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

    //runs when the reservationsList is updated
    useEffect(() => {
        //retrieve the restuarant data
        for (let i = 0; i < reservationsList.length; i++){
            //retrieve the restuarant with that id
            
        }
    }, [reservationsList])

    return(
        <p>Reservation list by id</p>
    );
}

export default ReservationList