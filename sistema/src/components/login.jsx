import React, { useState } from 'react';
import '../css/login.css';

function Login() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  return (
    <div className={`container ${isRegisterActive ? 'active' : ''}`}>
      <div className="form-box login">
        <form>
          <h1>Iniciar sesión</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="forgot-link">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="btn">Entrar</button>
          <p>O inicia sesión con redes sociales</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form>
          <h1>Registro</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuario" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn">Registrar</button>
          <p>O regístrate con redes sociales</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>¡Hola, bienvenido!</h1>
          <p>Sistema de gestion de evaluaciones academicas</p>
          <button className="btn register-btn" onClick={() => setIsRegisterActive(true)}>
            Registrarse
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>¡Bienvenido de nuevo!</h1>
          <p>¿Ya tienes una cuenta?</p>
          <button className="btn login-btn" onClick={() => setIsRegisterActive(false)}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
