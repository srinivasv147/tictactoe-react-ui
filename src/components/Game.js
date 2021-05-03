import React, {Component} from 'react';

class Game extends Component {

    display(num) {
        switch(num){
            case 1 : return "X";
            case -1 : return "O";
            default : return "_";
        }
    }

    makeMove(index){
        return () => {
            this.props.sendMove(index);
        }
    }

    render() {
        const { classes } = this.props;
        const game = this.props.game;
        return (
            <div className={classes.board}>
                {
                [0,1,2].map((rowInd) => 
                <div key={rowInd} className={classes.row}>
                    {
                        [0,1,2].map((colInd)=>
                            <div key={3*rowInd+colInd} 
                            className={classes.block} 
                            onClick={this.makeMove(3*rowInd+colInd)}>
                                <p className={classes.xo}>
                                    <b>
                                        {this.display(
                                            game[3*rowInd+colInd])}
                                    </b>
                                </p>
                            </div>
                        )
                    }
                </div>
                )}
            </div>
            
        );
    }

}

export default Game;