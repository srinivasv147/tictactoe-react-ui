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
import tictactoeLogo from '../tictactoe.jpg';
import LoginDTO  from '../dto/LoginDTO';
import CreateUserDTO from '../dto/CreateUserDTO';
import axios from 'axios';
import User from '../entity/user';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            curUserId : null
        }
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.updateCurUserId = this.updateCurUserId.bind(this);
    }

    loginResponseHandler(email, gtoken) {
        return (response) => {
            console.log(response);
            let newUser = new User(null, null, null);
            if(response.isValidEmail === false) {
                newUser.userType = "GUEST_USER";
            }
            else if(response.jwt == null){
                newUser.userType = "NEW_USER";
                newUser.email = email;
                newUser.gtoken = gtoken;
            }
            else{
                newUser = new User("USER"
                , response.userId, response.jwt, email, gtoken);

            }
            //update user state.
            this.props.modifyUser(newUser);
            //redirect to relevant page.
            if(this.props.user.userType === "NEW_USER") 
                this.props.history.push("/register");
            else if(this.props.user.userType === "USER")
                this.props.history.push("/");
        }
    }

    onGoogleResponse(){
        return (response) => {
            console.log("got response");
            console.log(response);
            axios.post(
                'http://localhost:8080/api/authenticate',
                new LoginDTO(response.getBasicProfile().getEmail(), 
                response.tokenId)
            ).then(this.loginResponseHandler(
                response.getBasicProfile().getEmail(), 
                response.tokenId));
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
                {/* add jwt to local storage based on this option */}
                <FormControlLabel className={classes.google}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            </div>
        );
    }

    updateCurUserId(event){
        this.setState({curUserId : event.target.value});
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
                    onChange={this.updateCurUserId}
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

    createUserResponseHandler(){
        return ((response) => {
            console.log(response);
        });
    }

    handleCreateUser(event){
        event.preventDefault();
        console.log(this.state.curUserId);
        let createUser = new CreateUserDTO(this.state.curUserId,
            this.props.user.email, this.props.user.gtoken)
        console.log(createUser);
        axios.post('http://localhost:8080/api/create-user',
            createUser).then(this.createUserResponseHandler());
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
                <form className={classes.form} 
                onSubmit={this.handleCreateUser}
                noValidate>
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