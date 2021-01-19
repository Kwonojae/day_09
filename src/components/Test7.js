import React, { useCallback, useState } from 'react';

const Test7 = () => {
    const [count , setCount] = useState(0);
    console.log('Test7');
    const increment = useCallback( () => {
        console.log('increment');
        setCount(count + 1)
    },[count])
    const decrement = useCallback( () => {
        console.log('decrement');
        setCount(count - 1)
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test7;

/*
    함수 컴포넌트는 렌더링 될때마다 내부의 것들을 다시 계산 처리해야함
    생성뿐만 아니라 업데이트 될때마다 다시 만들기 때문이다
    그래서 use* 필요하다 
    함수형이라서 함수 실행 될 때마다 내부의 것은 메모리가 안되어서 다시 만들어야 쓸수 있따 
    그래서 훅이 등장해서 이제 클래스 컴포넌트 처럼 사용할 수 있따 .
    useMemo - return 값 기억
    useCallback - 함수를 기억 
*/