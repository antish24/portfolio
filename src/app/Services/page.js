import React from "react";
import styles from "./page.module.css";
import IntroCont from "@/components/Cards/IntroCont";
import ContentCont from "@/components/Cards/ContentCont";
import { AiFillLike, AiOutlineFileDone } from "react-icons/ai";
import { MdGroups } from "react-icons/md";

export const metadata = {
  title: "ISH 24 Services",
  description: "Developer and Graphics Designer",
};

const Services = () => {
  const introData = { id: 1, title1: "Our Services",title2:'Discover the wide range of services we offer.', img: "/service.png" };

  const topdata = {
    id: 1,
    header: "Web and Mobile App Development Services",
    info: "Build a custom software product that fits the needs of your organization. At ISH 24, our development team has over a decade of experience building a wide range of software products, including desktop applications, websites, native mobile apps, web apps, cross-platform apps, and so much more.",
  };

  const midData = {
    id: 1,
    header: "The Process of Bringing an App to Life",
    info: "Technology solutions need to adapt to your specific business needs. That is why our product development team works with your preferred programming languages, operating systems, and development tools. We help you choose the right alternative based on your goals. We are able to provide you with the tech stack you need, whether it is based on Ruby on Rails, Python, Java, or other alternatives.",
  };

  const lastData = {
    id: 1,
    header: "Our Graphic Design Services",
    info: "We bring your brand to life through captivating visuals and thoughtful design. Our graphic design services encompass logo design, branding, and print collateral to elevate your brand identity. Let us create visually stunning solutions that leave a lasting impression.",
  };

  const countData = [
    { id: 1, count: 18, name: "Happy Clients", icon: <AiFillLike /> },
    {
      id: 2,
      count: 74,
      name: "Successful Projects",
      icon: <AiOutlineFileDone />,
    },
    { id: 3, count: 5, name: "Team Members", icon: <MdGroups /> },
  ];

  const CountInfo = {
    id: 1,
    header: "ISH 24 in Numbers over our 4+ year history",
  };

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData} />
        <ContentCont data={CountInfo} counts={countData} />
        <ContentCont data={topdata} />
        <div className={styles.applife}></div>
        <ContentCont data={midData} />
        <div className={styles.graphics}></div>
        <ContentCont data={lastData} />
      </div>
    </div>
  );
};

export default Services;
