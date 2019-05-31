import React from 'react';
import './StarWars.css';

const CharInfo = props => {
  return (
    <div className='CharCard'>
      <h1 className='charName'>             {props.charactors.name}</h1>
      <div className='CharAttributes'>
        
        <h2 className='SubText'>Charactor Attributes</h2>
        <li className='charAttr'> Birth Year: {props.charactors.birth_year}</li>
        <li className='charAttr'> Gender:     {props.charactors.gender}</li>
        <li className='charAttr'> Height:     {props.charactors.height}</li>
        <li className='charAttr'> Mass:       {props.charactors.mass}</li>
        <li className='charAttr'> Eye Color:  {props.charactors.eye_color}</li>
        <li className='charAttr'> Hair Color: {props.charactors.hair_color}</li>
      </div>
    </div>
  )
}

export default CharInfo