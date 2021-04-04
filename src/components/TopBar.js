import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import tictactoeLogo from '../tictactoe.svg';
import Header from './Header';

class TopBar extends Component {

    render() {
        const { classes } = this.props;
        return(
            <AppBar position="static">
                <Toolbar>
                    <Header
                    classes={classes}
                    image={tictactoeLogo}
                    name={"TicTacToe"}
                    showText={false}
                    ></Header>
                    <IconButton edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        );
    }

}

export default TopBar;