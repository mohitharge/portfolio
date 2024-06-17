import React from 'react'
import SEO from './seo'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'
import About from '../components/sections/index/about'

const AboutMe = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohit Harge",
    "url": "https://mohitharge.vercel.app/about",
    "image": "https://mohitharge.vercel.app/about-me-image.jpg",
    "jobTitle": "Front-End Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Stelling Technologies"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Dr. Babasaheb Ambedkar Technological University"
    },
    "sameAs": [
      "https://www.linkedin.com/in/mohitharge/",
      "https://github.com/mohitharge"
    ]
  };

  return (
    <>
      <SEO 
        title="About Me - Mohit Harge"
        description="Learn more about Mohit Harge, an experienced Front-End Developer with a passion for creating responsive and user-friendly web applications."
        keywords="About Front-End Developer, Mohit Harge, Web Developer, Portfolio"
        author="Mohit Harge"
        image="https://mohitharge.vercel.app/about-me-image.jpg"
        url="https://mohitharge.vercel.app/about"
        structuredData={structuredData}
      />
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Color colors={colors} />
        <About />
      </div>
    </>
  )
}

export default AboutMe