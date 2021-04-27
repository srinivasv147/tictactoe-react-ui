import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChallengeDTO from '../dto/ChallengeDTO'

class Challenger extends Component {

    constructor(props){
        super(props);
        this.state = {
            challengeUserId : "",
        }
        this.createChallenge = this.createChallenge.bind(this);
        this.updateChallengeUser = this.updateChallengeUser.bind(this);
    }

    updateChallengeUser(event){
        this.setState({challengeUserId : event.target.value});
    }

    createChallenge(event){
        event.preventDefault();
        console.log(this.props.sender);
        this.props.sender(JSON.stringify(
                new ChallengeDTO(null
                    , this.state.challengeUserId
                    , this.props.user.userId
                    , true)));
    }
    
    render() {
        const { classes } = this.props;
        return (
            //convert this to autocomplete later
            <div className={classes.challenger}>
                <Typography variant="subtitle1">
                    next challenge : 
                </Typography>
                <form className={classes.form} 
                onSubmit={this.createChallenge}
                noValidate>
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
                        onChange={this.updateChallengeUser}
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