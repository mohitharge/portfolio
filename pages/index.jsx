import Hero from '../components/sections/index/hero'
import Looking from '../components/sections/index/looking'
import About from '../components/sections/index/about'
import Technical from '../components/sections/index/technical'
import Career from '../components/sections/index/career'
import FeaturedProjects from '../components/sections/projects/featured'
import Color from '../components/utils/page.colors.util'
import colors from '../content/index/_colors.json'
import SEO from './seo'

export default function HomePage() {
	const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohit Harge",
    "url": "https://mohitharge.vercel.app/",
    "image": "/public/img/homethumbnail.png",
    "jobTitle": "Front-End Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "IntrCity SmartBus"
    },
    "sameAs": [
      "https://www.linkedin.com/in/mohitharge/",
      "https://github.com/mohitharge"
    ]
  };
	return (
		<>
			<SEO 
        title="Mohit Harge - Software Engineer"
        description="Experienced Front-End Developer with a demonstrated history of working in the web development industry. Skilled in React.js, HTML5, CSS3, and responsive design."
        keywords="Front-End Developer, React.js, Next.js, Web Development, HTML5, CSS3, Portfolio, Software Engineer, Javascript"
        author="Mohit Harge"
        image="https://raw.githubusercontent.com/mohitharge/portfolio/main/public/img/mythumbnail.png"
        url="https://mohitharge.vercel.app/"
        structuredData={structuredData}
      />
			<Color colors={colors} />
			<Hero />
			<Looking />
			<FeaturedProjects />
			<About />
			<Technical />
			<Career />
		</>
	);
}