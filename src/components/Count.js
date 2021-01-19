import React from 'react';

const Count = ({count,text}) => {
    console.log('count');
    return (
        <div>
            {text} / {count}
        </div>
    );
};


export default React.memo(Count);
// export default Count;