import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div className="Landing-page">
            <h1>Landing page</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    );
}

export default Landing