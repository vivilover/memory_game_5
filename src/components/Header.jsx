// import { useState } from 'react';

const Header = ({ currScore, highScore }) => {
  
  return (
    <header>
      <div>Memory Lorem Ipsum Images</div>
      <div>Puntajee: {currScore}</div>
      <div>Alta puntaje: {highScore}</div>
    </header>
  );
}

export default Header;