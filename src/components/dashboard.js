import React,{useContext} from 'react'
import Header from './header'
import UserContext from '../UserContext';
export default function Dashboard(props) {
    const context = useContext(UserContext)
    console.log(props)
    return (
        <div>
            <Header/>
        </div>
    )
}

