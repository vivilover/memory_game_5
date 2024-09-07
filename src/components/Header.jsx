import { useState } from 'react';

const Header = () => {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <header>
      <div>Memory Lorem Ipsum Images</div>
      <div>Puntaje: {currScore}</div>
      <div>Alta puntaje: {highScore}</div>
    </header>
  );
}

export default Header;