import { connect } from 'react-redux';

import Top from './Top';
import { toggleMenu, toggleView } from '../../../store/actions/app';

const mapStateToProps = (state) => ({
  menuIsVisible: state.app.isMenuVisible,
  view: state.app.todosView,
});

const mapDispatchToProps = { toggleMenu, toggleView };

export default connect(mapStateToProps, mapDispatchToProps)(Top);
