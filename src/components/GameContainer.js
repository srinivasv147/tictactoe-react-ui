import React, {Component} from 'react';
import Header from './Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Players from './Players';
import Game from './Game';
import Challenger from './Challenger';
import TopBar from './TopBar';
import ChallengeList from './ChallengeList';
import axios from 'axios';
import SockJsClient from 'react-stomp';
import TwoPGameDTO from '../dto/TwoPGameDTO';
import GameStateDTO from '../dto/GameStateDTO';

class GameContainer extends Component {

    constructor(props){
        super(props);
        let gameState = new GameStateDTO(true
            , false, [0,0,0,0,0,0,0,0,0], "UNDECIDED")
        this.state = {
            wsToken: null,
            chalDrawerOpened: false,
            game: new TwoPGameDTO(null, null, null, gameState, null),
        }
        this.sendChallenge = this.sendChallenge.bind(this);
        this.openChalDrawer = this.openChalDrawer.bind(this);
        this.closeChalDrawer = this.closeChalDrawer.bind(this);
        this.handleWsMessage = this.handleWsMessage.bind(this);
        this.acceptChallenge = this.acceptChallenge.bind(this);
        this.sendNewMove = this.sendNewMove.bind(this);
    }

    modifyState(key, val){
        let newState = JSON.parse(JSON.stringify(this.state));
        newState[key] = val;
        this.setState(newState);
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/get-ws-ticket",
        {
            headers : {
                'Authorization': ('Bearer '+ this.props.user.jwt)
            }
        }
        ).then((response) => {
            console.log(response.data.jwt);
            this.modifyState("wsToken",response.data.jwt);
        });
    }

    sendChallenge(){
        return (msg) => {
            console.log(msg);
            this.wsSender.sendMessage('/app/challenge', msg);
        }
    }

    sendNewMove(){ // this function needs to be made better
        return (index) => {
            let newGame = JSON.parse(
                JSON.stringify(this.state.game));
            if(this.state.game.nextMoveX !== null &&
                (this.props.user.userId === this.state.game.xUser 
                && this.state.game.nextMoveX )) {
                    newGame.gameState.gameState[index] = 1;
                    newGame.nextMoveX = false;
                    this.modifyState("game", newGame);
                    this.wsSender.sendMessage('/app/game-move'
                    , JSON.stringify(newGame));
                } 
            else if(this.state.game.nextMoveX !== null &&
                (this.props.user.userId === this.state.game.oUser 
                    && !this.state.game.nextMoveX)){
                    newGame.gameState.gameState[index] = -1;
                    newGame.nextMoveX = true;
                    this.modifyState("game", newGame);
                    this.wsSender.sendMessage('/app/game-move',
                    JSON.stringify(newGame));
            }

        }
    }

    acceptChallenge(){
        return (msg) => {
            console.log(msg);
            this.wsSender.sendMessage('/app/accept-challenge', msg);
        }
    }

    openChalDrawer(){
        return ()=>{
            this.modifyState("chalDrawerOpened", true);
        }
    }

    closeChalDrawer(){
        return ()=> {
            this.modifyState("chalDrawerOpened", false);
        }
    }

    handleWsMessage(msg){
        if(msg.hasOwnProperty('challengee') 
        && msg.hasOwnProperty('challenger')){
            //this ensures that we have a challenge
            console.log(msg);
            this.chalComp.addChallenge(msg);
        }
        else if(msg.hasOwnProperty('xUser')
        && msg.hasOwnProperty('oUser')){
            //this ensures that we have a game
            console.log(msg);
            this.modifyState("game", msg);
        }
        else{
            console.log(msg);
        }
    }

    render() {
        const { classes } = this.props;
        //convert this into a spinning loading icon to make it look good.
        if(this.state.wsToken === null) return <div>Loading...</div>;
        else return (
            <div>
                <SockJsClient 
                url={'http://localhost:8080/api/websok?token='
                +this.state.wsToken}
                topics={['/user/queue/challenge','/user/queue/game']}
                onMessage={(msg) => { this.handleWsMessage(msg); }}
                ref={ (client) => { this.wsSender = client }} />
                <CssBaseline />
                <TopBar classes={classes}
                openDrawer={this.openChalDrawer()}/>
                <ChallengeList 
                isDrawerOpened={this.state.chalDrawerOpened}
                closeDrawer={this.closeChalDrawer()}
                ref={(component) => { this.chalComp = component } }
                chalAcceptor={this.acceptChallenge()}/>
                <Container component="main" maxWidth="md">
                    <div className={classes.gamecontainer}>
                        <Players classes={classes}
                        player1={this.state.game.xUser} 
                        player2={this.state.game.oUser}>
                        </Players>
                        <Game 
                        sendMove = {this.sendNewMove()}
                        classes={classes}
                        game={this.state.game.gameState.gameState}>
                        </Game>
                        <Challenger sender={this.sendChallenge()} 
                        classes={classes} 
                        { ...this.props }/>
                    </div>
                </Container>
            </div>
        );
    }

}

export default GameContainer;