import "./ReservationsDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ReservationDateTimes from "../../components/ReservationDateTimes/ReservationDateTimes";
import ReservationDetailsForm from "../../components/ReservationDetailsForm/ReservationDetailsForm";
import ReservationDetailsButtons from "../../components/ReservationDetailsButtons/ReservationDetailsButtons";

import { retrieveRestuarantReservations } from "../../api/retrieveRestuarantReservations";

const ReservationsDetail = () => {

    const params = useParams();
    const [reservationInfo, setReservationInfo] = useState([]);

    useEffect(() => {
        //Retrieve all reservations for a single restuarant
        retrieveRestuarantReservations(params.restuarantId).then((result) => {
            setReservationInfo(result.data.data.reservations)
        });
    }, []);

    return(
        <div className="ReservationsDetail-page" >
            <ReservationDateTimes />
            <ReservationDetailsForm />
            <ReservationDetailsButtons />
        </div>
    )
}

export default ReservationsDetail;