import React from 'react'

class Counter extends  React.Component{

     constructor(){
         super();

         this.state ={
             count : 0
         }
     }

     onIncrement(){
        /* this.setState({
             count :this.state.count+1
         })*/
         this.setState(prevState =>({
             count :prevState.count +1
         }))
     }
     incrementFive(){
         this.onIncrement()
         this.onIncrement()
         this.onIncrement()
         this.onIncrement()
         this.onIncrement()

     }
     onDecrement(){
        this.setState({
            count :this.state.count-1
        })
     }
     render(){
         return(
             <div> 
                 {this.state.count} <br />
                 <button onClick ={() => this.incrementFive()}>Increment</button>
                 <button onClick ={() => this.onDecrement()}>Decrement</button>

            </div>
         )
     }
}
export default Counter;