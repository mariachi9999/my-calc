import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ fondo, setFondo }) => {
  return (
    <div className={styles.navbar}>
      <h4>My Calculator 🦸‍♂️</h4>
      <h5>Made with for learning 📚</h5>
    </div>
  );
};

export default Navbar;
