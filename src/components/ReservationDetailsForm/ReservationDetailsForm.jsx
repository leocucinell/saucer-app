import "./ReservationDetailsForm.css"

const ReservationDetailsForm = ({ reservationTitle, setReservationTitle, reservationDescription, setReservationDescription }) => {

    const handleTitleChange = (e) => {
        setReservationTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setReservationDescription(e.target.value)
    }

    return(
        <div className='reservations-details-form-container'>
           <form className='reservations-details-form'>
                <input onChange={(e) => handleTitleChange(e)} value={reservationTitle} type='text' placeholder='title' />
                <input onChange={(e) => handleDescriptionChange(e)} value={reservationDescription} type='text' placeholder='description' />
           </form>
        </div>
    )
}

export default ReservationDetailsForm;