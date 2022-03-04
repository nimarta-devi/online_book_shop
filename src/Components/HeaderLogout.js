import { NavLink, useNavigate } from 'react-router-dom';

import {LogoutOutlined } from '@ant-design/icons';


export const HeaderLogout = () =>{

    const navbarStyle = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            fontSize: isActive ? '17px':''
            
            //textDecoration: isActive ? 'underline': 'none'
        }
    }
    const navigate= useNavigate();

    const logoutHandle = (e)=>{
        e.preventDefault();
        localStorage.removeItem('user');
        navigate('login')
    }
    return (

        <>
            <div style={{display:'inline-block', float: 'right'}}>
                <nav className = "nav0">
                    <NavLink to ='login' style={navbarStyle}>
                        <LogoutOutlined />
                        Logout  
                    </NavLink>
                </nav>
            </div>
        </>
    )
}