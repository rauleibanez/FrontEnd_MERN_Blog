import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>      
        <Header />
        <Routes>
          <Route path='/' element={<Layout/>} />
          <Route index element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/admin"  element={<Admin/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
        </Routes>      
      </BrowserRouter>
    </div>  
  );
};

export default App;

