import React, { useState } from'react';
import style from './styles/Trafficking.module.css'
import TraficNavBar from './trafficNavBar.jsx'
import Cards from './Cards.jsx'

export default function Trafficking({profit, setProfit, team, setTeam}){
  const [pokemons, setPokemon] = useState([])
  const [evil, setEvil] = useState(5)
  function onSearch(pokemon, k){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    fetch(url)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.name !== undefined){
        const pokemon = {
          id: recurso.id,
          weight: recurso.weight / 10,
          img: recurso.sprites.front_default,
          key: recurso.id + Math.floor(k * (Math.random() + Math.random())),
          name: recurso.name,
          price: recurso.stats[0].base_stat * 3,
          ability: recurso.abilities[0].ability.name
        };
        setPokemon(oldPokemon => [...oldPokemon, pokemon]);
        evil < 4 && setEvil(actual => actual += 1)
      } else {
        alert('poekmon not found');
      }
    });
  }

  function onSell(key, price) {
    setPokemon(oldPokemon => oldPokemon.filter(p => p.key !== key));
    setProfit(actual => actual += price);
  }

  function onRecruit(key) {
    setTeam(actual => actual = [...actual, pokemons.filter(p => p.key === key)[0]]);
    setPokemon(oldPokemon => oldPokemon.filter(p => p.key !== key));
  }

  function sellMeat(){
    setProfit(actual => actual += Math.floor(team/1.5))
    setTeam(0)
  }

  function activateEvil(){
    setEvil(actual => actual += 1)
  }


  return(
    <div className={style.Trafficking}>
      <TraficNavBar onSearch={onSearch} profit={profit} team={team} sellMeat={sellMeat} evil={evil} setEvil={activateEvil}/>
      <Cards pokemons={pokemons} setTeam={onRecruit} setProfit={onSell} evil={evil}/>
    </div>
  )
}