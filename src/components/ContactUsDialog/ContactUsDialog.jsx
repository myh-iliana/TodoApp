import React, { useState } from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Dialog,
	Button,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
} from '@material-ui/core';
import { ContactSupport as ContactSupportIcon } from '@material-ui/icons';

// import s from './ContactUsDialog.module.scss';

const ContactUsDialog = () => {
	const [open, setOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const resetForm = () => {
		setUsername('');
		setEmail('');
		setMessage('');
	};

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		resetForm();
	};
	const handleUsernameChange = (e) => setUsername(e.target.value);
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handleMessageChange = (e) => setMessage(e.target.value);
	const handleResetForm = () => resetForm();
	const handleSubmit = () => {
		console.log('submitted');
		resetForm();
	};

	return (
		<>
			<ListItem button onClick={handleClickOpen}>
				<ListItemIcon>
					<ContactSupportIcon />
				</ListItemIcon>
				<ListItemText primary="Contact Us" />
			</ListItem>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To contacht us, please enter your username, email address and message here.
					</DialogContentText>
					<form noValidate>
						<TextField
							onChange={handleUsernameChange}
							value={username}
							autoFocus
							margin="dense"
							label="Username"
							type="text"
							fullWidth
							color="secondary"
						/>
						<TextField
							onChange={handleEmailChange}
							value={email}
							autoFocus
							margin="dense"
							label="Email Address"
							type="email"
							fullWidth
							color="secondary"
						/>
						<TextField
							onChange={handleMessageChange}
							value={message}
							multiline
							rows={5}
							margin="dense" label='Message'
							fullWidth
							color="secondary"
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleResetForm} color="primary">
						Reset
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ContactUsDialog;
