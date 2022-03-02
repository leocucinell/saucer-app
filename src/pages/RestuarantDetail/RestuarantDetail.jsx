import './RestuarantDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getRestuarant } from '../../api/getRestuarant';

import RestuarantDetailBanner from '../../components/RestuarantDetailBanner/RestuarantDetailBanner';
import RestuarantInfoContainer from '../../components/RestuarantInfoContainer/RestuarantInfoContainer';
import RestuarantButtonsContainer from '../../components/RestuarantButtonsContainer/RestuarantButtonsContainer';

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
            <RestuarantDetailBanner bannerUrl={restuarant.bannerUrl} title={restuarant.title} />
            <RestuarantInfoContainer restuarant={restuarant} />
            <RestuarantButtonsContainer menuUrl={restuarant.menuUrl} restuarantId={restuarant.id} />
        </div>
    )
}

export default RestuarantDetail;