import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(){
        super();
        this.state ={
            isLoggedIn :false
        }
    }
    
    render() {
        if(this.state.isLoggedIn != true){  
            return <div>welcome Root !!</div>

          }
          else{
                  return <div>welcome Guest !!</div>

          }
       
    }
}

export default UserGreeting;