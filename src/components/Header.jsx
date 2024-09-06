import { useState } from 'react';

const Header = () => {
  const [score, setScore] = useState(0);
  return (
    <header>
      <h1>Memory Game - 5th try</h1>
      <div>Score: {score}</div>
    </header>
  );
}

export default Header;