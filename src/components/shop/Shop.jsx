import React, { useState } from 'react'
import style from './shop.module.css'
import ShopCards from './ShopCards'

export default function Shop({wallet, setWallet}){
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
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger" onClick={backwards}>{'<'}</button>
          <button type="button" className="btn btn-danger" onClick={forward}>{'>'}</button>
        </div>
      </div>
      <ShopCards page={page} setWallet={setWallet}/>
    </div>
  )
}