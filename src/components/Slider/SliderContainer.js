import { connect } from 'react-redux';

import Slider from './Slider';
import { setCategoryOption } from '../../store/actions/filter';

const mapStateToProps = (state) => ({
  categories: [...state.todos.categories],
});

const mapDispatchToProps = { setCategoryOption };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
