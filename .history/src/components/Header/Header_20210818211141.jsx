import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header-container">
        <a href="#" className="logo">Healthly Food</a>
        <div className="header-subtitles">
          <a href="#" className="register">HEALTHY RECIPES</a>
          <a href="#" className="register">BLOG</a>
          <a href="#" className="register">JOIN</a>
          <a href="#" className="register" id="register">REGISTER</a>
        </div>
        
    </div>
  )
}
