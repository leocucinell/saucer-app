import './CityRestuarantList.css';
import CitySelector from '../CitySelector/CitySelector';
import RestuarantList from '../RestuarantList/RestuarantList';

const CityRestuarantList = () => {
    return(
        <div className="city-restuarant-list-container">
            <div className="city-list-title-container">
                <h2>Restuarants: </h2>
                <CitySelector />
            </div>
            <RestuarantList />
        </div>
    );
}

export default CityRestuarantList;