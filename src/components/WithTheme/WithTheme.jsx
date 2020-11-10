import React, { useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const WithTheme = ({
	children,
	primary,
	secondary,
	textPrimary,
	textSecondary,
	contrastTextPrimary,
	contrastTextSecondary,
}) => {
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: primary || '#3f51b5',
				contrastText: contrastTextPrimary || '#fff',
			},
			secondary: {
				main: secondary || '#f50057',
				contrastText: contrastTextSecondary || '#fff',
			},
			text: {
				primary: textPrimary || 'rgba(0, 0, 0, 0.87)',
				secondary: textSecondary || 'rgba(0, 0, 0, 0.54)',
			},
		},
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WithTheme;
