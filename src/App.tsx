import React from 'react';
import './App.css';
import { Info } from './components/Info';
import { EpisodiosProvider } from './context/EpisodiosContext';

function App() {
  return (
    <>
      <EpisodiosProvider>
        <Info />
      </EpisodiosProvider>
    </>

  );
}

export default App;
