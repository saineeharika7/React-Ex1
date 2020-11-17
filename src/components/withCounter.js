import React from 'react'

const withCounter = (WrappedComponent) => {

    class withCounter extends React.Component {
        constructor(){
            super()
            this.state ={
                count:0
            }
        }
        IncrementCount =() => {
            this.setState(prevState =>{
                return {count :prevState.count +1}
            })
        }
        render(){
            return <WrappedComponent 
            count={this.state.count} 
            IncrementCount={this.IncrementCount} 
            {...this.props} />
        
    }
}
    return withCounter

}

export default withCounter