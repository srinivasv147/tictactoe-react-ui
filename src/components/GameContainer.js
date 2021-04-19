import React, {Component} from 'react';
import Header from './Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Players from './Players';
import Game from './Game';
import Challenger from './Challenger';
import TopBar from './TopBar';
import ChallengeList from './ChallengeList'

class GameContainer extends Component {

    render() {

        const { classes } = this.props;
        return (
            <div>
                <CssBaseline />
                <TopBar classes={classes}/>
                <ChallengeList />
                <Container component="main" maxWidth="md">
                    <div className={classes.gamecontainer}>
                        <Players classes={classes}
                        player1={"player1"} player2={"player2"}>
                        </Players>
                        <Game 
                        classes={classes}
                        game={[1,-1,0,0,0,0,-1,1,0]}></Game>
                        <Challenger classes={classes}></Challenger>
                    </div>
                </Container>
            </div>
        );
    }

}

export default GameContainer;