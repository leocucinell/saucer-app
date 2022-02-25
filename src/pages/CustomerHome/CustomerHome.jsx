import './CustomerHome.css'
import { useSelector } from 'react-redux';

const CustomerHome = () => {

    const userData = useSelector((state) => state.currentUser.value);
    console.log(userData);

    return(
        <div className="CustomerHome-container">
            <h1>Customer Home Page</h1>
            <p>Next grab the logged in user from redux</p>
        </div>
    );
}

export default CustomerHome;