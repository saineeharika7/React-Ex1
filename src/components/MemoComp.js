import React from 'react';

const MemoComp = ({name}) => {
    console.log("memo component")
    return (
        <div>
            {name}
        </div>
    );
};

export default React.memo(MemoComp);