import React, { useState } from 'react';
import CharInfo from './CharInfo';



 const CharList = ({characters}) => {



  return (
    <div>
     
       {characters.map((character, i) => 
        (
          <CharInfo key={i} characters = {character}  />
        )
      )} 
    </div>
  )
}

export default CharList
