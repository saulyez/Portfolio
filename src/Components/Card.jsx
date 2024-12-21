import { div } from "framer-motion/client";

const Card = ({ title, description, icons }) => {
    return (
        <div className="Card">
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