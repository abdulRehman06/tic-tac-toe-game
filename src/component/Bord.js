// @flow
import * as React from 'react';
import Square from './Square';
import './../App.css';
import {ButtonToolbar} from 'react-bootstrap';


export default class Bord extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        return (
            <div className="BordStyle">
                <div>
                    <ButtonToolbar className="Bord-r-Style">

                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                    </ButtonToolbar>

                </div>
                <div>
                    <ButtonToolbar className="Bord-r-Style">

                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                        {this.renderSquare(9)}
                    </ButtonToolbar>

                </div>
                <div>
                    <ButtonToolbar className="Bord-r-Style">

                        {this.renderSquare(10)}
                        {this.renderSquare(11)}
                        {this.renderSquare(12)}
                        {this.renderSquare(13)}
                        {this.renderSquare(14)}
                    </ButtonToolbar>

                </div>
                <div>
                    <ButtonToolbar className="Bord-r-Style">

                        {this.renderSquare(15)}
                        {this.renderSquare(16)}
                        {this.renderSquare(17)}
                        {this.renderSquare(18)}
                        {this.renderSquare(19)}
                    </ButtonToolbar>

                </div>
                <div>
                    <ButtonToolbar className="Bord-r-Style">

                        {this.renderSquare(20)}
                        {this.renderSquare(21)}
                        {this.renderSquare(22)}
                        {this.renderSquare(23)}
                        {this.renderSquare(24)}
                    </ButtonToolbar>

                </div>
            </div>
        );
    };
};