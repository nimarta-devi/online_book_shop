import {useState, useEffect} from 'react';
import { Input, Space } from 'antd';
import data from './data/data.json'
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const SearchBook =(props)=>{

    const { Search } = Input;
    const { Meta } = Card;

    const [book, setBook] = useState();
    const onSearchFtn = (e)=>{
        data.forEach(i=>{
            if(i.title === e.target.value)
            {
                setBook(i);
            }
         })
    }
    const navigate = useNavigate();
    const buyBookFtn = ()=>{
        if(props.isLoggedIn)
        {
            navigate('/order_confirm')
        }
        else{
            alert('You must login first!')
            navigate('/login')
        }
    }
    return(
        <>
            <div className="search_div">
                <br/>
                <Space style={{float: 'center'}} direction="vertical">
                    <Search placeholder="input search tilte" style={{ width: 200 }} onSearch={onSearchFtn}/>
                </Space>
                </div>
                <br/>
            <div className="container-fluid mt-5">
                <div className = "row text-center">
                    <div className="col-4 text-center" style={{padding: '3px', margin: '5px',border: '3px solid black', display: 'inline-block'}}>
                        <Card
                            hoverable
                            style={{ width: 275 }}
                            cover={<img alt="image" src="https://thumbs.dreamstime.com/b/blank-soft-color-book-standing-red-vertical-cover-black-background-isolated-clipping-path-around-d-illustration-187008688.jpg" />}
                        >
                            <Meta title={book.title} description={book.author} />
                            <br/>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                className="login-form-button" 
                                style={{width:'100%'}} 
                                onClick={buyBookFtn}
                            >
                                Buy book
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </>
        
            
    )
}