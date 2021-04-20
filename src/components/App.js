import Main from './Main';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;