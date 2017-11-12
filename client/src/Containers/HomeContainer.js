import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Get the component
import HomeComponent from '../Components/home.jsx';

// Import actions you'd like to make usable to a component
import { toggleAdminMode } from '../Actions/MainActions.js';

// Map the redux states to props
const mapStateToProps = (state) => ({
    // Admin
    admin: state.home.admin,

    // Globals
    primaryColor: state.home.primaryColor,

    componentData: state.home.componentData,
});

// Map actions to props
const mapDispatchToProps = (dispatch) => ({
    toggleAdminMode: () => (
        dispatch(toggleAdminMode())
    ),
});

// Connects your component to the store using the previously defined functions
export default withRouter(connect(
    mapStateToProps, // Add the states
    mapDispatchToProps // Add the actions
)(HomeComponent)); // Connect them to the component
