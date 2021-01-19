import React, { useReducer } from 'react';


const initalState = {width : 100};
const reducer = (state, action) => {
    switch(action.type) {
        case 'PLUS' : 
            return  {
                width : state.width + action.step
            }
        case 'MINUS' : 
            return {
                width : state.width - action.step
            }
        case 'RESET' :
            return {
                width : 100
            }
        default : 
            return state
    }
}
/*
const [state, setState] = {width:100}
state.width 
*/

const Test12 = () => {
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <div
                style={{background:'pink', width:state.width, height:80, transition:'0.3s', marginLeft:10}}
            ></div>
            <p>
                <button onClick={() => dispatch({type:'PLUS', step:100})}>증가</button>
                <button onClick={() => dispatch({type:'MINUS', step:50})}>감소</button>
                <button onClick={() => dispatch({type:'RESET'})}>원래대로</button>
            </p>
        </div>
    );
};

export default Test12;