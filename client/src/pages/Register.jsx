import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" name="username" />
        <input required type="email" placeholder="email" name="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Have an account already? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
