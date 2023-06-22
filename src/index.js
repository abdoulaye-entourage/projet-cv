import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from 'react-helmet';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Helmet>
        <title>Mon CV en ligne</title>
        <meta name="description" content="Bienvenue sur mon CV en ligne. Vous y trouverez mes informations personnelles, mes informations de contact ainsi que les formations que j'ai fait et le experiences acquises " />
        <link rel="canonical" href="https://abdoulaye-entourage.github.io/projet-cv/" />
        <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />
      </Helmet>
  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
