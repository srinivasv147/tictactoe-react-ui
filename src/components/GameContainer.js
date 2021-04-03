import React, {Component} from 'react';
import Header from './Header';
import tictactoeLogo from '../tictactoe.svg';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Players from './Players';

class GameContainer extends Component {

    render() {

        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.gamecontainer}>
                    <Header
                    classes={classes}
                    image={tictactoeLogo}
                    name={"TicTacToe"}
                    ></Header>
                    <Players classes={classes}
                    player1={"player1"} player2={"player2"}>
                    </Players>
                </div>
            </Container>
        );
    }

}

export default GameContainer;