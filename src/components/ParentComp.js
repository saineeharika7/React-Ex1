import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureCompo from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor() {
        super()
        this.state ={
            name :"Groot"
        }
    }
    componentDidMount(){
        setInterval(() => { 
            this.setState({
                name :"Groot"
            })
        },2000)
    }
    render() {
        console.log("parent component")
        return (
            <div>
                Parent component
                <MemoComp name ={this.state.name} />
                {/*<RegComp name ={this.state.name} />
                <PureCompo name ={this.state.name} />*/}
            </div>
        );
    }
}

export default ParentComp;