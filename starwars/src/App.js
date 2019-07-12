import React, { useState, useEffect}  from 'react';
import './App.css';
import CharList from './components/CharList';



function App  () {
  const [ starwarsChars, setStarwarsChars] = useState([]);
    
  
  useEffect(() => {
    fetch('https://swapi.co/api/people/')

    .then(res => res.json())
    .then(res => {

      setStarwarsChars(res.results);
    })

    .catch(err => console.log("These are not the Charactors you are looking for"));
  }, []);

    return (
      <div className="App">
        <h1 className="Header">React Wars!</h1>
        <CharList characters= {starwarsChars}/>
      </div>
    );
  }


export default App;
