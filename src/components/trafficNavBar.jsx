import React, { useState } from'react';
import style from './styles/NavBar.module.css'

export default function TraficNavBar({meat, profit, onSearch, sellMeat, evil, setEvil}){
  const [pokemon, setPokemon] = useState('')
  return(
    <div className={style.navBar}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Evil menu</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav mr-auto ${style.evilList}`}>
          <li className={`nav-item ${style.evilInfo}`}>
           <span>Profit: ${profit}</span>
          </li>
          {evil === 4 ? <li><button className={`btn btn-danger`} onClick={setEvil}>Activate Supreme Evil</button></li> : null}
          {evil > 4 ? (
          <div className={style.evilList}>
          <li className={`nav-item ${style.evilInfo}`}>
           <span>Meat: {meat}kg</span>
          </li>
          <li>
          <button className={`btn ${style.btn}`} onClick={sellMeat} type="submit">Sell meat</button>
          </li>
          </div>
          ) : null}
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
          e.preventDefault();
          onSearch(pokemon, e.timeStamp);
          setPokemon('')
          }}>
          <input className="form-control mr-sm-2" type="search" placeholder="Pokemon..." aria-label="Search"
          value = {pokemon}
          onChange={e => setPokemon(e.target.value)}/>
          <button className={`btn ${style.btn}`} type="submit">Steal</button>
        </form>
      </div>
    </nav>
    </div>
  )
}