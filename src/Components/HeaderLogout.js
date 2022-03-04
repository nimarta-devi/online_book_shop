import {NavLink} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';


export const HeaderLogout = () =>{

    const navbarStyle = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            fontSize: isActive ? '17px':''
            
            //textDecoration: isActive ? 'underline': 'none'
        }
    }

    return (
        <div style={{display:'inline-block', float: 'right'}}>
            <nav className = "nav0">
                <NavLink to ='login' style={navbarStyle}>
                <UserOutlined />
                Logout  
                </NavLink>        
            </nav>
        </div>  
    )
}