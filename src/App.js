import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./styles/layout/MainLayout";
import API from "./components/search/main";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout></MainLayout>
      </BrowserRouter>
    </div>

  );
};

export default App;
