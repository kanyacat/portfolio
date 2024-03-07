'use client'

import React from 'react'
import { ProjectProps } from '@/components/Project/Project.props'
import styles from './Project.module.scss'
import Container from '@/components/Container/Container'
import { motion } from 'framer-motion'

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
					<a className={styles.link} href={url} target='_blank'>
						<motion.img src={img} alt={name} whileHover={{ scale: 1.03 }} />
					</a>
					<motion.a
						href={github}
						target={'_blank'}
						className={styles.git}
						whileHover={{ scale: 1.05 }}
					>
						GitHub
					</motion.a>
				</div>
			</Container>
		</li>
	)
}

export default Project
