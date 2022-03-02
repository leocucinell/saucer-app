import './RestuarantDetailBanner.css';

const RestuarantDetailBanner = ({ bannerUrl, title }) => {
    return(
        <div className="RestuarantDetail-banner-container">
            <div className="black-curtian"></div>
            <img alt="restuarant" src={bannerUrl} />
            <h1>{title}</h1>
        </div>
    );
}

export default RestuarantDetailBanner