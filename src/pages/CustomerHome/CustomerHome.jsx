import './CustomerHome.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCities } from '../../features/citiesSlice';

import CityRestuarantList from '../../components/CityRestuarantList/CityRestuarantList';
import MyReservationsList from '../../components/MyReservationsList/MyReservationsList';

const CustomerHome = () => {

    const dispatch = useDispatch();
    
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