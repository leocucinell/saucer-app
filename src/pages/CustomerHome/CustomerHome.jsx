import './CustomerHome.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCities } from '../../features/citiesSlice';

import CityRestuarantList from '../../components/CityRestuarantList/CityRestuarantList';
import MyReservationsList from '../../components/MyReservationsList/MyReservationsList';

const CustomerHome = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.value);
    console.log('~~ CUSTOMER HOME: currentUser ~~');
    console.log(currentUser)
    
    //This loads the cities into redux store
    useEffect(() => {
        dispatch(getCities());
        if(currentUser == null){
            navigate('/');
        }
    }, [dispatch, currentUser, navigate]);

    return(
        <div className="CustomerHome-container">
            <CityRestuarantList />
            <MyReservationsList />
        </div>
    );
}

export default CustomerHome;