import React, {Component} from 'react';
import Login from './Login';
import useStyles from '../styles/styles';
import { withStyles } from '@material-ui/core/styles';

class Main extends Component {
    render() {
      const { classes } = this.props;
      return (
      // <Login pageType={"REGISTER"} 
      // message="enter unique display name to register">
      // </Login>
      <Login pageType={"LOGIN"} 
        message="Sign in"
        classes={classes}>
      </Login>
      );
    }
  }

export default withStyles(useStyles)(Main);