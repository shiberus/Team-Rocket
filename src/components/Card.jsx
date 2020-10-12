import React from 'react';
import style from './styles/Card.module.css'
import skull from './imgs/skull.png'

export default function Card({id, weight, price, ability, name, img, setTeam, setProfit, evil}){
  return(
    <div className={style.card}>
      <div className={style.buttons}>
      <button type="button" className="btn btn-success" onClick={setProfit}>$</button>
      {evil > 4 ? <button type="button" className="btn btn-primary" onClick={setTeam}>Recruit</button> : null}
      </div>
      <div className={style.img}><img src={img} alt=""/></div>
      <div className={style.data}>
        <p>name: {name}</p>
        <hr/>
        <p>id:  {id}</p>
        <hr/>
        <p>ability:   {ability}</p>
        <hr/>
        <p>weight:  {weight}kg</p>
        <hr/>
        <p>price:   ${price}</p>
      </div>
    </div>
  )
}