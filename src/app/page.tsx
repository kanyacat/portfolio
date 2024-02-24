import styles from './page.module.scss'
import GitHubIcon from '@/helpers/icons/github.svg'
import GmailIcon from '@/helpers/icons/gmail.svg'
import WhatsappIcon from '@/helpers/icons/whatsapp.svg'

import Container from '@/components/Container/Container'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>Колесникова Анастасия</h1>
					<h2>Junior frontend developer</h2>
					<div className={styles.info}>
						{' '}
						<p>привет! я не умею подбирать шрифты лол</p>
						<p>
							[здесь будут описания кто я вообще такая когда я это придумаю]
						</p>
					</div>
					<ul className={styles.social}>
						<li>
							<a href='https://github.com/kanyacat' target={'_blank'}>
								<GitHubIcon />
							</a>
						</li>
						<li>
							<a href='mailto:kanyakancat@gmail.com'>
								<GmailIcon />
							</a>
						</li>
						<li>
							<a href='tel:+79520613853'>
								<WhatsappIcon />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}
