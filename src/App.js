import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import React from 'react';
import { useState, useEffect } from "react";
import aragorn from './images/aragorn.jpg'
import boromir from './images/boromir.jpeg'
import gimli from './images/gimli.jpg'
import legolas from './images/legolas.jpg'
import gandalf from './images/gandalf.jpeg'
import frodo from './images/frodo.jpeg'
import sam from './images/sam.jpeg'
import merry from './images/merry.jpeg'
import pippin from './images/pippin.jpeg'

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Aragorn",
      picture: aragorn
    },
    {
      id: 2,
      name: "Boromir",
      picture: boromir
    },
    {
      id: 3,
      name: "Gimli",
      picture: gimli
    },
    {
      id: 4,
      name: "Legolas",
      picture: legolas
    },
    {
      id: 5,
      name: "Gandalf",
      picture: gandalf
    },
    {
      id: 6,
      name: "Frodo",
      picture: frodo
    },
    {
      id: 7,
      name: "Sam",
      picture: sam
    },
    {
      id: 8,
      name: "Merry",
      picture: merry
    },
    {
      id: 9,
      name: "Pippin",
      picture: pippin
    }
  ])

  const [pickedCards, setPickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHightScore] = useState([])

  useEffect(() => {
    const pickedCard = (e) => {
      console.log(e.target)
      if(e.target.className === 'card--pic') {
      const updatedPickedCards = [...pickedCards, e.target.id]
      setPickedCards(updatedPickedCards)
      if (pickedCards.includes(e.target.id)) {
        console.log('game over')
        setScore(0)
        setPickedCards([])
        console.log(e.target)
      } else {
        setScore(score + 1)
        console.log(pickedCards)
      }
    }
  } 
    document.addEventListener("click", pickedCard)
    return () => {
      document.removeEventListener("click", pickedCard);
    };
  })

  useEffect(() => {
    const randomCards = cards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    setCards(randomCards)
  }, [score])

  useEffect(() => {
    if(score >= highScore) {
      setHightScore(score)
    }
  })

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <Main cards={cards}/>
    </div>
  );
}

export default App;
