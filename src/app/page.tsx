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
					<h1>Имя фамилия</h1>
					<p>привет! я не умею подбирать шрифты лол</p>
					<p> [здесь будут описания кто я вообще такая когда я это придумаю]</p>
					<GitHubIcon />
					<GmailIcon />
					<WhatsappIcon />
				</div>
			</Container>
		</div>
	)
}
