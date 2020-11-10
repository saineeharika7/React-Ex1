import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(){
        super();
        this.state ={
            isLoggedIn :false
        }
    }
    
    render() {

        /*let message;
        if(this.state.isLoggedIn){
            message =<div>WELCOME root !!</div>
        }
        else{
            message =<h1>hello everyone </h1>
        } 
        return(
             <div>{message}</div>
         ) */
        /*if(this.state.isLoggedIn != true){  
            return <div>welcome Root !!</div>

          }
          else{
                  return <div>welcome Guest !!</div>

          }*/
        /*return(
            !this.state.isLoggedIn ? <h1>hello root </h1> : <h1>hello everyone </h1>
        )*/
        return(
            !this.state.isLoggedIn && <h1>welcome shaw</h1>
        ) 
    }
}

export default UserGreeting;