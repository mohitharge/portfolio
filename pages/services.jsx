import React from 'react'
import SEO from './seo'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Person",
      "name": "Mohit Harge"
    },
    "areaServed": "Global",
    "description": "Discover the web development services offered by Mohit Harge, including responsive design, full-stack development, and UI/UX design.",
    "url": "https://mohitharge.vercel.app/services"
  };
  return (
    <>
      <SEO 
        title="Services - Mohit Harge"
        description="Discover the web development services offered by Mohit Harge, including responsive design, full-stack development, and UI/UX design."
        keywords="Web Development Services, Front-End Development, Full-Stack Development, UI/UX Design"
        author="Mohit Harge"
        image="https://mohitharge.vercel.app/services-image.jpg"
        url="https://mohitharge.vercel.app/services"
        structuredData={structuredData}
      />
      <div style={{ minHeight: "calc(100vh - 200px)", paddingTop:"6rem", width:"90%", margin:"0 auto" }}>
        <Color colors={colors} />
        <h1>Services</h1>
        <p>As a web development expert, I provide a variety of services, including responsive design, full-stack development, and UI/UX design, to turn your ideas into reality.</p>
        <br />
        <h3>Work in Progress...</h3>
        <p>This page is being updated with detailed information and will be available soon.</p>
      </div>
    </>
  )
}

export default Services