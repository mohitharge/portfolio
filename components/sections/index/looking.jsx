// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I’m looking for opportunities to work on impactful, projects as a</h4>
				<h2 className={looking.json}>Senior : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Front-End Engineer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>User Experience Designer</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I am particularly interested in product-focused frontend development roles where I can help drive organization-wide impact.</h4>
				<h2>Senior <span className={looking.highlight}>Front-End Engineer</span></h2>
				<p className="subtitle">with a focus on building seamless, user-centric web applications.</p>
			</Container>
		</Section>
	)
}