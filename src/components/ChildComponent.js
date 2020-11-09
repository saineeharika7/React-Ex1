import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick ={() => props.greetHandler('Root')}>Greet Parent</button>
        </div>
    );
};

export default ChildComponent;