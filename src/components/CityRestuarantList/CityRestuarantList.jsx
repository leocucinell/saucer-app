import './CityRestuarantList.css';
import CitySelector from '../CitySelector/CitySelector';

const CityRestuarantList = () => {
    return(
        <div className="city-restuarant-list-container">
            <h2>Restuarants: </h2>
            <CitySelector />
        </div>
    )
}

export default CityRestuarantList