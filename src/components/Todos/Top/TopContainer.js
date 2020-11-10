import { connect } from 'react-redux';

import Top from './Top';
import { toggleMenu, toggleView } from '../../../store/actions/app';
import { addCategory } from '../../../store/actions/todos';
import { setDateOption } from '../../../store/actions/filter';

const mapStateToProps = (state) => ({
  menuIsVisible: state.app.isMenuVisible,
  view: state.app.todosView,
});

const mapDispatchToProps = { toggleMenu, toggleView, addCategory, setDateOption };

export default connect(mapStateToProps, mapDispatchToProps)(Top);
