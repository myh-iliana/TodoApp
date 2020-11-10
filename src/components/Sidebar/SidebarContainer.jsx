import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import { setFilterOption } from '../../store/actions/filter';

const mapStateToProps = (state) => ({
  isVisible: state.app.isMenuVisible,
  filterOption: state.filter.filterOption,
});

const mapDispatchToProps = { setFilterOption };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
