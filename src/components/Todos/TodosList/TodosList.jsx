import React from 'react';

import s from './TodosList.module.scss';
import TodosTableView from '../TodosTableView/TodosTableView';
import TodosGridView from '../TodosGridView/TodosGridView';

const TodosList = ({ view, todos, deleteTodo }) => {
  if (todos.length === 0) {
    return <div className={s.noTodos}>No todos yet...</div>
  }

  return (
    <>
      {view === 'table' && <TodosTableView todos={todos} deleteTodo={deleteTodo} />}
      {view === 'grid' && <TodosGridView todos={todos} deleteTodo={deleteTodo} />}
    </>
  );
};

export default TodosList;
