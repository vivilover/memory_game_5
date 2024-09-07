import { useState } from 'react';
import Header from './components/Header';
import PlayBoard from './components/PlayBoard';
import Welcome from './components/Welcome';
import Facil from './components/Facil';
import Intermedia from './components/Intermedia';
import Deficil from './components/Deficil';


function App() {
  const [estado, setEstado] = useState('');

  const onEstadoChange = (newEstado) => {
    setEstado(newEstado);
  }

  return (
    <>
      <Header />
      { estado === '' ? <Welcome handleStateChange={onEstadoChange} />
      : estado === 'facil' ? <Facil /> 
      : estado === 'intermedia' ? <Intermedia />
      : estado === 'deficil' ? <Deficil /> 
      : <></> }
    </>
  )
}

export default App
