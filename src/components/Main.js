import React, {Component} from 'react';
import Login from './Login';
import useStyles from '../styles/styles';
import { withStyles } from '@material-ui/core/styles';
import GameContainer from './GameContainer';
import { Route } from 'react-router-dom';

class Main extends Component {
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Route exact path="/" render={() => (
              <GameContainer classes={classes}></GameContainer>
          )}/>
          <Route path="/login" render={() => (
            <Login pageType={"LOGIN"} 
            message="Sign in"
            classes={classes}>
          </Login>
          )}/>
          <Route path="/register" render={() => (
            <Login pageType={"REGISTER"} 
            message={"enter unique display name to register"}
            classes={classes}>
            </Login>
          )}/>
        </div>
      );
    }
  }

export default withStyles(useStyles)(Main);