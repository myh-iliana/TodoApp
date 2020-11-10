import React, { useState } from 'react';
import { IconButton, Tooltip, AppBar, Toolbar, InputBase, Button, Input } from '@material-ui/core';
import {
	MenuOpen as MenuOpenIcon,
	Search as SearchIcon,
	ArrowForwardIos,
	Add as AddIcon,
} from '@material-ui/icons';
import { makeStyles, fade } from '@material-ui/core/styles';

import s from './Top.module.scss';
import { GridIcon, TableIcon } from '../../elements/icons/icons';

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '400px',
		},
	},
	root: {
		color: 'white',
	},
	underline: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.42) !important',
	},
}));

const Top = ({ toggleMenu, toggleView, menuIsVisible, view, addCategory }) => {
	const [addCategoryMode, setAddCategoryMode] = useState(false);
	const [category, setCategory] = useState('');
	const classes = useStyles();
	const tableView = view === 'table';
	const gridView = view === 'grid';

	const toggleMenuVisibility = () => toggleMenu();
	const toggleTodosView = (value) => toggleView(value);
	const onStartAddCategory = () => setAddCategoryMode(true);
	const onFinishAddCategory = (e) => {
    if (e.keyCode === 13) {
      setAddCategoryMode(false);
      addCategory(category);
    }
  };
	const handleChangeCategory = (e) => setCategory(e.target.value);

	return (
		<>
			<AppBar position="static" color="primary">
				<Toolbar className={s.container}>
					<div className={s.left}>
						<Tooltip title="Hide/open left menu" enterDelay={800}>
							<IconButton
								onClick={toggleMenuVisibility}
								className={s.menuButton}
								color="inherit"
								component="span"
							>
								{menuIsVisible ? <MenuOpenIcon /> : <ArrowForwardIos />}
							</IconButton>
						</Tooltip>

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>

						{!addCategoryMode && (
							<Button
								onClick={onStartAddCategory}
								color="inherit"
								className={classes.button}
								startIcon={<AddIcon />}
							>
								Add category
							</Button>
						)}
						{addCategoryMode && (
							<Input
                onKeyDown={onFinishAddCategory}
								className={`${classes.root} ${classes.underline}`}
								variant="filled"
								placeholder="Enter name"
								value={category}
								onChange={handleChangeCategory}
							/>
						)}
					</div>

					<Tooltip title="Click to change todos view" enterDelay={800}>
						<IconButton
							onClick={() => {
								tableView && toggleTodosView('grid');
								gridView && toggleTodosView('table');
							}}
							className={s.menuButton}
							color="inherit"
							component="span"
						>
							{gridView && <TableIcon />}
							{tableView && <GridIcon />}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Top;
