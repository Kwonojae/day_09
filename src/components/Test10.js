import React, { useReducer } from 'react';
//초기값
const initalState = 0;
//리듀서 함수 선언
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' : 
            return state - 1;
        case 'RESET' : 
            return 0;
        default:
            return state;
    }
}


//(type:액션명) - 액션명 소문자 대문자 상관없다, 주로 상수형 대문자로 표기한다
const Test10 = () => {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h4>useReducer</h4>
            <h1>{count}</h1>
            <p>
                <button onClick={()=> dispatch({type:'INCREMENT'})}>증가</button>
                <button onClick={()=> dispatch({type:'DECREMENT'})}>감소</button>
                <button onClick={()=> dispatch({type:'RESET'})}>리셋</button>
            </p>
        </div>
    );
};

export default Test10;