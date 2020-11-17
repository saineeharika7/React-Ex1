import React, { Component } from 'react';
import withCounter from './withCounter'
class CLickCounter extends Component {
    
       render() {
        const {count ,IncrementCount} =this.props
        return (
            <div>
                <button onClick ={IncrementCount}> {this.props.name} clicked {count} times</button>
            </div>
        );
    }
}

export default withCounter(CLickCounter);