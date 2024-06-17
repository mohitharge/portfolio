// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'
import Color  from '../../components/utils/page.colors.util'
import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'
import SEO from '../seo'

export default function Projects({ user, repos }) {
	const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mohit Harge's Projects",
    "description": "Explore the projects developed by Mohit Harge, showcasing skills in full-stack development, UI/UX design, and more.",
    "url": "https://mohitharge.vercel.app/projects",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://mohitharge.vercel.app/projects/car-rental-agency",
        "name": "Car Rental Agency",
        "description": "Developed a secure Login and Registration system with built-in validations. Designed and integrated multiple registration roles for agency and customer on the application."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://mohitharge.vercel.app/projects/collection-corner",
        "name": "Collection Corner",
        "description": "Final year project developed using HTML5, CSS3, Bootstrap, PHP, JavaScript, Ajax, jQuery, and MySQL."
      }
    ]
  };

	return (
		<>
			<SEO 
        title="Projects - Mohit Harge"
        description="Explore the projects developed by Mohit Harge, showcasing skills in full-stack development, UI/UX design, and more."
        keywords="Projects, Full-Stack Development Projects, UI/UX Design Projects, Mohit Harge"
        author="Mohit Harge"
        image="https://mohitharge.vercel.app/projects-image.jpg"
        url="https://mohitharge.vercel.app/projects"
        structuredData={structuredData}
      />
		<Color colors={colors} />
		<FeaturedProjects />
		{/* <GitRecentProjects user={user} repos={repos} /> */}
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes, gitReposRes] = await Promise.all( [
		fetch(`https://api.github.com/users/${settings.username.github}`),
		fetch(`https://api.github.com/users/${settings.username.github}/repos`),
	] )
	
	let [ user, repos] = await Promise.all( [
		gitUserRes.json(),
		gitReposRes.json(), 
	] )

	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
				const timestamp = Math.floor(new Date(pushed_at) / 1000)
				return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter( (e, i) => {
			if ( i < 8 && ! e.topics.includes('github-config')) return e
			return false
		})
	}

	if (!repos || !user) { return { notFound: true,	} }

	return { props: { repos, user } }
}