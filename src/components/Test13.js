import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initalState = {
    loading : true,
    data : {},
    error : ''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'SUCCESS' :
            return {
                loading : false,
                data : action.payload,
                error : ''
            }
        case 'ERROR' :
            return {
                loading : true,
                data : {},
                error : '데이터를 찾을수 없음'
            }
        default :
            return state    
    }
}
// state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고
// dispatch 는 액션을 발생시키는 함수
const Test13 = () => {
    const [state,dispatch] = useReducer(reducer, initalState); //reducer 는 dispacth에들어가고 initalState는  state다
    
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/4')
            .then(res => {
                dispatch({type:'SUCCESS',payload : res.data})
            })
            .catch(error => {
                dispatch({type:'ERROR'})
            })
    })

    return (
        <div>
            <h2>{state.data && state.loading ? '로딩중...' : state.data.title}</h2>
            <p>
                {state.error ? state.error : null}
            </p>
        </div>
    );
};

export default Test13;