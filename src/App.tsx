import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutApp from 'containers/AboutApp'
import Quotes from 'containers/Quotes'
import injectSheet from 'react-jss'
import Container from 'components/Container'

const style = {
	'@global': {
		html: {
			height: '100%',
			width: '100%',
			fontFamily: 'sans-serif',
			lineHeight: 1.15,
		},
		body: {
			height: '100%',
			width: '100%',
			margin: 0,
			fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
			color: '#212529',
			textAlign: 'left',
			backgroundColor: '#fff',
		},
	},
}

const App = () => (
	<Container>
		<Switch>
			<Route path="/" exact component={AboutApp} />
			<Route path="/test" component={Quotes} />
		</Switch>
	</Container>
)

export default injectSheet(style)(App)
