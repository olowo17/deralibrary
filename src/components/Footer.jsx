import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className="flex justify-around text-white">
        <p>Dera bookshop&#169; {new Date().getFullYear()}</p>
        <div className="grid">
          <span>Email: derabookshop@yahoo.co.uk</span>
          <span>Telephone:+1(413)-8292-011</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
