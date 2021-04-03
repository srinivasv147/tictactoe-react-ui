import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Players extends Component {

    render() {
        const { classes } = this.props;
        const vs = <span className={classes.bullet}>vs</span>;
        return (
            <Card className={classes.scorecard}>
                <CardContent>
                <Typography 
                className={classes.title} 
                color="textSecondary" gutterBottom>
                    players
                </Typography>
                <Typography className={classes.players} 
                variant="h5" component="h2">
                    {this.props.player1}{vs}{this.props.player2}
                </Typography>
                </CardContent>
            </Card>
        );
    }

}

export default Players;