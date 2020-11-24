import React, { Component } from 'react';

class HoverCounter2 extends Component {
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
                <h1 onMouseOver ={this.onIncrement}>Hovered {count} times</h1>
            </div>
        );
    }
}

export default HoverCounter2;