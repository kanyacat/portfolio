import React from 'react'
import styles from './Container.module.scss'

const Container = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div className={styles.root}>{children}</div>
}

export default Container
