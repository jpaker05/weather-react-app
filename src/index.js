import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import Weather from "./Weather";

import "./Weather.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1>Weather App</h1>
      <Weather />
    </div>
    <footer>
      This website was coded by Jessica Paker and is{" "}
      <a href="https://github.com/jpaker05/weather-react-app"> open-sourced </a>{" "}
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
