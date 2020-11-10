import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import {
	Done as DoneIcon,
	FiberManualRecord as FiberManualRecordIcon,
	AllInclusive as AllInclusiveIcon,
} from '@material-ui/icons';

import styles from './Sidebar.module.scss';
import ContactUsDialog from '../ContactUsDialog/ContactUsDialog';
import { filterTodos } from '../../variables';

const Sidebar = ({ classes, isVisible, setFilterOption, filterOption }) => {
	const todosGroup = [
		{ text: 'All', icon: AllInclusiveIcon, option: null },
		{ text: 'Active', icon: FiberManualRecordIcon, option: filterTodos.state.active },
		{ text: 'Completed', icon: DoneIcon, option: filterTodos.state.completed },
	];

	const onSetFilterOption = (option) => setFilterOption(option);

	return (
		<div className={`${styles.sidebar} ${!isVisible && styles.hidden}`}>
			<Paper className={classes.paper} square={true} variant="outlined">
				<div>
					<Divider />
					<List>
						{todosGroup.map(({ text, icon: Icon, option }) => (
							<ListItem
								selected={filterOption === option}
								onClick={() => onSetFilterOption(option)}
								button
								key={text}
							>
								<ListItemIcon>
									<Icon color="secondary" />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						<ContactUsDialog />
					</List>
				</div>
			</Paper>
		</div>
	);
};

export default Sidebar;
