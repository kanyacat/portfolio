import styles from './page.module.scss'
import Project from '@/components/Project/Project'
import Main from '@/components/Main/Main'
import axios from 'axios'

export default async function Home() {
	const data = await getProjects()

	console.log(data.projects)

	return (
		<div className={styles.root}>
			<Main />
			{data?.projects.map((p: any) => <Project {...p} />)}
		</div>
	)
}

export async function getProjects() {
	try {
		const res = await axios.get(
			'https://65d6fa3727d9a3bc1d79cd57.mockapi.io/api/portfolio?orderBy=id&order=desc'
		)

		return {
			projects: res.data
		}
	} catch (err) {
		console.log(err)
	}
}
