import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Challenger extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            //convert this to autocomplete later
            <div className={classes.challenger}>
                <Typography variant="subtitle1">
                    next challenge : 
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user id"
                        label="Opponent User Id"
                        name="userId"
                        autoComplete="Opponent User Id"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Challenge
                    </Button>
                </form>
            </div>
        );
        
    }

}

export default Challenger;