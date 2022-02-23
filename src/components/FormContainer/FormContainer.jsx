import "./FormContainer.css"
import { Link } from 'react-router-dom';

const FormContainer = ({message}) => {
    return(
        <div className="form-container-box">
            <span>{message}</span>
            <div className="landing-buttons-container">
                <Link to='/login'><button>Log in</button></Link>
                <Link to='/signup'><button>Sign up</button></Link>
            </div>
        </div>
    )
}

export default FormContainer