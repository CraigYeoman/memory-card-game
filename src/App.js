import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import React from 'react';
import { useState, useEffect } from "react";

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Card 1"
    },
    {
      id: 2,
      name: "Card 2"
    },
    {
      id: 3,
      name: "Card 3"
    },
    {
      id: 4,
      name: "Card 4"
    },
    {
      id: 5,
      name: "Card 5"
    },
    {
      id: 6,
      name: "Card 6"
    },
  ])

  const [pickedCards, setPickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHightScore] = useState([])

  useEffect(() => {
    const pickedCard = (e) => {
      setPickedCards(e.target.id)
      if (pickedCards.includes(e.target.id)) {
        console.log('game over')
        setScore(score === 0)
        setPickedCards(pickedCards = [])
      } else {
        setScore(score + 1)
      }
    }
    document.addEventListener("click", pickedCard)
  })

  useEffect(() => {
    document.title = `Your score is ${score}`
  })

  return (
    <div className="App">
      <Header />
      <Main cards={cards}/>
    </div>
  );
}

export default App;
