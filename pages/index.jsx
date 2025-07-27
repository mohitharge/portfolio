import dynamic from 'next/dynamic';

// Eagerly load critical / above-the-fold component(s)
import Hero from '../components/sections/index/hero';
import colors from '../content/index/_colors.json'

// Dynamic imports for other sections with Suspense fallback
const Looking = dynamic(() => import('../components/sections/index/looking'), {
  loading: () => <div>Loading...</div>,
});
const FeaturedProjects = dynamic(() => import('../components/sections/projects/featured'), {
  loading: () => <div>Loading...</div>,
});
const About = dynamic(() => import('../components/sections/index/about'), {
  loading: () => <div>Loading...</div>,
});
const Technical = dynamic(() => import('../components/sections/index/technical'), {
  loading: () => <div>Loading...</div>,
});
const Career = dynamic(() => import('../components/sections/index/career'), {
  loading: () => <div>Loading...</div>,
});
const Color = dynamic(() => import('../components/utils/page.colors.util'), {
  loading: () => null,
});

import SEO from './seo'
import LazyLoad from '../components/utils/LazyLoad';

export default function HomePage() {
	const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohit Harge",
    "url": "https://mohitharge.vercel.app/",
    "image": "/public/img/mythumbnail.jpg",
    "jobTitle": "Software Engineer",
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
      {/* Load Hero immediately */}
      <Hero />

      {/* Lazy load sections individually on scroll */}
      <LazyLoad><Color colors={colors} /></LazyLoad>
      <LazyLoad><Looking /></LazyLoad>
      <LazyLoad><FeaturedProjects /></LazyLoad>
      <LazyLoad><About /></LazyLoad>
      <LazyLoad><Technical /></LazyLoad>
      <LazyLoad><Career /></LazyLoad>
		</>
	);
}