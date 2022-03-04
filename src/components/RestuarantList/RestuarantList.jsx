import './RestuarantList.css'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import api from '../../api/api';

import RestuarantCard from '../RestuarantCard/RestuarantCard';

const RestuarantList = () => {

    const selectedCity = useSelector((state) => state.userSelectedCity.value); //{id: <int>}
    const [restuarantList, setRestuarantList] = useState([]);

    useEffect(() => {
        api.get(
            'restuarant/city_list',
            {
                params: {
                    id: selectedCity.id
                }
            }
        ).then((result) => {
            setRestuarantList(result.data.data.restuarants_list);
        });
    }, [selectedCity]); //listens to the redux state changes

    return(
        <div>
            {restuarantList.map((restuarant) => {
                return(
                    <RestuarantCard key={restuarant.id} restuarant={restuarant} />
                );
            })}
        </div>
    );
}

export default RestuarantList