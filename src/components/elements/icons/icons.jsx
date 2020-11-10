import React from 'react';
import { Delete, Edit, GridOn, TableChart } from '@material-ui/icons';

import styles from './icons.module.scss';

export const DeleteIcon = (props) => {
  return <Delete className={styles.delete} {...props} />;
};

export const EditIcon = (props) => {
  return <Edit className={styles.edit} {...props} />;
};

export const TableIcon = (props) => {
  return <TableChart {...props} />;
};

export const GridIcon = (props) => {
  return <GridOn {...props} />;
};