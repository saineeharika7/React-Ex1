import React, { Component } from 'react';

class EventBind extends Component {
    constructor (){
        super();
        this.state =({
          message:"Hello"
        })
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(){
        this.setState({
            message:"Thank you"
        })
        console.log(this)
    }
    /*eventHandler = () => {
        this.setState({
            message:"Thank you"
        })
    }*/
    render() {
        return (
            <div>   
                {this.state.message}<br />
                <button onClick ={this.eventHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;