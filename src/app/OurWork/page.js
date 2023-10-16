import React from "react";
import styles from "./page.module.css";
import IntroCont from "@/components/Cards/IntroCont";
import ContentCont from "@/components/Cards/ContentCont";
import ProjectCont from "@/components/Cards/ProjectCont";

export const metadata = {
  title: "ISH 24 Our Work",
  description: "Developer and Graphics Designer",
};

const OurWork = () => {
  const introData = {
    id: 1,
    title1: "Projects & Outcomes",
    title2: "Explore our portfolio of successful projects.",
    img: "/working-01.png",
  };

  const topdata = {
    id: 1,
    header: "Why Partner with ISH 24?",
    info: "Our clients love working with our team. They are thrilled with our professionalism, quality of our work and the results they are getting with the technology we’ve built for them.",
  };

  const projects = [
    {
      id: 1,
      title: "Zaahirah Travels",
      url: "http://zaahirahtravels.com",
      info: `Zaahirah travel agency we developed their website using 
    React.js, Node.js, MySQL, and JWT. The dynamic interface enables
     easy navigation, bookings, and secure data management. 
     Collaborating closely, we created a high-performing website 
     showcasing Zaahirah's services, enhancing their online presence.`,
      image: "/zaahirah travels.png",
    },
    {
      id: 2,
      title: "SWED TECH",
      url: "https://swedtech.net/public/public/home",
      info: `We meticulously designed Swedtech's logo and branding to capture 
        their essence. With attention to detail, we crafted a visual identity
         that reflects their professionalism, uniqueness, and commitment 
         to exceptional travel experiences.`,
      image: "/swedtech.png",
    },
    {
      id: 3,
      title: "KUBE COMICS",
      url: "https://www.kubecomicseth.com/",
      info: `We meticulously designed Kube Comics' website logo and branding,
       as well as their social media profiles, including YouTube and podcast 
       logos, profile pictures, and cover images. With a keen eye for detail,
        we ensured that their visual identity remained consistent across all 
        platforms, capturing their unique style and engaging their audience 
        with visually appealing graphics.`,
      image: "/kube-01.png",
    }
    ,{
      id: 4,
      title: "FIKER MILK",
      url: "https://fikirdairy.com/",
      info: `We carefully crafted Fikirmilk's car banners, social media graphics, 
      logo, and branding to make a lasting impression. Our attention to detail ensures 
      that their visual identity remains consistent across platforms, capturing their 
      unique essence and engaging their target audience with captivating designs.`,
      image: "/fikirmilk.jpg",
    },
    {
      id: 5,
      title: "EAGLE COFFEE",
      url: "https://www.myeaglecoffee.com/",
      info: `We skillfully designed office banners, logos, and stickers for Eagle Coffee.
       Our creative approach ensures that their brand stands out in the office environment.
        With attention to detail, we crafted a captivating logo and branding elements that reflec
        t Eagle Coffee's unique identity. The office banners and stickers serve as effective promotional 
        tools, enhancing their brand visibility and creating a welcoming atmosphere for coffee enthusiasts.`,
      image: "/eagle coffee.jpg",
    }
    ,{
      id: 6,
      title: "AVI ICT",
      url: "https://www.kubecomicseth.com/",
      info: `We delivered a comprehensive design package for Avi ICT, including business cards, logo design, 
      social media graphics, and branding. Our focus on detail and creativity resulted in visually appealing
       business cards, a captivating logo, engaging social media graphics, and a cohesive brand identity that 
       helped Avi ICT stand out in the market.`,
      image: "/avi ict.png",
    },
    {
      id: 7,
      title: "ACORDIA",
      url: "/",
      info: `We created a distinctive logo for Acordia Mining Company that captures their unique identity and showcases
       their expertise in the mining industry. Our design reflects their commitment to excellence, innovation, and
        sustainability, establishing a strong visual presence for the company.`,
      image: "/acordia-01.png",
    }
    ,{
      id: 8,
      title: "TRUST MEDICAL",
      url: "/",
      info: `We designed a professional logo for Trust Medical Equipment Import and Export that embodies their trustworthiness 
      and expertise in the industry. The logo reflects their commitment to providing reliable and high-quality medical
       equipment solutions, establishing a strong and recognizable brand identity in the import and export market.`,
      image: "/trust.png",
    }
  ];

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData} />
        {projects.map((list) => (
          <ProjectCont key={list.id} {...list} />
        ))}
        <div className={styles.applife}></div>
        <ContentCont data={topdata} />
      </div>
    </div>
  );
};

export default OurWork;
