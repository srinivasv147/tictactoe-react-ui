import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from '@material-ui/core/';

class ChallengeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            challenges: [],
        }
        this.acceptChallenge = this.acceptChallenge.bind(this);
    }

    addChallenge(challenge){
        let newState = JSON.parse(JSON.stringify(this.state))
        newState.challenges.push(challenge)
        this.setState(newState);
    }

    acceptChallenge(index){
        return () => {
            this.props.chalAcceptor(JSON.stringify(
                this.state.challenges[index]));
        }
    }
    
    render() {
        return (
            <Drawer
            variant="temporary"
            open={this.props.isDrawerOpened}
            onClose={this.props.closeDrawer}
            >
                <List>
                    {this.state.challenges.map((challenge, index) => (
                    <ListItem button key={index} 
                    onClick={this.acceptChallenge(index)}>
                        <ListItemText primary={challenge.challenger} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }

}

export default ChallengeList;