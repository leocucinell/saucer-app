import './CustomerHome.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../../features/citiesSlice';
import { setCurrentUser } from '../../features/currentUserSlice';

const CustomerHome = () => {

    const dispatch = useDispatch();

    const cities = useSelector((state) => state.cities.value);
    const userData = useSelector((state) => state.currentUser.value);
    //This function will check if there is a user saved in local storage.
    useEffect(() => {
        //check local storage to see if a user is saved.
        const savedUser = localStorage.getItem('SaucerCurrentUser');
        const parsedUser = JSON.parse(savedUser);
        //TODO: Call API to check if the refreshToken is valid
        dispatch(setCurrentUser(parsedUser))
    }, [dispatch])
    
    //This loads the cities into redux store
    useEffect(() => {
        dispatch(getCities());
    }, [dispatch]);

    return(
        <div className="CustomerHome-container">
            <h1>Customer Home Page</h1>
            <p>Next grab the logged in user from redux</p>
        </div>
    );
}

export default CustomerHome;