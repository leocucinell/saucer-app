import { Link } from "react-router-dom";
import "./RestuarantCard.css";

const RestuarantCard = ({ restuarant }) => {
    return(
        <Link id="RestuarantDetail-link" to={`/restuarantDetail/${restuarant.id}`}>
            <div className="RestuarantCard-container">
                <img alt="restuarant" src={restuarant.bannerUrl} />
                <div className="RestuarantCard-info-container">
                    <h5 id="RestuarantCard-title">{restuarant.title} - $$$</h5>
                    <p id="RestuarantCard-description">{restuarant.description}</p>
                </div>
            
            </div>
            <hr />
        </Link>
    );
}

export default RestuarantCard;