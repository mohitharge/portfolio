import React from 'react'
import SEO from './seo'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'
import Career from '../components/sections/index/career'
import Looking from '../components/sections/index/looking'
import Technical from '../components/sections/index/technical'
import button 		from '../styles/blocks/button.module.scss';
import { isDesktop } from '../components/helperhooks/helperhooks'

const Resume = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohit Harge",
    "jobTitle": "Front-End Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Stelling Technologies"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Dr. Babasaheb Ambedkar Technological University"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Front-End Developer",
      "skills": [
        "React.js",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Git and Version Control",
        "PHP",
        "Next.js",
        "Bootstrap",
        "RESTful APIs",
        "User Interface Design",
        "Python",
        "JavaScript (ES6+)",
        "jQuery",
        "API Integration",
        "MySQL"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/mohitharge/",
      "https://github.com/mohitharge"
    ]
  };

  return (
    <>
      <SEO 
        title="Resume - Mohit Harge"
        description="View the professional resume of Mohit Harge, a Front-End Developer with experience in web development, including skills in React.js, HTML5, CSS3, and more."
        keywords="Resume, Front-End Developer Resume, Web Developer Resume, Mohit Harge Resume"
        author="Mohit Harge"
        image="https://mohitharge.vercel.app/resume-image.jpg"
        url="https://mohitharge.vercel.app/resume"
        structuredData={structuredData}
      />
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <div style={{marginTop:"8rem", textAlign:"center", marginBottom:"-4rem"}}>
          <button className={`button ${button.secondary} leaveSite`}
              onClick={() => window.open("/resume.pdf", "_blank")} >
            {`${isDesktop ? "Download Resume PDF - June,2024" : "Download PDF - June,2024"}`}
          </button>
        </div>
        <Color colors={colors} />
        <Career />
        <Looking />
        <Technical />
      </div>
    </>
  )
}

export default Resume

