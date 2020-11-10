import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import s from './Bottom.module.scss';

const Bottom = ({ categories, addTodo }) => {
	const [text, setText] = useState('');
	const [category, setCategory] = useState(null);

	const handleInputChange = (e) => setText(e.target.value);
	const onAddTodo = () => {
		if (text && category) {
			addTodo(text, category);
			setText('');
			setCategory(null);
		}
	};

	return (
		<div className={s.container}>
			<TextField
				onChange={handleInputChange}
				value={text}
				multiline
				rowsMax={5}
				placeholder="Todo text..."
				fullWidth
				InputLabelProps={{
					shrink: true,
				}}
				variant="filled"
				color="secondary"
			/>
			<Autocomplete
				options={categories}
				getOptionLabel={(option) => option}
				style={{ width: 300 }}
				inputValue={category}
				onInputChange={(event, newInputValue) => {
					setCategory(newInputValue);
				}}
				value={category}
				onChange={(event, newValue) => {
					setCategory(newValue);
				}}
				renderInput={(params) => <TextField {...params} label="Choose category" variant="filled" />}
			/>
			<Button onClick={onAddTodo} variant="contained" color="primary">
				Add
			</Button>
		</div>
	);
};

export default Bottom;
