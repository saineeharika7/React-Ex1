import React, { Component } from 'react';

class ClickCounter2 extends Component {

    constructor(){
        super()
        this.state ={
            count :0
        }
    }

    onIncrement =() => {
        this.setState(prevState => {
            return {count : prevState.count +1}
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
               <button onClick ={this.onIncrement}>clicked {count} times</button> 
            </div>
        );
    }
}

export default ClickCounter2;