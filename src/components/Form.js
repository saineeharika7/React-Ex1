import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            comments :'',
            topic :"react"
        }
        this.usernameHandler = this.usernameHandler.bind(this);
    }
    usernameHandler(event) {
        this.setState({
            username: event.target.value
        })
    }
    commentHandler=(e) => {
        this.setState({
            comments: e.target.value
        })
    }
    topicHandler =(event) => {
        this.setState({
            topic:event.target.value
        })
    }
    submitHandler =event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit ={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.usernameHandler} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea 
                    value ={this.state.comments} onChange ={this.commentHandler} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value ={this.state.topic} onChange ={this.topicHandler}>
                        <option value ="react">React</option>
                        <option value ="angular">Angular</option>
                        <option value ="vue">Vue</option>

                    </select>
                </div>
                <button type ="submit">Submit </button>
            </form>

        );
    }
}

export default Form;