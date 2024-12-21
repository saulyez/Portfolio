import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = ({ title, description, icons }) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="Card" data-aos="fade" data-aos-delay="200">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="icons">
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt={`${title} icon`} className="icon"/>
                ))}
            </div>
        </div>
    );
};

export default Card;