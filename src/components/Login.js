import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import GoogleButton from 'react-google-button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import tictactoeLogo from '../tictactoe.svg';

class Login extends Component {

    renderGoogleButton(classes) {
        return (
            <div>
                <GoogleButton className={classes.google}
                onClick={() => { 
                    console.log('Google button clicked');
                }} />
                <FormControlLabel className={classes.google}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            </div>
        );
    }

    renderUserIdForm(classes) {
        return (
            <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="user id"
                    label="User Id"
                    name="userId"
                    autoComplete="User Id"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Register
                </Button>
            </div>
        );
    }

    renderProperContent(classes, pageType) {
        if(pageType === "LOGIN"){
            return this.renderGoogleButton(classes);
        }
        else if(pageType === "REGISTER"){
            return this.renderUserIdForm(classes);
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Header 
                    classes={classes}
                    image={tictactoeLogo}
                    name={"TicTacToe"}
                >
                </Header>
                <Typography variant="subtitle1">
                    {this.props.message}
                </Typography>
                <form className={classes.form} noValidate>
                    { 
                    this.renderProperContent(classes, this.props.pageType) 
                    }
                </form>
            </div>
            </Container>
        );
    }

}

export default Login;