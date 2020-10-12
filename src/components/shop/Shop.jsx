import React, { useState } from 'react'
import style from './shop.module.css'
import Card from '../Card.jsx'

export default function Shop({wallet, setWallet, team}){
  const [page, setPage] = useState(0)

  const forward = () => {
    setPage(actual => actual += 1)
  }
  const backwards = () => {
    page > 0 && setPage(actual => actual += -1)
  }
  return(
    <div className={style.shop}>
      <div className={style.navBar}>
        <ul>
          <li><span className='navbar-brand'>Rocket Shop</span></li>
          <li className='nav-item'> <span>Wallet: ${wallet}</span></li>
        </ul>
      </div>
      <div className={style.shopCards}>
      {
        team && team.map(p => <Card
          key={p.key}
          id={p.id}
          weight={p.weight}
          price={p.price}
          ability={p.ability}
          name={p.name}
          img={p.img}
        />)
      }
      </div>
    </div>
  )
}