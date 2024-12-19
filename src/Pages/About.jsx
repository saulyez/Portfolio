import '../Styles/About.css';
import ImageSlider from '../Components/Schools';

const About = () => {
    return (
        <div className="About-Container">
            <div className="About-Content">
                <h1>About Me</h1>
                <p>
                    My name is Saul and I come from San Jose, Costa Rica. I am passionate about artificial intelligence and programming. 
                    I aspire to become a software engineer and build meaningful projects. Pura Vida 🇨🇷
                </p>
            </div>

            <div className="Schools-Container">
                <ImageSlider />
            </div>
        </div>
    );
};

export default About;
