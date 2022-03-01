import "./BackButton.css";
import { Link } from "react-router-dom";

const BackButton = () => {

    return(
        <div className='BackButton-container'>
            <div className='BackButton'>
                <Link to="/customerHome">Back</Link>
            </div>
        </div>
    );
}

export default BackButton;