import "./ReservationDetailsForm.css"

const ReservationDetailsForm = () => {
    return(
        <div className='reservations-details-form-container'>
           <form className='reservations-details-form'>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='description' />
           </form>
        </div>
    )
}

export default ReservationDetailsForm;