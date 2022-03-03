import "./ReservationDateTimes.css"
import { useState } from "react"

const ReservationDateTimes = ({reservationDate, setReservationDate, reservationTime, setReservationTime }) => {

    const handleDateChange = (e) => {
        //2022-03-03
        setReservationDate(e.target.value);
    }
    const handleTimeChange = (e) => {
        //17:16
        setReservationTime(e.target.value);
    }

    return(
        <div className="datetime-container">
            <form>
                <input value={reservationDate} onChange={(e) => handleDateChange(e)} type="date" />
                <input value={reservationTime} onChange={(e) => handleTimeChange(e)} type="time" />
            </form>
        </div>
    );
}

export default ReservationDateTimes;