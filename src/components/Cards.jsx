import React from 'react';
import style from './styles/Cards.module.css'

import Card from './Card.jsx'

export default function Cards({pokemons, setMeat, setProfit, evil}){
  return(
    <div className={style.cards}>
      {
        pokemons && pokemons.map(p => <Card
          evil={evil}
          key={p.key}
          id={p.id}
          weight={p.weight}
          price={p.price}
          ability={p.ability}
          name={p.name}
          img={p.img}
          setMeat={() => setMeat(p.key, p.weight)}
          setProfit={() => setProfit(p.key, p.price)}
        />)
      }
    </div>
  )
}