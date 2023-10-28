import React from "react";
import styles from "./footer.module.css";
import GetInTouch from "../button/GetInTouch";
import {CurrentDate} from "./CurrentDate";

const Footer = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.logobox}>
          <div className={styles.logo}>ISH 24</div>
          <GetInTouch/>
        </div>
        <div className={styles.topbox}>
          <div className={styles.works}>
            <h2>Our Specialities</h2>
            <div className={styles.listbox}>
            <div className={styles.lists}>
              <span>E-commerce Development</span>
              <span>Front-end Development</span>
              <span>Back-end Development</span>
              <span>Website Maintenance and Support</span>
              <span>Responsive Web Design</span>
            </div>
            <div className={styles.lists}>
              <span>Branding and Identity Design</span>
              <span>Social Media Graphics</span>
              <span>Infographic Design</span>
              <span>UI/UX Design</span>
              <span>Motion Graphics and Animation</span>
            </div>
            </div>
          </div>
          <div className={styles.location}>
            <h2>Locations</h2>
            <span>Abenem Build 5<sup>th</sup> Floor Office No 404 Addis Abeba, Ethiopia</span>
            <span>Hawassa, Ethiopia</span>
          </div>
        </div>
        <div className={styles.bodybox}>
        © 2019 - {CurrentDate} ISH 24, Inc. All Rights Reserved. Privacy policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
