import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [ pokemon , setPokemon ] = useState<string[]>([])

  useEffect(() => {
    const data = axios.
  })
  return (
    <div className="container">
      <h1 className="header">Pokemon</h1>
    </div>
  );
};

export default App;
