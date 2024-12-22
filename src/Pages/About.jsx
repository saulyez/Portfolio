import '../Styles/About.css';
import ImageSlider from '../Components/Schools';
import Carousel from '../Components/Carousel';
import Animation2 from '../Components/Animation2';

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
            <ImageSlider />
            <div className='Experience-Container'>
                <h1>Experience</h1>
                <p>
                    As an intern at Ancova capital management I was able to develop my skills with hands-on experience. This experience helped me boost my career as a software engineer and taught me valuable lessons. Teamwork and effort are the words that would describe my experience at Ancova.
                </p>
                <Animation2 />                
            </div>
        </div>
    );
};

export default About;
