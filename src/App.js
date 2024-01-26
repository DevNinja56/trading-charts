import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import APIPage from "./components/API/APIPage";
import SocketPage from "./components/Socket/SocketPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<APIPage />} />
          <Route path="/Socket" element={<SocketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
};

export default App;
