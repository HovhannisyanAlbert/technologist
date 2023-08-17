import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./technologistStyle.module.css";
const Technologist = () => {
  return (
    <div className={styles.technologist}>
      <div className={styles.technologisList}>
        <Link to="carduser" className={styles.links}>
       
          Card user
        </Link>

        <Link to="daterange" className={styles.links}>
      
          Date range
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Technologist;
