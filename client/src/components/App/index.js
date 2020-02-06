import React from 'react';

import './app.scss';

import Home from '../Home';

function App() {
  return (
    <div id="app">
      <header className="app-header"><img src="src/public/assets/img/avataaars.svg" alt="avataaar"/> Custom React | Express Starter Kit with MySQL </header>
      <Home />
    </div>
  );
}

export default App;
