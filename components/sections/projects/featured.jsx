import FeaturedProject from '../../blocks/projects/featured'
// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'
import personalcontent 		from '../../../content/projects/personalfeatured.json'
import { useRouter } from 'next/router';

export default function FeaturedProjects() {
	const router = useRouter()
	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Front-End | Full Stack | UI-UX"
					subTitle="Focused on the experience, driven by the engineering."
				/> 				
				{router.asPath.includes("/projects") && 
				<>
				{
					personalcontent.map( (data, index) => {
						return (
							<FeaturedProject content={data} index={index} key={index} />
						)
					})
				}
				<div style={{height:"96vh", display:"flex"}}>
					<iframe style={{border:"1px solid rgba(0, 0, 0, 0.1)", borderRadius:"1rem"}} width="100%" height="100%"
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6oMEjxidlhPI3d1p8YY6GG%2FFood-App%3Fnode-id%3D2-9946%26t%3DOoKRSa1vSZl3KQoG-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A9946%26show-proto-sidebar%3D1" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
				</div>
				</>
				}
				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}