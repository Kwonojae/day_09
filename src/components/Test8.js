import React, { useCallback, useMemo, useState } from 'react';

const Test8 = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const textSize = useMemo( () => {
        return text.length
    },[text])
    const handleAdd = useCallback(() => {
        setData( [...data, text])
    },[data, text])
    return (
        <div>
            <input type="tetxt" onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>추가</button>
            <h3>{text}</h3>
            <h3>{text.length}</h3>
            <h3>글자의 개수 : {textSize} </h3>
            <hr/>
            <ul>
                {
                    data.map( (item, index) => <li key={index}>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test8;