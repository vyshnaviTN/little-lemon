// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./C:\Users\Manoj\Desktop\frontend\little-lemon\src\Main.js"; // Make sure this matches file case exactly

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
