import { connect } from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
  isVisible: state.app.isMenuVisible,
});

export default connect(mapStateToProps)(Sidebar);
