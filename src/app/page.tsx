import styles from './page.module.scss'
import Project from '@/components/Project/Project'
import Main from '@/components/Main/Main'
import axios from 'axios'
import { ProjectProps } from '@/components/Project/Project.props'

export default async function Home() {
	const data = await getProjects()

	return (
		<div className={styles.root}>
			<Main />
			{data?.projects.map((p: ProjectProps) => <Project {...p} key={p.id} />)}
		</div>
	)
}

async function getProjects() {
	try {
		const res = await axios.get<ProjectProps[]>(
			'https://65d6fa3727d9a3bc1d79cd57.mockapi.io/api/portfolio?orderBy=id&order=desc'
		)

		return {
			projects: res.data
		}
	} catch (err) {
		console.log(err) //
	}
}
