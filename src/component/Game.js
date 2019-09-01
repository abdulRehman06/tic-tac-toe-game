// @flow
import  React  , {Component}from 'react';
import Bord from './Bord';


export default class Game extends Component {
    render() {
        return (
            <div>
                <Bord squares={1}
                onClick={ (i) => {console.log( "value" , i)}}
                />
            </div>
        );
    };
};