import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

class Players extends Component {

    renderPlayers(player1, player2, vs){
        if(player1 !== null){
            return (<div>{player1}{vs}{player2}</div>);
        }
        else{
            return(<div>there is no game in progress</div>);
        }
    }

    render() {
        const { classes } = this.props;
        const vs = <span className={classes.bullet}>vs</span>;
        return (
            <div className={classes.scorecard}>
                <Typography className={classes.players} 
                variant="h5" component="h2">
                    {
                        this.renderPlayers(this.props.player1
                            , this.props.player2, vs)
                    }
                </Typography>
            </div>
        );
    }

}

export default Players;