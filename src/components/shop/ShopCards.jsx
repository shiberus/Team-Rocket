import React, {useState, useEffect} from 'react';
import ShopCard from './ShopCard.jsx';
import style from './shopCards.module.css'

export default function ShopCards({page}){
  const[products, setProducts] = useState([])

  const data = d => {
    const p = {
      img: d.sprites.default,
      key: d.id,
      name: d.name,
      price: '$' + d.cost,
      description: d.flavor_text_entries[0].text
    };
    p.price === '$0' && (p.price = 'not avaiable')
    return p;
  }

  useEffect(() => {
    let newProducts = new Array(12)
    let url = '';
      newProducts.forEach((_,i) => {
        url = 'https://pokeapi.co/api/v2/item/' + ((page * 12) + i)
        fetch(url)
          .then(r => r.json())
          .then(recurso => {
            setProducts(old => [...old, data(recurso)])
          })
          .catch(error => console.error(error));
          console.log(newProducts)
      })
    },[page]
  )

  return(
    <div className={style.shopCards}>
      {
        products && products.map(
          p => <ShopCard
          img={p.img}
          key={p.key}
          name={p.name}
          price={p.price}
          description={p.description} 
        />)
      }
    </div>
  )
}



