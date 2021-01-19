import React, { useEffect, useRef, useState } from 'react';

const Test4 = () => {
    const [timer, setTimer] = useState(1);
    const [done, setDone] = useState(true);  //done = true / false
    const timerRef = useRef();

    useEffect( ()=> {
        timerRef.current = setInterval(()=>{
           setTimer( timer => timer + 1)
        }, 1000)
        return() => {
            clearInterval(timerRef.current)
        }
    }, [ done ])
    return (
        <div>
            <h4>useRef 이용해서 setInteval 타이머 처리, useEffect </h4>
            <p>
                <button onClick={ () => clearInterval(timerRef.current)}>타이머 중지</button>
                <button onClick={ () => setDone(!done)}>타이머 시작</button>
            </p>
            <h1>{timer}</h1>
        </div>
    );
};

export default Test4;
/*
    useRef => dom 참조 할수 있다 <요소 ref = {ref tjsdjs} />
    useRef => 값을 지정할수 있다 useRef(시작값)
    
    
*/ 
