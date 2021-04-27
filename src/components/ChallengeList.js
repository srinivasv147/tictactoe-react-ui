import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from '@material-ui/core/';

class ChallengeList extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <Drawer
            variant="temporary"
            open={this.props.isDrawerOpened}
            onClose={this.props.closeDrawer}
            >
                <List>
                    {['player1', 'player2'].map((text, index) => (
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