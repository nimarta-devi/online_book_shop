import {useState, useEffect} from 'react';
import { Input, Space } from 'antd';
import data from './data/data.json'
import { BookList } from './BookList';
import { NavLink, Outlet } from 'react-router-dom';


export const Books = (props) =>{
    const isLoggedIn = props.isLoggedIn;
    const [books, setBooks] = useState([])
    console.log('books prop : ' + isLoggedIn)

    useEffect(()=>{
        setBooks(data)
    }, [])


    return(
        <>
            <div className="list">
                <br/>
                <nav className="nav0">
                    <NavLink to=''></NavLink>
                    <NavLink to='book_list'>Books List</NavLink>
                    <NavLink to='book_search'>Search Books</NavLink>
                </nav>
                <Outlet/>
                {/*<BookList isLoggedIn={isLoggedIn}/>*/}
            </div>
        </>
    )
}