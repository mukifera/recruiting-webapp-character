import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Attributes from './Attributes';
import Classes from './Classes';
import Character from './Character';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Character/>
      </section>
    </div>
  );
}

export default App;
