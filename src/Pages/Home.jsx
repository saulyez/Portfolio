import { motion } from "framer-motion";
import "../Styles/Home.css";
import Animation from "../Components/forLoopanimation";
import Icon_Bar from "../Components/Icon_Bar";
const Home = () => {
  return (
    <div>
      <div className="Text-Container">
        {/* Salutation with animated hand emoji */}
        <p className="Salutation">
          Hello World!{" "}
          <motion.span
            animate={{ rotate: [0, 20, 0] }} /* Waving motion */
            transition={{
              duration: 1,        /* Duration of one wave */
              repeat: Infinity,   /* Infinite loop */
              repeatType: "reverse", /* Back-and-forth waving */
              ease: "easeInOut",  /* Smooth animation */
            }}
            style={{
              display: "inline-block", /* Isolate emoji */
              transformOrigin: "bottom center", /* Wave from the bottom */
            }}
          >
            👋
          </motion.span>{" "}
          My name is
        </p>

        {/* Name */}
        <h1 className="name">Saul Ye Zheng</h1>
        <h2 className="title">I am a Software Developer</h2>

        <div className="Button-Container">
            <button className="Discover-Button" onClick={() => window.location.href = '/about'}>Discover</button>
            <button className="Contact-Button" onClick={() => window.location.href = '/projects'}>More</button>
        </div>
      </div>
      <div className="Image-Container">
        <Animation />
      </div>
      <Icon_Bar />
    </div>
  );
};

export default Home;
