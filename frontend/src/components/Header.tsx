import React from 'react'
import logo from '../assets/header-bandeira.jpg'

interface HeaderProps {
  title?: string
  government?: string
  directorship?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, government, directorship } = props
  return(
    <>
      <header>
        <div id="headerClass">
          <div className="logoDiv">
            <div className="titles">
              <p className="title1">{government}</p>
              <p className="title2">{directorship}</p>
            </div>
              <img className="logo" src={ logo} alt=""/>
            </div>
          <div className="school">
            <span>{ title }</span>
          </div>
        </div>
      </header>
   </>
  )
}

export default Header;