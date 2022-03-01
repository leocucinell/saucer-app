import './RestuarantDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getRestuarant } from '../../api/getRestuarant';

const RestuarantDetail = () => {
    let params = useParams()
    const [restuarant, setRestuarant] = useState({})

    useEffect(() => {
        getRestuarant(params.restuarantId).then((result) => {
            const res = result.data.data;
            setRestuarant(res);
        })
    }, []);

    return(
        <div className="RestuarantDetail-container">
            <div className="RestuarantDetail-banner-container">
                <h1>BANNER</h1>
            </div>

            <div className="RestuarantDetail-info-container">
                <h2>{restuarant.title}</h2>
            </div>

            <div className="RestuarantDetail-buttons-container">

            </div>
        </div>
    )
}

export default RestuarantDetail;