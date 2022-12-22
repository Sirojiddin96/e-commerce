import "./Accordion.css";
import ArrowDown from "../../utils/icons/ArrowDown.svg";

function Accordion(props){
    const {title, open, currentIndex, contents} = props;
    return(
        <div className="Accordion">
            <div className="AccordionTitle">
                <p>{title}</p>
                <figure className={open === currentIndex ? "DropDown Active" : "DropDown"}><img src={ArrowDown} alt="drop"/></figure>
            </div>
            <div className={open === currentIndex ? "Content Active" : "Content"}>
                {
                    contents.map((item, i)=>(
                        <div className="AccordionOption" key={i}>
                        <p>{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
export default Accordion;