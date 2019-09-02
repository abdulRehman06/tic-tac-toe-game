// @flow
import React, {Component} from 'react';
import Bord from './Bord';
import {Button, ButtonGroup} from 'react-bootstrap';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: '0',
            xIsNext: false,
            winnerFlag: false,
            startGameFlag: false,
            history: [
                {squares: Array().fill(null)}
            ]


        }

    }


    handleClick(i) {

        //!** to tack history making copy of existing history
        let history = this.state.history.slice(0, this.state.stepNumber + 1);  //  splice( 0, 0) return no value thats why +1
        // console.log('his', history);
        const lastHist = history[history.length - 1];
        let lasSquare = lastHist.squares.slice(); // make new copy


        if (lasSquare[i] || this.state.winnerFlag) // if value ( X/O) exist then do nothing
        {
            return -1;
        }
        lasSquare[i] = this.state.xIsNext ? 'X' : 'O';
        // history = history.concat({lasSquare});

        this.setState({
            history: history.concat({
                squares: lasSquare
            }),
            // history : [...this.state.history ,  {lasSquare} ], //this isnt working
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
        if (this.findWineer(lasSquare)) //  if won then close
            return null;

    }

    findWineer = (square) => {
        const arr = [
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],

            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [0, 6, 12, 18, 19],
            [4, 8, 12, 16, 20]
        ]
        for (let i = 0; i < 12; i++) {

            const [a, b, c, d, e] = arr[i];
            // console.log(  [a, b , c , d ,e] )
            //     console.log( 'Square' ,   ' a=' , square[a] , ' b=' , square[b] , ' c=' , square[c] ,  ' d=' ,square[d] ,  ' e=' , square[e] );

            if (square[a] && (square[a] === square[b]) && (square[b] === square[c]) && (square[c] === square[d]) && (square[d] == square[e])) {
                console.log('winner')
                this.setState({winnerFlag: true, startGameFlag: false});
                return 1;
            }
        }
        return -1
    }
    jumpToStepNo = (index) => {
        this.setState({stepNumber: index})
    }


    render() {
        const {history, stepNumber, xIsNext} = this.state;
        const current = history[stepNumber].squares; // get the last square value to pass
        const status =  (xIsNext ? 'X' : 'O') + ' Turn';
        const moves = history.map((value, index) => {
            // const desc = value ? 'Go to #' + value : 'Start the Game';
            if (index) {
                return (

                    <Button
                        key={index}
                        onClick={() => {
                            this.jumpToStepNo(index)
                        }}>
                        {'Step  No# ' + index}
                    </Button>
                )
            }

        })


        return (
            <div className="game">
                {
                    this.state.startGameFlag ? // applying condition
                        <div className="game-board">
                            <Bord
                                // onClick={ (i) => {console.log( "value" , i)}}
                                onClick={(i) => {
                                    this.handleClick(i)
                                }}
                                squares={current}
                            />
                        </div>
                        :
                        <div>
                            {this.state.winnerFlag && <h1> Won the game</h1>}
                            <Button
                                onClick={  () => (this.state.winnerFlag) ?
                                    this.setState({
                                        stepNumber : '0' ,
                                        startGameFlag : true,
                                        xIsNext: false,
                                        winnerFlag: false,
                                    })
                                    :
                                    this.setState({startGameFlag: true})  }
                                // onClick={ (this.state.winnerFlag) ?   this.setState({stepNumber : ''}) : this.setState({startGameFlag: true})  }
                                className="col-lg-12">{this.state.winnerFlag ? "Do you wana Play again..." : "Lets Play the Game....."}</Button>

                        </div>
                }
                {
                    this.state.startGameFlag
                    &&
                    <div className="game-info">
                        <div> <h1> {status} </h1> </div>
                        <div>
                            <ButtonGroup vertical>
                                {moves}
                            </ButtonGroup>
                        </div>
                    </div>

                }


            </div>
        );
    };
};