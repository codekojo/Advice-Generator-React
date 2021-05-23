import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [myAdvice, setmyAdvice] = useState("");

  async function fetchAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const {
      data: {
        slip: { advice: newAdvice },
      },
    } = response;
    setmyAdvice(newAdvice);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-content">
          <p>{myAdvice}</p>
          <div className="App-button" onClick={fetchAdvice}>
            <p>Fetch New Advice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
