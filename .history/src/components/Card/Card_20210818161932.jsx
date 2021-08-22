import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div>
      <article className='recipe'>
      <img className='recipe__image' src={props.image} alt={props.title}/>
      <div className="recipe__informations">
        <p className='recipe__title'>{props.title}</p>
        <button className='recipe__button' to='/'>See Recipe</button>
      </div>
    </article>
    </div>
  )
}
