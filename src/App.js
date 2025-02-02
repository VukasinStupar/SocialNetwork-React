import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
   
    fetch("http://localhost:8080")
      .then((response) => response.text())  
      .then((data) => setMessage(data))   
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
