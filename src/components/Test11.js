import React, { useReducer } from 'react';

const initalState = 0;
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return state + action.step
        case 'DECREMENT' : 
            return state - action.step
        case 'RESET' : 
            return 0
        default : 
            return state    
    }
}

const Test11 = () => {
    const [count1, dispatch1] = useReducer(reducer, initalState);
    const [count2, dispatch2] = useReducer(reducer, 100);
    const [count3, dispatch3] = useReducer(reducer, 200);
    return (
        <div>
            <h2>{count1}</h2>
            <p>
                <button onClick={() => dispatch1({type : 'INCREMENT',step:10})}>증가</button>
                <button onClick={() => dispatch1({type : 'DECREMENT',step:50})}>감소</button>
                <button onClick={() => dispatch1({type : 'RESET'})}>초기화</button>
            </p>
            <h2>{count2}</h2>
            <p>
                <button onClick={() => dispatch2({type : 'INCREMENT',step:100})}>증가</button>
                <button onClick={() => dispatch2({type : 'DECREMENT',step:20})}>감소</button>
                <button onClick={() => dispatch2({type : 'RESET'})}>초기화</button>
            </p>
            <h2>{count3}</h2>
            <p>
                <button onClick={() => dispatch3({type : 'INCREMENT',step:200})}>증가</button>
                <button onClick={() => dispatch3({type : 'DECREMENT',step:30})}>감소</button>
                <button onClick={() => dispatch3({type : 'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test11;