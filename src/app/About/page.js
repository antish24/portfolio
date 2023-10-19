import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont'
import ContentCont from '@/components/Cards/ContentCont';
import { Url } from '@/helper/Url';
import { SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiCplusplus, SiFigma, SiFirebase, SiFlutter, SiGit, SiHtml5, SiJavascript, SiJsonwebtokens, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiStripe, SiSupabase, SiTailwindcss } from 'react-icons/si';


export const metadata = {
  title: "ISH 24 About",
  description: "Developer and Graphics Designer",
};

async function getBrands() {
  const res = await fetch(`${Url}/api/partners`, {
    cache:'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const AboutPage = async() => {

  const brands=await getBrands()
  const tools= [
    {id:1,logo:<SiAdobephotoshop/>},
    {id:2,logo:<SiAdobeillustrator/>},
    {id:3,logo:<SiAdobeindesign/>},
    {id:4,logo:<SiFigma/>},
    {id:5,logo:<SiReact/>},
    {id:6,logo:<SiNextdotjs/>},
    {id:7,logo:<SiCplusplus/>},
    {id:8,logo:<SiJavascript/>},
    {id:9,logo:<SiNodedotjs/>},
    {id:10,logo:<SiPhp/>},
    {id:11,logo:<SiMysql/>},
    {id:12,logo:<SiMongodb/>},
    {id:13,logo:<SiFlutter/>},
    {id:14,logo:<SiHtml5/>},
    {id:15,logo:<SiTailwindcss/>},
    {id:16,logo:<SiStripe/>},
    {id:17,logo:<SiGit/>},
    {id:18,logo:<SiFirebase/>},
    {id:19,logo:<SiJsonwebtokens/>},
    {id:20,logo:<SiSupabase/>},
    {id:21,logo:<SiPostgresql/>},
  ]

  const introData={id:1,title1:"About Us",title2:"Learn more about our mission and vision.",img:"/about-01.png"}

  const aboutData={
    id:1,header:"More than Digital Development Services",
    info:"Our strategic partner approach helps guarantee a world-class product and impactful business results. That is why we work side by side with you to make optimal strategic decisions that impact your company in a positive way. Whether you are a small startup or a large enterprise, your business matters to us."
  }

  const brandsData={
    id:1,header:"Partner and Brands that Trust Us",
  }

  const toolsData={
    id:1,header:"Technologies We Use",
  }

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
