// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'
import button 		from '../../../styles/blocks/button.module.scss';
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'
import { isDesktop } from '../../helperhooks/helperhooks';

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
				/>
				<section className={career.area}>
					<div style={{marginTop:"-5rem", textAlign:"center", marginBottom:"2rem"}}>
						<button className={`button ${button.secondary} leaveSite`}
								onClick={() => window.open("/resume.pdf", "_blank")} >
							{`${isDesktop ? "Download Resume PDF - June,2024" : "Download PDF - June,2024"}`}
						</button>
					</div>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Stelling Technologies (IntrCity, RailYatri)</h3>
								<h4>Permanent, Full-time</h4>
								<h4>May 2022 - Present · 2 yrs 02 mos</h4>
								<h5>Noida, India</h5>
							</span>
							<p>
							IntrCity SmartBus is a fleet of branded buses to give a standardized, safe, secure & comfortable bus travel experience. IntrCity SmartBus started operations with 2 cities in early 2019, and as of today we connect over 100 cities PAN India.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Technology Specialist</h3>
									<h4>May 2022 - Present · 2 yrs 02 mos</h4>
								</span>
								{/* <p>
								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
								</p> */}
								<p>
								Some key features integration during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Designed IntrCity Club Feature which lead to loyal and repeat customers.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Developed new functionalities such as failed transaction handling and return ticket booking, resulting in a
										25% increase in bookings and improved customer retention.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Optimized site performance through enhancements, resulting in a 30% improvement in speed.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Transformed XD&apos;s into fully responsive web pages, optimizing their display on a variety of devices</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						{/* <div className={career.position}>
							<div className={career.positionContent}>
									<span className={career.positionHeader}>
										<h3>Front End Developer & User Interface Designer</h3>
										<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									</span>
								<p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive shopping cart to replace cart page
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li>
									<li>Complex multi-state animated menus represented in an elegant UI 
										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
									</li>
									<li>
										Design and development of the site and merchandising strategy optimized for market
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}
					</article>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Business Labs</h3>
								<h4>Internship, Full-time</h4>
								<h4>July 2021 - April 2022 · 10 mos</h4>
								<h5>Hyderabad, India</h5>
							</span>
							<p>
							Business Labs, with the help of its members’ expertise, has helped scores of businesses by way of providing purposeful web presence, e-commerce solutions, marketing strategy, optimising their business processes lifecycle and anything under the sun with the help of our communityof hand-picked freelancers and agencies equips this laboratory with the technical know-how with versatile experience and skills.This synergy has pitched in for our customers’ successes.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Project Management Intern</h3>
									<h4>Dec 2021 - Jan 2022 · 02 mos</h4>
								</span>
								<p>
								I am responsible for leading a team of 5 interns in the ideation, planning, and development of projects. In this role, I manage and delegate tasks effectively to ensure successful project completion, working closely with key stakeholders to meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Intern</h3>
									<h4>Aug 2021 - Nov 2021 · 04 mos</h4>
								</span>
								<p>
								As the lead full stack developer, I am responsible for designing wireframes and building an all-inclusive full-stack platform for Brilliant Directories, which resulted in a 40% growth in sales and attracted new clients to the business. I have successfully executed the UI/UX design for two projects, collaborating effectively with a team of graphic designers and developers to achieve project goals. Additionally, I developed comprehensive front-end interfaces for these projects, enhancing user experience and delivering visually appealing results.
								</p>
								<p>
								Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Designed wireframes and built an All-inclusive full-stack platform for Brilliant Directories, resulting in a 40% growth in sales and attracting new clients to the business. </span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Successfully executed the UI/UX design for 2 projects, collaborating effectively with a team of graphic designers and developers to achieve project goals. </span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Developed comprehensive front-end interfaces for 2 projects, enhancing user experience, and delivering visually appealing results</span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'Node.js', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'redux', name: 'Redux', type: 'devicon' },
  { key: 'nextjs', name: 'Next.js', type: 'devicon' },
  { key: 'webpack', name: 'webpack', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'jquery', name: 'jQuery', type: 'devicon' },
  { key: 'webpack', name: 'webpack', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'tailwindcss', name: 'Tailwind CSS', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'laravel', name: 'Laravel', type: 'devicon' },
  { key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'xd', name: 'XD', type: 'devicon' },
]