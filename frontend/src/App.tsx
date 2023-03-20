import React from 'react';
import './App.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Heading from './components/Heading';
import TeamList from './components/TeamList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Heading />
        <TeamList />
      </header>

    </div>
  );
}

export default App;
