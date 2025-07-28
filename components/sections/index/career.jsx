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

export function getDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let mos = end.getMonth() - start.getMonth();

  if (mos < 0) {
    years--;
    mos += 12;
  }

  // Return string like '2 yrs 03 mos', omit years if 0
  return `${years > 0 ? `${years} yrs` : ''} ${mos.toString().padStart(2, '0')} mos`.trim();
}

export default function Career() {

	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					// subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
				/>
				<section className={career.area}>
					<div style={{marginTop:"-5rem", textAlign:"center", marginBottom:"2rem"}}>
						<button className={`button ${button.secondary} leaveSite`}
								onClick={() => window.open("/Mohit_Harge_Frontend_Engineer_Resume.pdf", "_blank")} >
							{`${"Download PDF - July,2025"}`}
						</button>
					</div>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Stelling Technologies (IntrCity, RailYatri)</h3>
								<h4>Permanent, Full-time</h4>
								<h4>
									May 2022 - Present &middot; {getDuration('2022-04-01')}
								</h4>
								<h5>Noida, Uttar Pradesh, India</h5>
							</span>
							<p>
							IntrCity SmartBus is a fleet of branded buses to give a standardized, safe, secure & comfortable bus travel experience. IntrCity SmartBus started operations with 2 cities in early 2019, and as of today we connect over 100 cities PAN India.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* Senior Technology Specialist */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Senior Technology Specialist</h3>
									<h4>Nov 2024 – Present · {getDuration('2024-10-01')}</h4>
								</span>
								<p>
									Responsible for the ideation, planning, and development of new consumer goods and customer/employee facing microservice software. Work collaboratively with key stakeholders and supply chain teams to ensure quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						{/* Technology Specialist */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Technology Specialist</h3>
									<h4>Aug 2022 – Oct 2024 · {getDuration('2022-08-01', '2024-11-01')}</h4>
								</span>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Designed and implemented features such as failed transaction handling and return ticket booking, resulting in a 25% increase in bookings and improved customer retention.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Developed the IntrCity Club feature, which increased loyal and repeat customers.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Optimized site performance leading to a 30% speed improvement.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Transformed XD designs into responsive web pages optimized for all devices.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Integrated dynamic filters and real-time fare APIs to improve user experience and reduce drop-offs.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Implemented debounced search features reducing API calls by 40%.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Applied animations using Intersection Observer API to enhance engagement.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Carried out performance improvements using Webpack, Lighthouse audits, lazy loading, and code splitting to boost Core Web Vitals (LCP/FID/CLS) by 30-50%.
										</span>
									</li>
								</ul>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						{/* Technology Intern */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Technology Intern</h3>
									<h4>May 2022 – July 2022 · {getDuration('2022-05-01', '2022-08-31')}</h4>
								</span>
								<p>
									Supported frontend development with focus on building scalable, maintainable components. Assisted in implementing UI/UX features aligned with company standards.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Business Labs</h3>
								<h4>Internship, Full-time</h4>
								<h4>July 2021 - April 2022 · 10 mos</h4>
								<h5>Hyderabad, Telangana, India</h5>
							</span>
							<p>
							Business Labs, with the help of its members’ expertise, has helped scores of businesses by way of providing purposeful web presence, e-commerce solutions, marketing strategy, optimising their business processes lifecycle and anything under the sun with the help of our communityof hand-picked freelancers and agencies equips this laboratory with the technical know-how with versatile experience and skills.This synergy has pitched in for our customers’ successes.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* Full Stack Web Developer & Project Management Intern */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Full Stack Web Developer & Project Management Intern</h3>
									<h4>Feb 2022 – May 2022 · {getDuration('2022-02-01', '2022-05-31')}</h4>
								</span>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Led a team of 5 interns as Team Lead, effectively managing and delegating tasks for successful project completion.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Developed full-stack web applications with a focus on scalability and maintainability.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Coordinated with stakeholders to align project goals and ensure timely delivery.
										</span>
									</li>
								</ul>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Your Business Labs</h3>
								<h4>Hyderabad, Telangana, India</h4>
							</span>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* Web Development (UI/UX) Intern */}
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Web Development (UI/UX) Intern</h3>
									<h4>July 2021 – Nov 2021 · {getDuration('2021-07-01', '2021-11-30')}</h4>
								</span>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Designed wireframes and built an all-inclusive full-stack platform for Brilliant Directories, resulting in a 40% sales growth and new client acquisition.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Executed UI/UX design for 2 web apps, collaborating with designers and developers to achieve business goals.
										</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>
											Developed comprehensive front-end interfaces, enhancing user experience and delivering visually appealing results.
										</span>
									</li>
								</ul>
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