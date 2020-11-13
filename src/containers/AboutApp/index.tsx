import React from 'react'
import Button from 'components/Button'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	button: {
		background: 'rgba(90, 206, 249, 1)',
		width: 200,
		margin: 'auto',
	},
})

const AboutApp: React.FC = () => {
	const classes = useStyles()
	return (
		<Button to="/test" className={classes.button}>
			Перейти к котировкам
		</Button>
	)
}

export default AboutApp
