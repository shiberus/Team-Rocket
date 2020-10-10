import React from 'react'
import style from './shopCard.module.css'

export default function ShopCard({img, description, price, onBuy}){
  return(
    <div className={style.shopCard}>
      <div className={style.img}><img src={img} alt="nothing"/></div>
      <div>
        <div classNam={style.btn}>
          <button className={`btn btn-success`} onClick={onBuy}>$</button>
        </div>
        <div className={style.data}>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}