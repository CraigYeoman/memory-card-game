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
      const updatedPickedCards = [...pickedCards, e.target.id]
      setPickedCards(updatedPickedCards)
      if (pickedCards.includes(e.target.id)) {
        console.log('game over')
        setScore(0)
        setPickedCards([])
        console.log(pickedCards)
      } else {
        setScore(score + 1)
        console.log(pickedCards)
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
