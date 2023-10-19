import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont'
import ContentCont from '@/components/Cards/ContentCont';
import { Url } from '@/helper/Url';


export const metadata = {
  title: "ISH 24 About",
  description: "Developer and Graphics Designer",
};

async function getBrands() {
  const res = await fetch(`${Url}/api/partners`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTools() {
  const res = await fetch(`${Url}/api/tools`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const AboutPage = async() => {

  const brands=await getBrands()
  const tools= await getTools()

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
