import '../Styles/About.css';
import ImageSlider from '../Components/Schools';
import Carousel from '../Components/Carousel';

const About = () => {
    return (
        <div className="About-Container">
            <div className="About-Content">
                <h1>About Me</h1>
                <p>
                    My name is Saul and I come from San Jose, Costa Rica. I am passionate about artificial intelligence and programming. I am currently pursuing a BSc in Artificial Intelligence and Computer Science at the University of Birmingham.
                    I aspire to become a software engineer and build meaningful projects. Pura Vida 🇨🇷
                </p>
            </div>
            <Carousel />
            {/* <div className="Carousel-Container">
            
            </div> */}
            <div className="Schools-Container">
                <ImageSlider />
            </div>
        </div>
    );
};

export default About;
