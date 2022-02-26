import './CityRestuarantList.css';
import CitySelector from '../CitySelector/CitySelector';
import RestuarantList from '../RestuarantList/RestuarantList';

const CityRestuarantList = () => {
    return(
        <div className="city-restuarant-list-container">
            <h2>Restuarants: </h2>
            <CitySelector />
            <RestuarantList />
        </div>
    );
}

export default CityRestuarantList;