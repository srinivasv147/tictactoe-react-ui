import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from '@material-ui/core/';

class ChallengeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            challenges: [],
        }
    }

    addChallenge(challenge){
        let newState = JSON.parse(JSON.stringify(this.state))
        newState.challenges.push(challenge)
        this.setState(newState);
    }
    
    render() {
        return (
            <Drawer
            variant="temporary"
            open={this.props.isDrawerOpened}
            onClose={this.props.closeDrawer}
            >
                <List>
                    {this.state.challenges.map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }

}

export default ChallengeList;