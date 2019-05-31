import React from 'react';
import CharInfo from './CharInfo';



 const CharList = props => {
  return (
    <div>
      {props.charactors.map(char => 
        (
          <CharInfo charactors = {char}/>
        )
      )}
    </div>
  )
}



export default CharList