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

class GameContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            wsToken: null,
            chalDrawerOpened: false,
        }
        this.sendChallenge = this.sendChallenge.bind(this);
        this.openChalDrawer = this.openChalDrawer.bind(this);
        this.closeChalDrawer = this.closeChalDrawer.bind(this);
        this.handleWsMessage = this.handleWsMessage.bind(this);
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
            this.chalComp.addChallenge(msg.challenger);
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
                ref={(component) => { this.chalComp = component } }/>
                <Container component="main" maxWidth="md">
                    <div className={classes.gamecontainer}>
                        <Players classes={classes}
                        player1={"player1"} player2={"player2"}>
                        </Players>
                        <Game 
                        classes={classes}
                        game={this.props.game}></Game>
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