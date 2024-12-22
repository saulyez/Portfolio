import { useEffect, useRef } from "react";
import skillStyles from "../Skill.module.css";
import { ToolSection } from "./Tools";
import { LangSection } from "./Languages";
import { OsSection } from "./OsSection";
import { CloudSection } from "./CloudSection";
import { useAnimation, useInView, motion } from "framer-motion";

function Technologies() {
  const techRef = useRef(null);
  const controls = useAnimation();
  const techInView = useInView(techRef);

  useEffect(() => {
    if (techInView) {
      controls.start("visible");
    }
  }, [controls, techInView]);

  const techVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.section
      className={skillStyles.technologies}
      ref={techRef}
      initial="hidden"
      animate={controls}
      variants={techVariants}
    >
      <h2>Technologies</h2>
      <section className={skillStyles.techSection}>
        <section className={skillStyles.languages}>
          <h3>Languages</h3>
          <section className={skillStyles.langSection}>
            <LangSection />
          </section>
        </section>
        <section className={skillStyles.tools}>
          <h3>Tools</h3>
          <section className={skillStyles.toolSection}>
            <ToolSection />
            <ToolSection />
          </section>
        </section>
        <section className={skillStyles.os}>
          <h3>Operating System</h3>
          <section className={skillStyles.osSection}>
            <OsSection />
            {/* <OsSection /> */}
          </section>
        </section>
        <section className={skillStyles.cloud}>
          <h3>Cloud</h3>
          <section className={skillStyles.cloudSection}>
            <CloudSection />
          </section>
        </section>
      </section>
    </motion.section>
  );
}

export { Technologies };