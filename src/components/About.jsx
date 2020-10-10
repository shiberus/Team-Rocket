import React from 'react';
import style from './styles/About.module.css'
import giovanni from './imgs/giovanni.png'

export default function About() {
  return(
    <div className={style.About}>
      <div className={style.giovanniPic}>
        <img className={style.gio} src={giovanni} alt="emmm no se"/>
      </div>
      <div className={style.text}>
        <div class={`jumbotron ${style.jumbo}`}>
          <h1 class="display-4">We are Team Rocket</h1>
          <p class="lead">Steal Pokémon for profit. Exploit Pokémon for profit. All Pokémon exist for the glory of Team Rocket.</p>
          <hr/>
          <p>A villainous team in pursuit of evil and the exploitation of Pokémon. Based in the Kanto and Johto regions.
          While our main focus is stealing or capturing rare and strong Pokémon, and subsequently selling them, we also fund and conduct cruel experimental research on Pokémon. </p>
        </div>
        <div className={style.motto}>
          <p>"Prepare for trouble! And make it double! To protect the world from devastation! To unite all peoples within our nation!
             To denounce the evils of truth and love! To extend our reach to the stars above! Team Rocket blasts off at the speed of light! Surrender now, or prepare to fight!"</p>
             <span>Jessie and James</span>
        </div>
      </div>
      <div className={style.top}></div>
      <div className={style.bottom}></div>
      <div className={style.left}></div>
      <div className={style.right}></div>
    </div>
  )
}