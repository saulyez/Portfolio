import "../Styles/Projects.css";
import Card from "../Components/Card";
import Python from "../assets/python_icon.svg"
import Git from "../assets/git.svg"
import mySQL from "../assets/mysql.svg"
import java from "../assets/java.svg"
import psql from "../assets/psql.svg"
import c from "../assets/c.svg"
import react from "../assets/react.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"

const cardData = [
    {title: 'Web Scraper',
    description: 'Webscraper to extract data from Forex-Factory',
    icons: [Python, Git, mySQL]
    },
    {title: 'LSTM',
    description: 'Implemented an LSTM modeling for time-series forecast, using scikit-learn and TensorFlow',
    icons: [Python, Git, mySQL]
    },
    {title: 'Inventory Manager',
    description: 'Created an inventory management system for a multi store records shop',
    icons: [java, Git, psql]
    },
    {title: 'Firewall',
    description: 'Created a firewall program to allow IP addresses to connect to a TCP multi threaded server',
    icons: [c, Git]
    },
    {title: 'Grade Consistency System',
    description: 'Created a grade consistency system for education institutions using KNN algorithm',
    icons: [js, Git, psql, Python]    
    },
    {title: 'Portfolio',
    description: 'Created a portfolio website to showcase my projects and skills. This website talks about me and my aspirations',
    icons: [react, Git, html, css, js]
    }

];

const Projects = () => {
    return (
        <div className="Main-Container">
            <div className="Card-Container">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        icons={card.icons}
                    /> 
                ))}
            </div>
        </div>
    );
};
export default Projects;
