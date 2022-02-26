import './CitySelector.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from '../../features/userSelectedCity';

const CitySelector = () => {

    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cities.value);
    const [selectedCity, setSelectedCity] = useState(1);

    //NOTE: Might have to change to include name later
    const handleChange = (e) => {
        setSelectedCity(e.target.value);
        dispatch(changeCity(parseInt(e.target.value)));
    }

    return(
        <select name="cities" value={selectedCity} onChange={(e) => handleChange(e)} >
            {cities.map((city) => {
                return(
                    <option value={city.id}>{city.name}</option>
                )
            })}
        </select>   
    );
}

export default CitySelector;