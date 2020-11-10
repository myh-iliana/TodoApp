import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Input = ({ oldText, updateTodo, id }) => {
	const [text, setText] = useState(oldText);

	const handleChange = (e) => setText(e.target.value);
	const onUpdateTodo = () => updateTodo(id, text);

	return <TextField
		onChange={handleChange}
		onBlur={onUpdateTodo}
		value={text}
		multiline
		rowsMax={5}
		placeholder="Todo text..."
		fullWidth
		InputLabelProps={{
			shrink: true,
		}}
		variant="standard"
		color='secondary'
	/>;
};

export default Input;
