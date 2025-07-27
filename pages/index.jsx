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
        description="Portfolio of Mohit Harge, Senior Front-end Engineer specializing in React and full-stack development."
        keywords="Mohit Harge, Portfolio, React Developer, JavaScript Developer, Front-end Engineer, Software Developer"
        author="Mohit Harge"
        url="https://mohitharge.vercel.app"
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