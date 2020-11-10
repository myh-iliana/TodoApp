import { connect } from 'react-redux';

import Slider from './Slider';
import { setCategoryOption } from '../../store/actions/filter';

const mapStateToProps = (state) => ({
  categories: [...state.todos.categories],
  selectedCategory: state.filter.category,
});

const mapDispatchToProps = { setCategoryOption };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
