import React, { useMemo, useState } from 'react';

const Test5 = () => {

    const [cnt1, setCnt1] = useState(1)
    const [cnt2, setCnt2] = useState(10)
    console.log('test5');   //누를때마다 전체가 다시 실행이된다 

    //함수를 별도로 만들어서 return값을 처리할때 (return값을 기억 -useMemo)
    const isEven = useMemo( () => {
        console.log('test');
        return cnt1 % 2 === 0;
    }, [cnt1])
    return (
        <div>
            <h4>useMemo : return 값을 기억, 함수를 별도로 만들어서 return값 처리 </h4>
            <h4>값을 바꿀대마다 지연되는 값처리가 생길수가 있다</h4>
            <h4>useMemo에 같은 값을 입력하면 return  값을 기억하기 때문에 실행이 빨라진다 </h4>
            <h1>{cnt1}</h1>
            <button onClick={()=> setCnt1( cnt1 + 1)}>증가</button>
            <h1>{cnt2}</h1>
            <button onClick={()=> setCnt2( cnt2 + 1)}>증가</button>
            <hr/>
            <h1>{isEven ? '짝수' : '홀수'}</h1>
        </div>
    );
};

export default Test5;