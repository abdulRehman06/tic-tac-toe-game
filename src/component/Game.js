// @flow
import React, {Component} from 'react';
import Bord from './Bord';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: '0',
            xIsNext: false,
            winnerFlag : false,
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


        if (lasSquare[i] || this.state.winnerFlag ) // if value ( X/O) exist then do nothing
        {
            return  -1;
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
        if (this.findWineer(lasSquare) ) //  if won then close
            return null;

    }

    findWineer = (square) => {
        const arr = [
            [0,   1,  2,  3,  4],
            [5,   6,  7,  8,  9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],

            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [0,6,12,18,19],
            [4,8,12,16,20]
        ]
        for (let i = 0; i < 12 ; i++) {

        const  [a, b , c , d ,e] = arr[i];
        // console.log(  [a, b , c , d ,e] )
        //     console.log( 'Square' ,   ' a=' , square[a] , ' b=' , square[b] , ' c=' , square[c] ,  ' d=' ,square[d] ,  ' e=' , square[e] );

            if(  square[a] && (square[a] === square[b]) &&   (square[b] === square[c] )  && (square[c] === square[d]) &&  (square[d] == square[e]) )
            {console.log('winner')
                this.setState({winnerFlag : true});
            return 1 ;
            }
        }
        return  -1



    }


    render() {
        const {history, stepNumber} = this.state;
        const current = history[stepNumber].squares; // get the last square value to pass

        return (
            <div className="game">
              <div className="game-board">
                  <Bord
                      // onClick={ (i) => {console.log( "value" , i)}}
                      onClick={(i) => {
                          this.handleClick(i)
                      }}
                      squares={current}
                  />
              </div>
            </div>
        );
    };
};