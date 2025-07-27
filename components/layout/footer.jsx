import { useState, useEffect } from 'react'
import Container from '../structure/container'
import css from '../../styles/structure/footer.module.scss'
import content from '../../content/footer.json'
import settings from '../../content/_settings.json'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaMedium,
  FaBehance,
  FaFigma,
  FaUpwork,
  FaFreelancer,
} from 'react-icons/fa';

import {
  SiHashnode,
  SiHackerrank,
  SiLeetcode,
} from 'react-icons/si';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  twitter: FaTwitter,
  medium: FaMedium,
  behance: FaBehance,
  figma: FaFigma,
  upwork: FaUpwork,
  freelancer: FaFreelancer,
  hashnode: SiHashnode,
  hackerrank: SiHackerrank,
  leetcode: SiLeetcode,
};

export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch( settings.portfolio.repo_api )
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{content.social.map(({ url, icon }, index) => {
								const IconComponent = iconMap[icon.toLowerCase()];
								if (!IconComponent) return null; // or a fallback icon
								
								return (
									<a key={index} href={url} rel="noreferrer" target="_blank" aria-label={icon}>
										<IconComponent size={24} color="currentColor" />
									</a>
								);
							})}
						</li>
					</ul>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
