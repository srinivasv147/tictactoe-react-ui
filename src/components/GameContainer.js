import React, {Component} from 'react';
import Header from './Header';
import tictactoeLogo from '../tictactoe.svg';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Players from './Players';
import Game from './Game';
import Challenger from './Challenger';

class GameContainer extends Component {

    render() {

        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="md">
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
                    <Game 
                    classes={classes}
                    game={[1,-1,0,0,0,0,-1,1,0]}></Game>
                    <Challenger classes={classes}></Challenger>
                </div>
            </Container>
        );
    }

}

export default GameContainer;