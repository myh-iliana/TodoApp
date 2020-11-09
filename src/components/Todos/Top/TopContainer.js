import { connect } from 'react-redux';

import Top from './Top';
import { toggleMenu } from '../../../store/actions/app';

const mapStateToProps = (state) => ({
  menuIsVisible: state.app.isMenuVisible,
});

const mapDispatchToProps = { toggleMenu };

export default connect(mapStateToProps, mapDispatchToProps)(Top);
