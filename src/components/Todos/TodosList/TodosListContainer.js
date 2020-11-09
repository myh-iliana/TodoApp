import { connect } from 'react-redux';

import TodosList from './TodosList';

const mapStateToProps = (state) => ({
  view: state.app.todosView,
});

export default connect(mapStateToProps)(TodosList);
