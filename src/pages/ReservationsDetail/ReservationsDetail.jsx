import "./ReservationsDetail.css";

import ReservationDateTimes from "../../components/ReservationDateTimes/ReservationDateTimes";
import ReservationDetailsForm from "../../components/ReservationDetailsForm/ReservationDetailsForm";
import ReservationDetailsButtons from "../../components/ReservationDetailsButtons/ReservationDetailsButtons";

const ReservationsDetail = () => {
    return(
        <div className="ReservationsDetail-page" >
            <ReservationDateTimes />
            <ReservationDetailsForm />            
            <ReservationDetailsButtons />
        </div>
    )
}

export default ReservationsDetail;