import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state ={
             hasError :false
        }
        
    }
    static getDerivedStateFromError(error) {
        return {
            hasError :true
        }
    }
    render() {
        if(this.state.hasError){
            return <h1>you got an Error -_-</h1>
        }
        return this.props.children
            
        
    }
}

export default ErrorBoundary;