import React, { useState } from 'react';
import Search from './components/Search'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=3fd375d9";

  const handleInput = (e) => {
    let s = e.target.value;


  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
