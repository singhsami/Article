import React from 'react'
import img from "../images/Logo.png"

const Header = () => {
  return (
    <header style={{backgroundColor:"white"}}>
      <img src={img} alt="logoismg" style={{marginLeft:35,height:50,width:200}}/>
    </header>
  )
}

export default Header
