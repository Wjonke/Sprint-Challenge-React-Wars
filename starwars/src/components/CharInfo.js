import React from 'react';
import './StarWars.css';

const CharInfo = ({characters}) => {
const {name,gender,height,mass,eye_color,hair_color, birth_year} = characters

  return (
    <div className='CharCard'>
      <h1 className='charName'> {name}</h1>
      <div className='CharAttributes'>
        
        <h2 className='SubText'>Charactor Attributes</h2>
        <li className='charAttr'> Birth Year: {birth_year}</li>
        <li className='charAttr'> Gender:     {gender}</li>
        <li className='charAttr'> Height:     {height}</li>
        <li className='charAttr'> Mass:       {mass}</li>
        <li className='charAttr'> Eye Color:  {eye_color}</li>
        <li className='charAttr'> Hair Color: {hair_color}</li>
      </div>
    </div>
  )
}

export default CharInfo