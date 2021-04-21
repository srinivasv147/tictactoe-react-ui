import React, {Component} from 'react';
import Login from './Login';
import useStyles from '../styles/styles';
import { withStyles } from '@material-ui/core/styles';
import GameContainer from './GameContainer';
import { Route } from 'react-router-dom';

class Main extends Component {
    render() {
      console.log(this.props.user);
      const { classes } = this.props;
      return (
        <div>
          <Route exact path="/" render={() => (
              <GameContainer classes={classes}></GameContainer>
          )}/>
          <Route path="/login" render={(params) => (
            <Login pageType={"LOGIN"} 
            message="Sign in"
            classes={classes}
            {...this.props}{...params}>
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