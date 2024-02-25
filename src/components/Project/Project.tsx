import React from 'react'
import { ProjectProps } from '@/components/Project/Project.props'
import styles from './Project.module.scss'
import Container from '@/components/Container/Container'

const Project = ({
	id,
	name,
	url,
	img,
	github,
	color
}: ProjectProps): JSX.Element => {
	return (
		<li className={styles.root} key={id} style={{ backgroundColor: color }}>
			<Container>
				<div className={styles.preview}>
					<a href={url} target='_blank'>
						<img src={img} alt={name} />
					</a>
					<a href={github}>[ Github ]</a>
				</div>
			</Container>
		</li>
	)
}

export default Project
