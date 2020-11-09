import { connect } from 'react-redux';

import TodosList from './TodosList';

const mapStateToProps = (state) => ({
  view: state.app.todosView,
  todos: state.todos.items,
});

export default connect(mapStateToProps)(TodosList);
