import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemText } from '@material-ui/core/';

class ChallengeList extends Component {

    constructor(props){
        super(props);
        this.state={
            isDrawerOpened: false,
        };
    }
    openDrawer = () => {
        this.setState({isDrawerOpened: true,});
    }
    closeDrawer = () => {
        this.setState({isDrawerOpened: false,});
    }
    render() {
        return (
            <Drawer
            variant="temporary"
            open={this.state.isDrawerOpened}
            onClose={this.closeDrawer}
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