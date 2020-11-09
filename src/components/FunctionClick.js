import React from 'react';

const FunctionClick = () => {
    const clickHandler =() => {
        console.log('envent is handled 👍')
    }
    return (
        <div>
            <button onClick ={clickHandler}>click</button>

        </div>
    );
};

export default FunctionClick;   