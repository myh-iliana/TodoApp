import { connect } from 'react-redux';

import ThemeModal from './ThemeModal';
import { resetTheme, setNewTheme } from '../../store/actions/app';

const mapStateToProps = (state) => ({
	colorsName: state.app.colorsName,
});

const mapDispatchToProps = { setNewTheme, resetTheme };

export default connect(mapStateToProps, mapDispatchToProps)(ThemeModal);
