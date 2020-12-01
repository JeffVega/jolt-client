import React,{useState,useContext} from 'react';
import UserContext from '../UserContext';
import axios from 'axios';
import {BASE_URL} from "../utils/config";
export default function Login(props) {
    console.log(`${BASE_URL}/login`)
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [handleError, sethandleError] = useState("")
    const context = useContext(UserContext)
    function handleFormRequest(e){
        e.preventDefault()
        axios.post(`${BASE_URL}/login`,{
            username:username,
            password:password
        },{
            headers: {
                'Content-Type': 'application/json'
                }
        }).then(res => {
            let authToken = res.data.authToken
            context.auth = true
            localStorage.setItem('authToken', authToken);
            props.history.push('/')
        })
        .catch(e => {
            console.log(e)
            sethandleError("Not Vaild Username or Password")
            props.history.push('/login')
        }) 
    }
    return (
        <div>
            {<div className="error">{handleError}</div>}
            <form onSubmit={e => handleFormRequest(e)}>
            <p>Username</p>
            <input type="text" placholder="Username..." onChange={event => setusername(event.target.value)}/>
            <p>Password</p>
            <input type="text"  placholder="Password..." onChange={event => setpassword(event.target.value)}/>
            <button type="submit">
                Login
            </button>
            </form>
        </div>
    )
}
