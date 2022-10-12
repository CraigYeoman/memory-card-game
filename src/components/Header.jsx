import React from "react";

const Header = ({score, highScore}) => { 
    return (
      <header className="App-header">
        <div className="header--title">Lord of the Memory</div>
        <div className="header--container">
          <div className="header--score">Score {score}</div>
          <div className="header--highScore">Highscore {highScore}</div>
        </div>
      </header>
  );
}

export default Header
