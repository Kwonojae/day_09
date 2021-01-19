import React from 'react';
import {connect, Provider} from 'react-redux';
import { createStore } from 'redux'

// 리덕스 예시- 껍데기 UI (기본디자인)
const Counter = ({count, increment, decrement}) => {
    return (
        <div>
            
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

//순수함수 reducer
const initalState = {
    count : 0
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                ...state,
                count : state.count + 1
            }
        case 'DECREMENT' : 
            return {
                ...state,
                count : state.count - 1 
            }
        default : 
            return state
    }
}

//기본디자인과 스토어에 연결된 리듀서의 상태값과 액션을 매핑하여 
//화면에 보이는 실제 UI를 connect 한다 .

//상태값 읽기
const mapStateToProps = (state) => {
    return {
        count : state.count
    }
}

//액션, 쓰기,행동
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch({type : 'INCREMENT'}),
        decrement : () => dispatch({type : 'DECREMENT'}),
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

///////////////////////////////////

const Test14 = () => {
    //스토어 생성 
    const store = createStore(reducer);
    return (
        <div>
            <Provider store={store}>
                <Container/>
            </Provider>
        </div>
    );
};

export default Test14;