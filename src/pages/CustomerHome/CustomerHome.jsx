import './CustomerHome.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCities } from '../../features/citiesSlice';
import { setCurrentUser } from '../../features/currentUserSlice';

import CityRestuarantList from '../../components/CityRestuarantList/CityRestuarantList';
import MyReservationsList from '../../components/MyReservationsList/MyReservationsList';

const CustomerHome = () => {

    const dispatch = useDispatch();

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
            <CityRestuarantList />
            <MyReservationsList />
        </div>
    );
}

export default CustomerHome;