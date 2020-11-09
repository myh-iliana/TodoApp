import { connect } from 'react-redux';

import Slider from './Slider';

const mapStateToProps = (state) => ({
  categories: [...state.todos.categories],
});

export default connect(mapStateToProps)(Slider);
