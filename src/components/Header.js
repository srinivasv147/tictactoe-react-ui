import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {

    render() {
        let text;
        const { classes } = this.props;
        if(this.props.showText) {
            text = (<Typography component="h1" variant="h5" 
                        className={classes.toptext}>
                        {this.props.name}
                    </Typography>);
        }
        return(
            <div className={classes.topicon}>
                <Avatar className={classes.avatar}>
                    <img src={this.props.image} alt="logo" />
                </Avatar>
                {text}
            </div>
        );
    }

}

export default Header;