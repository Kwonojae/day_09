import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {
    // const msgInput = useRef();

    const [data, setData] = useState([]);
    const [msg, setMsg] = useState('css');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getData = () => {
        axios.get(`http://hn.algolia.com/api/v1/search?query=${msg}`)
            .then( res => {
                setData(res.data)
                setLoading(false)
                setError('')
            })
            .catch( error => {
                setData( [] )
                setLoading(true)
                setError('에러')
            })
    }

    useEffect( ()=> {
        getData()
    },[msg])

    return (
        <div>
            <h4>useEffect, axios</h4>
            <input type="text" onChange={e => setMsg(e.target.value)}/>
            <ul>
                                                {/*data.hits.map 페이지 안의 경로를 하나더 추가해야됨  https://hn.algolia.com/api/v1/search?query=title  */}
                {data && loading ? '데이터 로딩중.' : data.hits.map( item => <li key={item.objectID}>
                    {item.title}
                </li>)}
            </ul>
        </div>
    );
};

export default Test2;