import React from 'react';
import './App.css';
import PlacarContainer from './Component/PlacarContainer'

const dados = {
  partida: {
    estadio: "Beira Rio",
    data: "24/4/2019",
    horario: "19h",
  },
  casa: {
    nome:"Internacional",
    imagem:'https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg',

  },
  visitante: {
    nome: "gremio",
    imagem: "https://seeklogo.com/images/G/Gremio-logo-63728B406B-seeklogo.com.png"
  }
};



function App() {
  return (
    <div className='App-header'>
      <PlacarContainer {...dados}  />
    </div>
  );
}

export default App;
