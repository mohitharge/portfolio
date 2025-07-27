// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Image from 'next/image'
import css from '../../../styles/sections/projects/recent.module.scss'
import { FaCodeBranch, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function GitProjects({ repos, user }) {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={60} width={60}/>
					<span className={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <FaExternalLinkAlt size={20} /></a>
					</span>
				</section>
				<div className={css.projects}>
					{
					repos.map( ({ name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at }, index) => {
						const date = new Date(pushed_at).toDateString()
						return (
							<>
							<article key={index} className={css.project}>
								<span className={css.header}>
									<a href={html_url} rel="noreferrer" target="_blank">{name} <FaExternalLinkAlt size={20} /></a>
									<p className={css.homepage}>{homepage}</p>
								</span>
								<span className={css.descriptionContainer}>
									<p className={css.description}>{description}</p>
								</span>
								<span className={css.details}>
									<p><i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}</p>
									<p><FaStar size={18} /> {watchers}</p>
									<p><FaCodeBranch size={18} /> {forks_count}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
								<span className={css.topicsContainer}>
									{
									topics.map( (e, index) => {
										return ( <span key={index} className={css.topics}><i className="devicon-github-plain"></i> {e}</span> )
									})
									}
								</span>
							</article>
							</>
						)
					})
					}
				</div>
				{/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
			</Container>
		</Section>
	)
}