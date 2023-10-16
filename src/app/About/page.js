import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont'
import ContentCont from '@/components/Cards/ContentCont';
import {SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiAndroid, SiCplusplus, SiCss3, SiFigma, SiFirebase, SiFlutter, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiSupabase} from 'react-icons/si'
import {FaJava, FaReact} from 'react-icons/fa'


export const metadata = {
  title: "ISH 24 About",
  description: "Developer and Graphics Designer",
};

const AboutPage = () => {
  const introData={id:1,title1:"About Us",title2:"Learn more about our mission and vision.",img:"/intro-01.png"}

  const aboutData={
    id:1,header:"More than Digital Development Services",
    info:"Our strategic partner approach helps guarantee a world-class product and impactful business results. That is why we work side by side with you to make optimal strategic decisions that impact your company in a positive way. Whether you are a small startup or a large enterprise, your business matters to us."
  }

  const brandsData={
    id:1,header:"Partner and Brands that Trust Us",
  }

  const brands=[
    {id:1,img:'/tri.png',name:'tri'},
    {id:2,img:'/uriah.png',name:'uriah'},
    {id:3,img:'/trust.png',name:'trust'},
    {id:4,img:'/avi ict.png',name:'avi ict'},
    {id:5,img:'/swed tech-01.png',name:'swed tech'},
    {id:6,img:'/kube-01.png',name:'kube comics'},
    {id:7,img:'/eagle coffee.jpg',name:'eagle coffee'},
    {id:8,img:'/fikirtruck.jpg',name:'fikir'},
    {id:9,img:'/zaahirah travels.png',name:'zaahirah'},
    {id:9,img:'/acordia-01.png',name:'Acordia'},
    {id:9,img:'/tcc.jpg',name:'tcc'},
    {id:9,img:'/siket.jpg',name:'siket'},
  ]


  const toolsData={
    id:1,header:"Technologies We Use",
  }


  const tools=[
    {id:1,img:<FaReact size={70}/>,name:'React'},
    {id:2,img:<SiNextdotjs size={70}/>,name:'Next'},
    {id:3,img:<FaJava size={70}/>,name:'Java'},
    {id:4,img:<SiJavascript size={70}/>,name:'Java Script'},
    {id:5,img:<SiFirebase size={70}/>,name:'Firebase'},
    {id:21,img:<SiPhp size={70}/>,name:'Php'},
    {id:6,img:<SiMongodb size={70}/>,name:'Mongodb'},
    {id:7,img:<SiMysql size={70}/>,name:'Mysql'},
    {id:8,img:<SiFlutter size={70}/>,name:'Flutter'},
    {id:9,img:<SiNodedotjs size={70}/>,name:'Node js'},
    {id:10,img:<SiCplusplus size={70}/>,name:'C++'},
    {id:11,img:<SiSupabase size={70}/>,name:'SupBase'},
    {id:12,img:<SiHtml5 size={70}/>,name:'Html'},
    {id:13,img:<SiCss3 size={70}/>,name:'Css'},
    {id:14,img:<SiAdobephotoshop size={70}/>,name:'Photoshop'},
    {id:15,img:<SiAdobeillustrator size={70}/>,name:'Illustrator'},
    {id:16,img:<SiFigma size={70}/>,name:'Figma'},
    {id:17,img:<SiAdobeindesign size={70}/>,name:'Indesign'},
    {id:18,img:<SiAdobepremierepro size={70}/>,name:'Premierepro'},
    {id:19,img:<SiGit size={70}/>,name:'Git'},
    {id:20,img:<SiAndroid size={70}/>,name:'Android'},
  ]

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData}/>
        <ContentCont data={aboutData}/>
        <ContentCont data={brandsData} brand={brands}/>
        <ContentCont data={toolsData} tools={tools}/>
      </div>
    </div>
  )
}

export default AboutPage