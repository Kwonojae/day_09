import React, { useState } from 'react';
import Image from './Image'; 
import styled from 'styled-components';

const Test3 = () => {
    const [data, setData] = useState(Image);
    const [num , setNum] = useState(0);

    const handleClick = (index) => {
        setNum(index)
    }
    return (
        <div>
            <Gallery>
                <ul>
                    {
                        data.map((item,index) => <li key={index} onClick={()=> handleClick(index)}> 
                            <img src={item} alt=""/>
                        </li>)
                    }
                </ul>
                <div>
                    <img src={data[num]} alt=""/>
                </div>
            </Gallery>
        </div>
    );
};

export default Test3;
const Gallery = styled.div `
    display : flex;
    ul {
        display:flex;
        width:200px;
        flex-direction: row;
        flex-wrap:wrap;
    li {
        list-style:none;
        img{
            width:80px;
            height:100px;
            cursor: pointer;
        }
    }
}
    div{
        img{
            width:300px;
            height:400px;

        }
    }
`