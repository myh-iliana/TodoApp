import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import {
	Done as DoneIcon,
	FiberManualRecord as FiberManualRecordIcon,
	ContactSupport as ContactSupportIcon,
	AllInclusive as AllInclusiveIcon,
} from '@material-ui/icons';

import s from './Sidebar.module.scss';
import { routes } from '../App/App';

const restGroup = [{ text: 'Contact Us', icon: ContactSupportIcon }];

const Sidebar = ({ classes, isVisible, setFilterOption, filterOption }) => {
	const todosGroup = [
		{ text: 'All', icon: AllInclusiveIcon, option: null },
		{ text: 'Active', icon: FiberManualRecordIcon, option: routes.activeTodos },
		{ text: 'Completed', icon: DoneIcon, option: routes.completedTodos },
	];

	return (
		<div className={`${s.sidebar} ${!isVisible && s.hidden}`}>
			<Paper className={classes.paper} square={true} variant="outlined">
				<div>
					<Divider />
					<List>
						{todosGroup.map(({ text, icon: Icon, option }) => (
							<ListItem selected={filterOption === option} onClick={() => setFilterOption(option)} button key={text}>
								<ListItemIcon>
									<Icon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{restGroup.map(({ text, icon: Icon }) => (
							<ListItem button key={text}>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Paper>
		</div>
	);
};

export default Sidebar;
