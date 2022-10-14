import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://stunning-macaron-7fb77f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Valeriia Strokina{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Valery-Strokina/Valery-Weather-App.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
