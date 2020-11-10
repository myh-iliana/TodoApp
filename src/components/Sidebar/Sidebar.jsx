import React from 'react';
import {Divider, List, ListItem, ListItemIcon, ListItemText, Paper} from '@material-ui/core';
import {
  Done as DoneIcon,
  FiberManualRecord as FiberManualRecordIcon,
  ContactSupport as ContactSupportIcon,
} from '@material-ui/icons';

import s from './Sidebar.module.scss';

const todosGroup = [
  { text: 'Active', icon: FiberManualRecordIcon },
  { text: 'Completed', icon: DoneIcon },
];

const restGroup = [
  { text: 'Contact Us', icon: ContactSupportIcon },
  ];

const Sidebar = ({ classes, isVisible }) => {
  return (
      <div className={`${s.sidebar} ${!isVisible && s.hidden}`}>
        <Paper className={classes.paper} square={true} variant="outlined">
          <div>
            <Divider />
            <List>
              {todosGroup.map(({ text, icon: Icon }) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <Icon color='secondary' />
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
