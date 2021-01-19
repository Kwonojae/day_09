import React, { useMemo, useState } from 'react';

const Test6 = () => {
    const [count, setCount] = useState(0);

    const exFunc = (count) => {
        console.log('exFunc');
        let k = 0;
        for(let i = 0; i < 10000000 ; i++) {
            k++
        }
        return count * 10;
    }
    const resCount = useMemo( () => {
        return exFunc(count)
    },[count])
    return (
        <div>
            <h4>useMemo : 함수 return 값 기억</h4>
            <h2>{count}</h2>
            <input type="text" onChange={(e) => setCount(e.target.value)}/>
            <hr/>
            <h1>{resCount}</h1>
        </div>
    );
};

export default Test6;