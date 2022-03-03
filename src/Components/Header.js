import { HeaderNavbar } from "./HeaderNavbar";
import { HeaderLogout } from "./HeaderLogout";
//import { NavLink } from "react-router-dom";

export const Header = (props) =>{

    let isLoggedIn = props.isLoggedIn;

    return(
        <div>
            <img alt = "logo" src = "https://media.istockphoto.com/vectors/book-love-logo-template-design-vector-emblem-design-concept-creative-vector-id1329176431?k=20&m=1329176431&s=612x612&w=0&h=RV3qMpUwPBqZSe5CzkcEcdo8_rDs74rH7ftXGTgSUXw=" style={{display:'inline-block', width: '100px', height: '100px'}}/>
            <h2 style={{display:'inline-block'}}>ONLINE BOOK SHOP</h2>
            {/* <NavLink to = '/' component = {HeaderNavbar}></NavLink>  */}
            
            {isLoggedIn? <HeaderLogout/>: <HeaderNavbar/> }
            {/*<HeaderNavbar/>*/}
        </div>
    )
}