import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import {Navbar} from './Components/Navbar';
import {About} from './Components/About';
import {Books} from './Components/Books';
import {Agreement} from './Components/Agreement';
import { Home } from './Components/Home';
import { OrderConfirmed } from './Components/OrderConfirmed';
import { NotFound } from './Components/NotFound';
import { Header } from './Components/Header';
import { Contact } from './Components/Contact';
import {Footer} from './Components/Footer'
import './App.css';
import {Route, Routes} from 'react-router-dom';


function App()
{
    return(
        <>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='home' element ={<Home/>}/>
                <Route path='login' element ={<LoginForm/>}/>
                <Route path='register' element ={<RegistrationForm/>}/>
                <Route path='about' element ={<About/>}/>
                <Route path='books' element ={<Books/>}/>
                <Route path='order_confirm' element = {<OrderConfirmed/>}/>
                <Route path='agreement' element = {<Agreement/>}/>
                <Route path='contact' element = {<Contact/>}/>
                <Route path='*' element = {<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default App;