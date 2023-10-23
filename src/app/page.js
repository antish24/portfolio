import React from "react";
import styles from "./page.module.css";
import { MdBarChart, MdDesignServices, MdDevices, MdGroups, MdHelpCenter } from "react-icons/md";
import { AiFillLike, AiOutlineFileDone } from 'react-icons/ai'
import IntroCont from "@/components/Cards/IntroCont";
import ContentCont from "@/components/Cards/ContentCont";
import { Url } from "@/helper/Url";

export const metadata = {
  title: "ISH 24 Home",
  description: "Developer and Graphics Designer",
};

async function getBrands() {
  const res = await fetch(`${Url}/api/partners`, { cache: 'no-store', });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getProjects() {
  const res = await fetch(`${Url}/api/projects`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const LandingPage =async () => {

  const brands=await getBrands()
  const projects=await getProjects()
  const works = [
    {
      id: 1,
      img: <MdDevices />,
      title: "Web Development",
      content:
        "Our expertise lies in creating custom websites, responsive web design, e-commerce solutions, content management systems, and providing ongoing website maintenance and support.",
    },
    {
      id: 2,
      img: <MdDesignServices />,
      title: "Graphics Design",
      content:
        "We specialize in logo design, branding and identity design, marketing collateral design, print design, social media graphics, and UI/UX design.",
    },
    {
      id: 3,
      img: <MdBarChart />,
      title: "Digital Marketing",
      content:
        "Our digital marketing services include search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, email marketing campaigns, content creation and marketing, as well as analytics and reporting.",
    },
    {
      id: 4,
      img: <MdHelpCenter />,
      title: "Consultancy",
      content:'With our consultancy services, you can make informed decisions, overcome challenges, and stay ahead in the competitive online market.',
    },
  ];

  const countData=[
    {id:1,count:18,name:'Happy Clients',icon:<AiFillLike />},
    {id:2,count:74,name:'Successful Projects',icon:<AiOutlineFileDone />},
    {id:3,count:5,name:'Team Members',icon:<MdGroups />},
  ]

  const CountInfo={
    id:1,header:"ISH 24 in Numbers",
  }
  
  const introData={id:1,title1:"Welcome to Ish 24",title2:'We provide innovative solutions for your business.',img:"/intro-01.png"}

  const contentData={
    id:1,header:"Quick Insight of What We Do",
    info:"As a product development company,we help businesses ideate, strategize, iterate, and launch their mobile and web apps while keeping cost, timelines, and objectives in mind."
  }
  
  const brandsData={
    id:1,header:"Some of the Brands that Trust Us",
  }

  const projectsData={
    id:1,header:"Recent Projects",
  }

  const testmony={
    id:1,header:"Testimonial",
    info:"Our clients love working with our team. They are thrilled with our professionalism, quality of our work and the results they are getting with the technology we’ve built for them."
  }

  const TestimonialData = [
    {
      id: 1,
      msg: "Outstanding web development services with a keen eye for detail",
      name: "Sarah T",
    },
    {
      id: 2,
      msg: "Impressive expertise in creating visually captivating websites.",
      name: "Mark Maslow",
    },
    {
      id: 3,
      msg: "Highly satisfied with the seamless performance of our new website",
      name: "Mahder Mesfen",
    },
    {
      id: 4,
      msg: "Outstanding web development services with a keen eye for detail",
      name: "Mekonnen",
    },
    {
      id: 5,
      msg: "Exceeded our expectations with their innovative web development solutions.",
      name: "Abiy Ahemed",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <IntroCont {...introData}/>
        <ContentCont data={contentData} work={works}/>
        <ContentCont data={brandsData} brand={brands}/>
        <ContentCont data={projectsData} project={projects}/>
        <ContentCont data={CountInfo} counts={countData}/>
        <ContentCont data={testmony} testmony={TestimonialData}/>
      </div>
    </div>
  );
};

export default LandingPage;
