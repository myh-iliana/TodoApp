import React from 'react';
import { Delete, Edit, GridOn, TableChart } from '@material-ui/icons';

import s from './icons.module.scss';

export const DeleteIcon = () => {
  return <Delete className={s.delete} />;
};

export const EditIcon = () => {
  return <Edit className={s.edit} />;
};

export const TableIcon = () => {
  return <TableChart />;
};

export const GridIcon = () => {
  return <GridOn />;
};