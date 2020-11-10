import { connect } from 'react-redux';

import TodosList from './TodosList';
import { deleteTodo, editTodo, toggleCompleted, updateTodo } from '../../../store/actions/todos';

const mapStateToProps = (state) => ({
  view: state.app.todosView,
  todos: state.todos.items,
});

const mapDispatchToProps = { deleteTodo, editTodo, updateTodo, toggleCompleted };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
