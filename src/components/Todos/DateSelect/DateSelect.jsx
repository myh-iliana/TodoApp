import React from 'react';
import { MenuItem, Select, FormControl, InputBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { setDateOption } from '../../../store/actions/filter';

const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			backgroundColor: 'white',
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

const DateSelect = ({ setDateOption }) => {
	const classes = useStyles();
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
		setDateOption(event.target.value);
	};

	return (
		<FormControl className={classes.margin}>
			<Select
				value={age}
				onChange={handleChange}
				input={<BootstrapInput />} label='Filter by date'
			>
				<MenuItem value="">None</MenuItem>
				<MenuItem value="today">Today</MenuItem>
				<MenuItem value="week">This week</MenuItem>
				<MenuItem value="month">This month</MenuItem>
			</Select>
		</FormControl>
	);
};

export default DateSelect;
