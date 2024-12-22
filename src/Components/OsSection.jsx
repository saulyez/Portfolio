import skillStyles from "../Skill.module.css";

function OsSection() {
  return (
    <section>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.linuxBox} ${skillStyles.box}`}> 
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        </div>
      </div>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.windowsBox} ${skillStyles.box}`}>
          <svg viewBox="0 0 128 128">
            <path fill="#00ADEF" d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"></path>
          </svg>    
        </div>
      </div>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.macBox} ${skillStyles.box}`}>
          <svg viewBox="0 0 128 128">
            <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
            </svg>
        </div>
      </div>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.linuxBox} ${skillStyles.box}`}> 
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        </div>
      </div>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.windowsBox} ${skillStyles.box}`}>
          <svg viewBox="0 0 128 128">
            <path fill="#00ADEF" d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"></path>
          </svg>    
        </div>
      </div>
      <div className={skillStyles.iconContainer}>
        <div className={`${skillStyles.macBox} ${skillStyles.box}`}>
          <svg viewBox="0 0 128 128">
            <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
            </svg>
        </div>
      </div>
    </section>
  );
}

export { OsSection };