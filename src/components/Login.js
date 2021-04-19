import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { GoogleLogin } from 'react-google-login';
import tictactoeLogo from '../tictactoe.svg';

class Login extends Component {

    onGoogleResponse(){
        return (response) => {
            console.log("got response");
            console.log(response);
        }
    }

    onGoogleFailure(){
        return (response) => {
            console.log("got failure");
            console.log(response);
        }
    }

    renderGoogleButton(classes) {
        return (
            <div>
                <div className={classes.google}>
                    <GoogleLogin 
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Sign in with Google"
                        onSuccess={this.onGoogleResponse()}
                        onFailure={this.onGoogleFailure()}
                    />
                </div>
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
                    showText={true}
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