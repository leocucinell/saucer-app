import "./CreateReservationsDetail.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";

import api from "../../api/api";

import ReservationDateTimes from "../../components/ReservationDateTimes/ReservationDateTimes";
import ReservationDetailsForm from "../../components/ReservationDetailsForm/ReservationDetailsForm";
import ReservationDetailsButtons from "../../components/ReservationDetailsButtons/ReservationDetailsButtons";

//import { retrieveRestuarantReservations } from "../../api/retrieveRestuarantReservations";

const ReservationsDetail = () => {

    const params = useParams();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.currentUser.value);

    const [reservationDate, setReservationDate] = useState("");
    const [reservationTime, setReservationTime] = useState("");
    const [reservationTitle, setReservationTitle] = useState("");
    const [reservationDescription, setReservationDescription] = useState("");

    const handleSubmit = () => {
        //make an api call to create the reservation
        try {
            api.post(
                'reservation/add',
                {
                    title: reservationTitle,
                    description: reservationDescription,
                    startTime: reservationTime,
                    date: reservationDate,
                    owner_id: currentUser.id,
                    restuarant_id: params.restuarantId
                }
            ).then((result) => {
                //TODO: Change this to be more responsive later
                navigate('/');
            })

        } catch (err) {
            console.log(err);
            return err;
        }
    }

    //NOTE: Add a component to display all reservations the restuarant has
    //NOTE: Add component to choose available time slots
    // const params = useParams();
    // const [restuarantReservationInfo, setRestuarantReservationInfo] = useState([]);

    // useEffect(() => {
    //     //Retrieve all reservations for a single restuarant
    //     retrieveRestuarantReservations(params.restuarantId).then((result) => {
    //         setRestuarantReservationInfo(result.data.data.reservations)
    //     });
    // }, []);

    return(
        <div className="ReservationsDetail-page" >
            <ReservationDateTimes 
                reservationDate={reservationDate} 
                setReservationDate={setReservationDate}
                reservationTime={reservationTime}
                setReservationTime={setReservationTime} 
            />
            <ReservationDetailsForm 
                reservationTitle={reservationTitle}
                setReservationTitle={setReservationTitle}
                reservationDescription={reservationDescription}
                setReservationDescription={setReservationDescription}
            />
            <ReservationDetailsButtons handleSubmit={handleSubmit} />
        </div>
    )
}

export default ReservationsDetail;