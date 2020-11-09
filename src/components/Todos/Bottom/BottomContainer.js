import { connect } from 'react-redux';

import Bottom from './Bottom';
import { addTodo } from '../../../store/actions/todos';

const mapStateToProps = (state) => ({
  categories: [...state.todos.categories],
});

const mapDispatchToProps = { addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
