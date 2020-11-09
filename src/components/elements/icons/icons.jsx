import React from 'react';
import { Delete, Edit, GridOn, TableChart } from '@material-ui/icons';

import s from './icons.module.scss';

export const DeleteIcon = (props) => {
  return <Delete className={s.delete} {...props} />;
};

export const EditIcon = (props) => {
  return <Edit className={s.edit} {...props} />;
};

export const TableIcon = (props) => {
  return <TableChart {...props} />;
};

export const GridIcon = (props) => {
  return <GridOn {...props} />;
};