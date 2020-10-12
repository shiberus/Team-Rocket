import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/NavBar.module.css'

export default function NavBar(){
  return(
  <nav className={`navbar navbar-expand-lg ${style.navBar}`}>
    <Link to='/' className={style.link}>
      <span className={`navbar-brand ${style.brand}`}>Team <span style={{color:'#e63946'}}>R</span>ocket</span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/about' className={style.link}><span className={`nav-link`}>About us</span></Link> 
        </li>
        <li className="nav-item">
        <Link to='/shop' className={style.link}> <span className={`nav-link`}>Your Team</span> </Link>
        </li>
        <li className="nav-item">
        <Link to='/trafficking' className={style.link}> <span className={`nav-link `}>Hunt</span> </Link>
        </li>
      </ul>
    </div>
    <div className={`btn-group ${style.buttons}`} role="group" aria-label="Basic example">
      <button type="button" className={`btn ${style.btn}`}>Join us</button>
      <button type="button" className={`btn ${style.btn}`}>Sign in</button>
    </div>
  </nav>
  )
}