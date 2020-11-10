import React, { useState } from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from '@material-ui/core';
import { SketchPicker } from 'react-color';

import s from './ThemeModal.module.scss';

const ThemeModal = ({ setNewTheme, colorsName, resetTheme }) => {
	const [open, setOpen] = useState(false);
	const [color, setColor] = useState(false);
	const [themePart, setThemePart] = useState();

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleThemePart = (value) => setThemePart(value);
	const onResetTheme = () => resetTheme();
	const handleChangeComplete = (color) => {
		setColor(color);
		setNewTheme(themePart, color.hex);
	};

	return (
		<div>
			<Button color="inherit" onClick={handleClickOpen}>
				CHANGE THEME
			</Button>
			<Dialog open={open} keepMounted onClose={handleClose}>
				<DialogTitle>Change app theme</DialogTitle>
				<DialogContent>
					<DialogContentText>Click the button which color to set and then choose it.</DialogContentText>
					<div className={s.colorsAndButtons}>
						<SketchPicker color={color} onChangeComplete={handleChangeComplete} />
						<div className={s.buttons}>
							{colorsName.map(({ name, text }) => (
								<Button
									className={themePart === name && s.active}
									onClick={() => handleThemePart(name)}
									color="secondary"
								>
									{text}
								</Button>
							))}
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={onResetTheme} color="primary" variant='outlined'>
						Reset theme
					</Button>
					<Button onClick={handleClose} color="primary" variant='outlined'>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ThemeModal;
