import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Get the component
import RouterComponent from '../router/index.jsx';

// Import actions you'd like to make usable to a component
// import { updateLocation } from '../Actions/MainActions';

// Map the redux states to props
const mapStateToProps = (state) => ({
    loadingScreen: state.main.loadingScreen,
});

// Map actions to props
// const mapDispatchToProps = (dispatch) => ({
// });

// Connects your component to the store using the previously defined functions
export default withRouter(connect(
    mapStateToProps, // Add the states
    // mapDispatchToProps // Add the actions
)(RouterComponent)); // Connect them to the component
