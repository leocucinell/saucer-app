import "./FormContainer.css"
import { Link } from 'react-router-dom';

const FormContainer = ({message}) => {
    return(
        <div className="form-container-box">
            <span id="welcome-message">{message}</span>
            <div className="landing-buttons-container">
                <Link className="landing-button" to='/login'><span>Log in</span></Link>
                <Link className="landing-button" to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}

export default FormContainer