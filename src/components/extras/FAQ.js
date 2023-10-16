'use client'
import React from "react";
import Faq from "react-faq-component";
import zstyles from './faq.module.css'

const FAQ = () => {
    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "How much does it cost to build a website?",
                content: `The cost of building a website depends on various factors such as the complexity of the design, features required, and functionality. We offer personalized quotes based on your specific needs. Please contact us to discuss your project in detail and get a customized estimate.`,
            },
            {
                title: "How long does it take to create a website?",
                content:
                    "The timeline for website development can vary depending on the scope of the project. Simple websites can be completed within a few weeks, while more complex websites may take several months. We work closely with our clients to establish project timelines and ensure timely delivery.",
            },
            {
                title: "Do you offer website maintenance services?",
                content: `Yes, we provide website maintenance services to ensure your site remains up-to-date, secure, and optimized. Our maintenance packages include regular backups, software updates, security monitoring, and content updates as needed. Contact us for more information on our maintenance plans.`,
            },
            {
                title: "Can you help with website hosting and domain registration?",
                content: "Absolutely! We offer assistance with website hosting and domain registration. We can recommend reliable hosting providers and guide you through the domain registration process to ensure your website is up and running smoothly.",
            },
            {
                title: "Can you assist with illustrations or custom graphics for my website?",
                content: "Absolutely! Our graphic design team can create custom illustrations and graphics that align with your website's design and content. From icons and infographics to detailed illustrations, we can provide visually engaging elements to enhance your website's appeal.",
            },
            {
                title: "What graphic design services do you offer?",
                content: "We offer a wide range of graphic design services, including logo design, branding, brochure design, packaging design, and marketing collateral design. Our team of skilled designers will ensure your visual assets are cohesive and effectively communicate your brand message.",
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };

  return (
    <div className={zstyles.cont}>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />

    </div>
  )
}

export default FAQ