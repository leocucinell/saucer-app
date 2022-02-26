import './CustomerHome.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../../features/citiesSlice';

const CustomerHome = () => {

    const dispatch = useDispatch()
    
    //This loads the cities into redux store
    useEffect(() => {
        dispatch(getCities());
    }, [dispatch]);

    const userData = useSelector((state) => state.currentUser.value);
    const cities = useSelector((state) => state.cities.value);
    console.log(userData);
    console.log(cities);

    return(
        <div className="CustomerHome-container">
            <h1>Customer Home Page</h1>
            <p>Next grab the logged in user from redux</p>
        </div>
    );
}

export default CustomerHome;