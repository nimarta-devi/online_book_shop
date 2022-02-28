import {useState, useEffect} from 'react';
import { Input, Space } from 'antd';
import data from './data/data.json'
import { BookList } from './BookList';

const { Search } = Input;

export const Books = () =>{

    const [books, setBooks] = useState([])

    useEffect(()=>{
        setBooks(data)
        console.log(data)
    }, [])

    const onSearchFtn = (value)=>{
        data.forEach(i=>{
            if(i.title === value)
            {
                
            }
         })
    }
    return(
        <>
            <div>
                <br/>
                <Space style={{float: 'center'}} direction="vertical">
                    <Search placeholder="input search tilte" style={{ width: 200 }} onSearch={onSearchFtn}/>
                </Space>
            </div>
            <br/>
            <div className="list">
                <BookList/>
            </div>
        </>
    )
}