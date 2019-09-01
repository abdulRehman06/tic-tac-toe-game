// @flow
import React, {Component} from 'react';
import Bord from './Bord';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: '0',
            xIsNext: false,
            history: [
                {squares: Array().fill(null)}
            ]


        }

    }



    handleClick(i) {

        //!** to tack history making copy of existing history
        let history = this.state.history.slice(0, this.state.stepNumber + 1);  //  splice( 0, 0) return no value thats why +1
        console.log('his' , history);
        const  lastHist = history[history.length - 1];
        let lasSquare = lastHist.squares.slice(); // make new copy
        lasSquare[i] =  this.state.xIsNext ? 'X' : 'O';
        // history = history.concat({lasSquare});

        this.setState({
            history: history.concat({
                squares: lasSquare
            }),
            // history : [...this.state.history ,  {lasSquare} ], //this isnt working
            xIsNext : !this.state.xIsNext,
            stepNumber : history.length
        })

    }




    render() {
        const  { history  , stepNumber } =  this.state;
        const current = history[stepNumber].squares;

        return (
            <div>
                <Bord
                    // onClick={ (i) => {console.log( "value" , i)}}
                    onClick={(i) => {
                        this.handleClick(i)
                    }}
                    squares={current}
                />
            </div>
        );
    };
};