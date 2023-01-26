import './AdvertisementSection.css';
import SoleShoe from '../assets/images/SoleShoe.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextData } from '../context/Context';
export function AdvertisementSection() {
    const nav = useNavigate();
    const {setBrandID} = useContext(ContextData);
    return (
        <div className="AdvertisementSection">
            <div className="AdvertisementSectionWriting">
                <p>Adidas Men Running Sneakers</p>
                <p>Performance and design. Taken right to the edge.</p>
                <button onClick={()=>{nav("/products"); setBrandID(1002)}} className="AdvertisementSectionWritingButton">
                    SHOP NOW
                </button>
            </div>
            <figure>
                <img src={SoleShoe} alt="sole shoe" />
            </figure>
        </div>
    );
}

