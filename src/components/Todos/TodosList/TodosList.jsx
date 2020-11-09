import React from 'react';

// import s from './TodosList.module.scss';
import TodosTableView from '../TodosTableView/TodosTableView';
import TodosGridView from '../TodosGridView/TodosGridView';

const todos = [
  {text: 'Drafts'},
  {text: 'fgh trh trh trh treh rth trh treh treh treh rteh treh treh retyh56j67j67 j 76 j764j 67j 675j 657j 67j 76j 67j fdsfffff sdfssss wqeeeeeeh dfgodjfgeriferf end'},
  {text: 'fghfg hfgh rgfh rt trh trh trh trh treh rth trh treh treh treh rteh treh treh retyh56j67j67 j 76 j764j 67j 675j 657j 67j 76j 67j fdsfffff sdfssss wqeeeeeeh dfgodjfgeriferf end'},
  {text: 'Games'},
  {text: 'fghrt retyh56j67j67 j 76 j764j 67j 675j 657j 67j 76j 67j fdsfffff sdfssss wqeeeeeeh dfgodjfgeriferf end'},
  {text: 'fghfg hfgh rgfh rt trh trh trh trh treh rth trh treh treh treh rteh treh treh retyh56j67j67 j 76 j764j 67j 675j 657j 67j 76j 67j fdsfffff sdfssss wqeeeeeeh dfgodjfgeriferf end'},
  {text: 'Games'},
  {text: 'Games'},
];

const TodosList = ({ view }) => {
  return (
    <>
      {view === 'table' && <TodosTableView todos={todos} />}
      {view === 'grid' && <TodosGridView todos={todos} />}
    </>
  );
};

export default TodosList;
