import React, { Component } from 'react'
import Logo from '../utils/img/logo.png'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
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
                </header>
            </div>
        )
    }
}
