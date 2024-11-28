import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/authService';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      onLogin(token, username);
      navigate('/admin');
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      toast.error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      console.error('Error al iniciar sesión', error); // Mensaje de error
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-white has-text-centered">Sign In</h1>
        <form className="box block has-background-dark login" onSubmit={handleSubmit}>
          <div className="field">
          <label className="label has-text-white">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"              
              required
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"              
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="has-text-danger">{error}</p>} {/* Mensaje de error */}
          <div className="control">          
            <button className="button is-primary has-text-white" type="submit">Login</button>
          </div>
        </form>  
      </div>      
    </section>  
  ) 
};

export default Login;