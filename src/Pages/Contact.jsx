import { motion } from "framer-motion";
import "../Styles/Contact.css";
const Contact = () => (
    <div className="Contact-Container">
        <h1>Contact Me{" "}
            <motion.span 
                animate={{ rotate: [0, 0, 0], y: [0, -10, 0] }} 
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} 
                style={{ display: "inline-block", transformOrigin: "bottom center" }}
            >
                🚀✉️
            </motion.span>
        </h1>
        <div className="Icons-Container">
            <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                alt="GitHub" 
                className="GitHub-Icon"
                onClick={() => window.location.href='https://github.com/saulyez'} 
                style={{ cursor: 'pointer' }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="LinkedIn-Icon"
                onClick={() => window.location.href='https://www.linkedin.com/in/saul-ye-zheng-7b6482254/'}
                style={{ cursor: 'pointer' }}    
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
            />   
        </div>
    </div>
);
export default Contact;
