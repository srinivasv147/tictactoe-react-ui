import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Avatar className={classes.avatar}>
                    <img src={this.props.image} alt="logo" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {this.props.name}
                </Typography>
            </div>
        );
    }

}

export default Header;