import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import EditPost from './pages/EditPost';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import Header from './components/Header';


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (storedToken && storedUsername) {
      setToken(storedToken);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (token, username) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setToken(null);
    setUsername('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  };
  
  return (
    <div>
      <BrowserRouter>      
        <Header token={token} username={username} onLogout={handleLogout} /> 
        <Routes>
          <Route path='/' element={<Home/>} />          
          <Route path="/about"  element={<About/>} />
          <Route path="/admin" element={token ? <Admin /> : <Navigate to="/login" />} /> 
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>      
      </BrowserRouter>
    </div>  
  );
};

export default App;

