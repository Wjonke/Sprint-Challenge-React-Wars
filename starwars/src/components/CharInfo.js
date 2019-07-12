import React from 'react';
import { CharCard, CharName, CharAttributes, Li } from './StarWarsStyle';

const CharInfo = ({characters}) => {
const {name,gender,height,mass,eye_color,hair_color, birth_year} = characters

  return (
    <CharCard>
      <CharName> {name} </CharName>
      <CharAttributes>
        
        <h2 className='SubText'>Charactor Attributes</h2>
        <Li className='charAttr'> Birth Year: {birth_year}</Li>
        <Li className='charAttr'> Gender:     {gender}</Li>
        <Li className='charAttr'> Height:     {height}</Li>
        <Li className='charAttr'> Mass:       {mass}</Li>
        <Li className='charAttr'> Eye Color:  {eye_color}</Li>
        <Li className='charAttr'> Hair Color: {hair_color}</Li>
      </CharAttributes>
    </CharCard>
  )
}

export default CharInfo