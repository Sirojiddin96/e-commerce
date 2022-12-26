import "./AdvertisementSection.css";
import SoleShoe from "../assets/images/SoleShoe.svg";
export function AdvertisementSection(){
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

export function AdvertisementSectionSmall(){
    return(
        <div className="AdvertisementSectionSmall">
            <div className="AdvertisementSectionWritingSmall">
                <p>Adidas Men Running Sneakers</p>
                <p>Performance and design. Taken right to the edge.</p>
                <button className="AdvertisementSectionWritingButtonSmall">SHOP NOW</button>
            </div>
            <figure>
                <img src={SoleShoe} alt="sole shoe" />
            </figure>
        </div>
    )
}