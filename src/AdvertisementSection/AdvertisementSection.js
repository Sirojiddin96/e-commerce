import "./AdvertisementSection.css";
import SoleShoe from "../utils/images/SoleShoe.svg";
function AdvertisementSection(){
    return(
        <div className="AdvertisementSection">
            <div className="AdvertisementSectionWriting">
                <p>Adidas Men Running Sneakers</p>
                <p>Performance and design. Taken right to the edge.</p>
                <button className="AdvertisementSectionWritingButton">SHOP NOW</button>
            </div>
            <figure>
                <img src={SoleShoe} alt="sole shoe" />
            </figure>
        </div>
    )
}
export default AdvertisementSection;