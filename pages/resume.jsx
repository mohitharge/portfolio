import React from 'react'
import SEO from './seo'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'
import Career from '../components/sections/index/career'
import Looking from '../components/sections/index/looking'
import Technical from '../components/sections/index/technical'

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
        title="Resume - Mohit Harge | Senior Front-End Engineer, React & Full-Stack Developer"
        description="View the professional resume of Mohit Harge, a Senior Front-End Engineer specialized in React, full-stack web development, UI/UX design, and performance optimization. Explore his expertise and project achievements."
        keywords="Mohit Harge, Senior Front-End Engineer, React Developer, Full-Stack Developer, UI/UX Design, Web Development, Resume, Software Engineer, Front-End Developer"
        author="Mohit Harge"
        url="https://mohitharge.vercel.app/resume"
        structuredData={structuredData}
      />
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Color colors={colors} />
        <Career />
        <Looking />
        <Technical />
      </div>
    </>
  )
}

export default Resume

