'use client'

import styles from './Main.module.scss'
import GitHubIcon from '@/helpers/icons/github.svg'
import GmailIcon from '@/helpers/icons/gmail.svg'
import WhatsappIcon from '@/helpers/icons/whatsapp.svg'
import Container from '@/components/Container/Container'

export default function Main() {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>Колесникова Анастасия</h1>
					<h2>Junior frontend developer</h2>
					<div className={styles.info}>
						<p>Вы находитесь на странице моих пет-проектов</p>
						<p>
							Заканчиваю Тверской государственный технический университет по
							специальности Прикладная информатика в экономике.
						</p>
						<p>Занимаюсь фронтенд-разрабкой чуть больше года.</p>
						<p>
							Всё это время проходила интернет-курсы и занималась самообучением.
						</p>
						<p>
							Вы можете посмотреть мои работы или же связаться со мной по
							ссылкам ниже.
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
