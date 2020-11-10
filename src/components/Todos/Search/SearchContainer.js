import { connect } from 'react-redux';

import Search from './Search';
import { searchTodos } from '../../../store/actions/filter';

const mapStateToProps = (state) => ({
	searchText: state.filter.text,
});

const mapDispatchToProps = { searchTodos };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
