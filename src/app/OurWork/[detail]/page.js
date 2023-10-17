import React from "react";
import styles from "./page.module.css";
import TypingAnimation from "@/components/extras/TypingAnimation";

export async function generateMetadata({ params }) {
  return {
    title: params.detail,
  };
}

const Detailpage = ({ params }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.imgbox}>
          <img src={"/zaahirahweb.jpg"} />
        </div>
        <div className={styles.infobox}>
            <span>
          <TypingAnimation textData1={params.detail.replace('%20', ' ')} textData2={`${params.detail.replace('%20', ' ')} Project Overview`}/>
            </span>
          <div className={styles.infos}>
            The project aims to create a comprehensive and user-friendly travel
            website using the React framework for the frontend, Node.js for the
            backend, and MySQL as the database management system.
          </div>
          <div className={styles.infos}>
            The website will serve as a platform for users to explore and book
            various travel services offered by Zaahira Travels.
          </div>
          <div className={styles.infos}>
            The use of React for the frontend, Node.js for the backend, and
            MySQL for the database ensures a robust and scalable solution. The
            seamless integration of various features and secure payment options
            will provide an enhanced user experience.
          </div>
          <div className={styles.infos}>
            The Zaahira Travels website project aims to create a comprehensive
            and user-friendly travel website using the React framework for the
            frontend, Node.js for the backend, and MySQL as the database
            management system.
          </div>
        </div>
        <div className={styles.toolsbox}>
          <span>Tool Used</span>
          <div className={styles.lists}>
            <button>React js</button>
            <button>Node js</button>
            <button>Mysql</button>
            <button>Stripe</button>
            <button>Git</button>
            <button>Cpanel</button>
          </div>
        </div>
        <div className={styles.linkbox}>
          <span>See Project</span>
          <a
            className={styles.bcode}
            href="https://github.com/antish24/portfolio"
            target="_blank"
          >
            Browse Code
          </a>
          <a
            className={styles.live}
            href="https://zaahirahtravels.com"
            target="_blank"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
