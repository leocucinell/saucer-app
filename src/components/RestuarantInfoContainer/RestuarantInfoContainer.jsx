import './RestuarantInfoContainer.css';

const RestuarantInfoContainer = ({restuarant}) => {
    return(
        <div className="RestuarantDetail-info-container">
            <h2>{restuarant.description}</h2>
            <h4>{restuarant.Location}</h4>
            <h4>Phone: {restuarant.phoneNumber}</h4>
            <h4>email: {restuarant.email}</h4>
        </div>
    );
}

export default RestuarantInfoContainer;