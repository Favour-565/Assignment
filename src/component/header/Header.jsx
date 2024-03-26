import React from 'react'
import logo from "../../assets/Luxe.png"
import Menu  from "../../assets/Menu.png"
import "./header.css"

const Header = () => {
  return (
    <div className='nav'>
        <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="nav-buttons">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>How we work</li>
                </ul>

            </div>

            <div className="menu">
                <img src = {Menu} alt = "Hamburger" />
            </div>
    </div>
  )
}

export default Header