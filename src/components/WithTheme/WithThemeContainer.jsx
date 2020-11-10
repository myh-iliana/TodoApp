import { connect } from 'react-redux';

import WithTheme from './WithTheme';

const mapStateToProps = (state) => ({
	primary: state.app.colors.primary,
	secondary: state.app.colors.secondary,
	textPrimary: state.app.colors.textPrimary,
	textSecondary: state.app.colors.textSecondary,
	contrastTextPrimary: state.app.colors.contrastTextPrimary,
	contrastTextSecondary: state.app.colors.contrastTextSecondary,
});

export default connect(mapStateToProps)(WithTheme);
