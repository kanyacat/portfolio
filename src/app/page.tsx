import styles from './page.module.scss'
import Project from '@/components/Project/Project'
import Main from '@/components/Main/Main'

export default function Home() {
	return (
		<div className={styles.root}>
			<Main />
			<Project
				name={'meow'}
				github={'meow'}
				id={1}
				img={
					'https://sun30-1.userapi.com/impg/mSs2-HKBdtiJEuPxNUkJbGplflrh-L8kZwu2Sw/Wb44WwfSfoI.jpg?size=884x1080&quality=96&sign=51ddfdc959423a4cd3ccc547b78c8592&type=album'
				}
				url={'https://catwar.su/'}
				color={'white'}
			/>
		</div>
	)
}
