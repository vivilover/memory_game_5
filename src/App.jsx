import { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Easy from './components/Easy';
import Intermediate from './components/Intermediate';
import Deficil from './components/Deficil';

function App() {
  const [estado, setEstado] = useState('main');
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onEstadoChange = (newEstado) => {
    setEstado(newEstado);
  };

  return (
    <>
      <Header currScore={currScore} highScore={highScore} />
      {estado === 'main' ? (
        <Welcome handleStateChange={onEstadoChange} />
      ) : estado === 'facil' ? (
        <Easy
          handleStateChange={onEstadoChange}
          setCurrScore={setCurrScore}
          setHighScore={setHighScore}
          currScore={currScore}
          highScore={highScore}
        />
      ) : estado === 'intermedia' ? (
        <Intermedia
          handleStateChange={onEstadoChange}
          setCurrScore={setCurrScore}
          setHighScore={setHighScore}
        />
      ) : estado === 'deficil' ? (
        <Deficil
          handleStateChange={onEstadoChange}
          setCurrScore={setCurrScore}
          setHighScore={setHighScore}
        />
      ) : (
        <div>Estado Wrong</div>
      )}
    </>
  );
}

export default App;
