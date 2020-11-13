import React from 'react'
import Button from 'components/Button'
import { createUseStyles } from 'react-jss'
import useInterval from 'containers/hooks/useInterval'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTicket } from 'redux/actions'
import QuotesTable from 'components/QuotesTable'
import LoadingIndicator from 'components/LoadingIndicator'
import { IState } from 'types'

const useStyles = createUseStyles({
	button: {
		background: 'rgba(90, 206, 249, 1)',
		padding: '10px 20px',
		width: 100,
		display: 'fixed',
		top: 10,
		left: 10,
	},
})

const Quotes: React.FC = () => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const quotes = useSelector((state: { quotes: IState }) => state.quotes.data)
	const error = useSelector((state: { quotes: IState }) => state.quotes.error)

	useInterval(() => {
		dispatch(fetchTicket())
	})

	if (quotes.length === 0) {
		return <LoadingIndicator />
	}

	const columns = [
		{
			name: 'Name',
			cell: 'name',
		},
		{
			name: 'last',
			cell: 'last',
		},
		{
			name: 'highestBid',
			cell: 'highestBid',
		},
		{
			name: 'percentChange',
			cell: 'percentChange',
		},
	]

	return (
		<>
			<Button to="/" className={classes.button}>
				Назад к "О приложении"
			</Button>
			<QuotesTable data={quotes} columns={columns} error={error} />
		</>
	)
}

export default Quotes
