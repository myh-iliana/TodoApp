import React, { useState } from 'react';
import { IconButton, Tooltip, AppBar, Toolbar, Button, Input  } from '@material-ui/core';
import {
	MenuOpen as MenuOpenIcon,
	ArrowForwardIos,
	Add as AddIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import s from './Top.module.scss';
import { GridIcon, TableIcon } from '../../elements/icons/icons';
import SearchContainer from '../Search/SearchContainer';
import DateSelect from '../DateSelect/DateSelect';

const useStyles = makeStyles((theme) => ({
	root: {
		color: 'white',
	},
	underline: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.42) !important',
	},
}));

const Top = ({ toggleMenu, toggleView, menuIsVisible, view, addCategory, setDateOption }) => {
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
      setCategory('');
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

						<SearchContainer />

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

					<div className={s.right}>
						<DateSelect setDateOption={setDateOption} />
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
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Top;
