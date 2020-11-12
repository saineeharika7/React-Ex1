import React, { Component } from 'react';
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(){
        super()
        this.state ={
            name:'Carter'
        }
        console.log("this is constructor A ")
    }
     static getDerivedStateFromProps(props, state){
         console.log("this is static getDerivedStateFromProps A")
         return null;
     }
     componentDidMount(){
         console.log("this is componentDidMount  A")
     }
     shouldComponentUpdate(){
         console.log("this is shouldComponentUpdate A ")
         return true ;
     }
     getSnapshotBeforeUpdate(){
         console.log("this is getSnapshotBeforeUpdate A")
         return null
     }
     componentDidUpdate(){
         console.log("this is componentDidUpdate A")
     }
     changeHandler =() => {
         this.setState({
             name:"Fusco"
         })
     }
    render() {
        console.log("this is render A");
        return (
            
            <div>
                LifecycleA
                <button onClick ={this.changeHandler}>Change state</button>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA;