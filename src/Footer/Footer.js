import "./Footer.css";
import Logo from "../utils/images/Logo.svg";
import FacebookIcon from "../utils/icons/facebook.svg";
import TwitterIcon from "../utils/icons/twitter.svg";
import WesternUnion from "../utils/icons/WesternUnion.svg";
import MasterCard from "../utils/icons/MasterCard.svg";
import Paypal from "../utils/icons/Paypal.svg";
import Visa from "../utils/icons/Visa.svg";

function Footer(){
    return(
        <footer className="Footer">
            <div className="FooterSection1">
                <div className="FooterSection1Writing1">
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                </div>
                <div className="FooterSection1Writing2">
                    <p>Follow Us</p>
                    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <div className="FooterSocialMedia">
                        <figure>
                            <img src={FacebookIcon} alt="FacebookIcon" />
                        </figure>
                        <figure>
                            <img src={TwitterIcon} alt="TwitterIcon" />
                        </figure>
                    </div>
                </div>
                <div className="FooterSection1Writing3">
                    <p>Contact Us</p>
                    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>
            </div>
            <div className="FooterSection2">
                <ul>
                    <li>Infomation</li>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul>
                    <li>My Account</li>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul>
                    <li>Our Offers</li>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="FooterSection3">
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                <div className="FooterPaymentMethods">
                    <figure>
                        <img src={WesternUnion} alt="WesternUnion" />
                    </figure>
                    <figure>
                        <img src={MasterCard} alt="MasterCard" />
                    </figure>
                    <figure>
                        <img src={Paypal} alt="Paypal" />
                    </figure>
                    <figure>
                        <img src={Visa} alt="Visa" />
                    </figure>
                </div>
            </div>
        </footer>
    )

}
export default Footer;