import React, {Component} from 'react';

class GameContainer extends Component {

    render() {

        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                </div>
            </Container>
        );
    }

}

export default GameContainer;