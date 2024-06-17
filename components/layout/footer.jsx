import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

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
					{/* <ul className={css.thanks}>
						<li><h4>Acknowledgments</h4></li>
						{
						content.acknowledgments.map( ({ person, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul> */}
					{/* <ul className={css.links}>
						<li><h4>Links</h4></li>
						{
						content.links.map( ({ person, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul> */}
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a key={index} href={url} rel="noreferrer" target="_blank">{icon == "leetcode" ? <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg> : icon == "upwork" ? <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="upwork"><rect width="5.493" height=".134" x="1.75"></rect><rect width="5.493" height=".134" x="16.757"></rect><path d="M18.561,5.024c-2.539,0-4.51,1.648-5.31,4.362c-1.22-1.832-2.148-4.032-2.687-5.887H7.828v7.105c-0.002,1.405-1.141,2.543-2.547,2.545c-1.405-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.37,5.298,5.281,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.529,1.106,1.182,2.227,1.974,3.218L10.865,20.5h2.797l1.213-5.705c1.063,0.678,2.285,1.108,3.686,1.108c3,0,5.439-2.45,5.439-5.445C24,7.461,21.561,5.024,18.561,5.024z M18.561,13.157c-1.102,0-2.135-0.467-3.074-1.226l0.228-1.075l0.008-0.042c0.207-1.142,0.849-3.057,2.839-3.057c1.492,0,2.703,1.211,2.703,2.7C21.264,11.945,20.053,13.157,18.561,13.157z"></path></svg> : icon == "freelancer" ? <svg fill="#000000" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>freelancer</title> <path d="M9.832 16.769l4.128 4.434 4.552-4.461 1.412-8.313-5.547-0.285zM9.323 16.254l4.37-8.15-12.689-0.689zM6.158 4.849l1.071 2.199 5.916 0.367zM17.772 4.848l-2.988 2.692 5.026 0.187zM7.881 27.152l5.591-5.466-3.364-3.611zM18.619 4.848l2.042 2.864 10.334-2.864z"></path> </g></svg> : <Icon icon={[ 'fab', icon ]} />}</a>
								)
							})
							}
						</li>
					</ul>
				</section>
				{/* <section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<h5>{settings.portfolio.forkthis}</h5>
						<ul>
							<li>
								<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
							</li>
							<li>
								<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
							</li>
						</ul>
					</a>
				</section> */}
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
