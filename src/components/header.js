import React,{useContext} from 'react'
import Logo from '../utils/img/logo.png'
import {Link,useHistory} from 'react-router-dom';
import UserContext from '../UserContext';
export default function Header(props) {
    const context = useContext(UserContext)
    const histroy = useHistory();
    const logout = () =>{
        context.auth = false;
        localStorage.removeItem('authToken')
        histroy.push('/')
        

    }
    return (
        <>
            {
             context.auth ? (
                <header>
                    <div className="logo"> 
                        <img id="logo_img" src={Logo} alt='logo img of website'  draggable='false'/> 
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </ul>
                    <Link to="/login">Sign up and Start</Link>
                </header>
             ) : (
                <header>
                <div className="logo"> 
                    <img id="logo_img" src={Logo} alt='logo img of website'  draggable='false'/> 
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Jobs</a></li>
                </ul>
                <Link to="/login">Sign up and Start</Link>
            </header>
             )
            }
             
        </>
    )
}
