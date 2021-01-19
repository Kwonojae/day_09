import React, { useCallback, useState } from 'react';
import Count from './Count';
import Title from './Title';

const Test9 = () => {
    const [age, setAge] = useState(20);
    const [money, setMoney] = useState(100000);
    const handleAge = useCallback(() => {
   //     console.log('age');
        setAge(age + 1)
    },[age])
    const handleMoney = useCallback(() => {
    //    console.log('money');
        setMoney(money + 5000)
    },[money])
    return (
        <div>
            <Title/>
            <Count text='나이' count={age}/>
            <button onClick={handleAge}>나이증가</button>
            <hr/>
            <Count text='급여' count={money}/>
            <button onClick={handleMoney}>급여증가</button>
        </div>
    );
};

export default Test9;