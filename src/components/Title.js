import React from 'react';

const Title = () => {
    console.log('title');
    return (
        <div>
            <h3>React.Memo: 컴포넌트 return값 기억 </h3>
        </div>
    );
};

export default React.memo(Title);//값을 기억해두는 방법 
// export default Title;// 여러번 불러온다 