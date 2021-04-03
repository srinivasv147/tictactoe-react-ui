import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

class Players extends Component {

    render() {
        const { classes } = this.props;
        const vs = <span className={classes.bullet}>vs</span>;
        return (
            <div className={classes.scorecard}>
                <Typography className={classes.players} 
                variant="h5" component="h2">
                    {this.props.player1}{vs}{this.props.player2}
                </Typography>
            </div>
        );
    }

}

export default Players;