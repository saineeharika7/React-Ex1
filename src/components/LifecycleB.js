import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(){
        super()
        this.state ={
            name:'Carter'
        }
        console.log("this is constructor B")
    }
     static getDerivedStateFromProps(props, state){
         console.log("this is static getDerivedStateFromProps B")
         return null;
     }
     componentDidMount(){
         console.log("this is componentDidMount B")
     }
     shouldComponentUpdate(){
        console.log("this is shouldComponentUpdate B ")
        return true ;
    }
    getSnapshotBeforeUpdate(){
        console.log("this is getSnapshotBeforeUpdate B")
        return null
    }
    componentDidUpdate(){
        console.log("this is componentDidUpdate B")
    }
    render() {
        console.log("this is render B");
        return (
            
            <div>
                LifecycleB
            </div>
        );
    }
}

export default LifecycleB;