import { useState } 		from 'react';
import { TypeAnimation } 	from 'react-type-animation';

import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import space		from '../../utils/spacing.util';

import Icon 		from '../../utils/icon.util'

import HeroBg		from '../../blocks/hero.bg/bg-color-1';

import hero 		from '../../../styles/sections/index/hero.module.scss';
import button 		from '../../../styles/blocks/button.module.scss';

import content		from '../../../content/index/hero.json'
import { isDesktop } from '../../helperhooks/helperhooks';


/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {

	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation className={`${hero.preHeader}`}
					sequence={[
						content.intro.startDelay,
						() => { setTypingStatus('typing') },
						content.intro.start,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.end,
						() => {	setTypingStatus('deleted') },
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>
					{content.header.name}
					</h1>
					<h1 className={`${hero.header} ${hero.primaryDim}`}>
						{content.header.usp}
					</h1>
					<br />
					<div style={{display:"flex", alignItems:"center", gap:"8px"}}>
            <i className="devicon-vscode-plain"></i> <h3>{content.header.des1}</h3> |
						<i className="devicon-figma-plain"></i> <h3> {content.header.des3}</h3> |
            <i className="devicon-devicon-plain"></i> <h3> {content.header.des2}</h3>
					</div>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
						{ content.paragraph }
					</p>					
						<button className={`button ${button.primary}`} onClick={() => 
								window.open("https://www.linkedin.com/in/mohitharge/", "_blank")
						}>
								{content.buttons.primary.title}
						</button>
						<button className={`button ${button.secondary} leaveSite`}
						onClick={(e) => {
								e.preventDefault();
								isDesktop ? window.alert('Please mail to hargemohit@gmail.com') :
								window.location.href = 'mailto:hargemohit@gmail.com';
						}}>
							{content.buttons.secondary.title}
						</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}