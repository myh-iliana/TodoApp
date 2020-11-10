import { connect } from 'react-redux';

import Top from './Top';
import { toggleMenu, toggleView } from '../../../store/actions/app';
import { addCategory } from '../../../store/actions/todos';

const mapStateToProps = (state) => ({
  menuIsVisible: state.app.isMenuVisible,
  view: state.app.todosView,
});

const mapDispatchToProps = { toggleMenu, toggleView, addCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Top);
