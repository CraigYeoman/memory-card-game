import React from "react";

const Header = ({score, highScore}) => { 
    return (
      <header className="App-header">
        <div className="header--score">Score {score}</div>
        <div className="header--hightscore">Highscore {highScore}</div>
      </header>
  );
}

export default Header
