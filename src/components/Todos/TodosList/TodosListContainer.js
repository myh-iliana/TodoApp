import { connect } from 'react-redux';

import TodosList from './TodosList';
import { deleteTodo } from '../../../store/actions/todos';

const mapStateToProps = (state) => ({
  view: state.app.todosView,
  todos: state.todos.items,
});

const mapDispatchToProps = { deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
