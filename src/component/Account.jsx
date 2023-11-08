import React, { useState, useEffect } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Account() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    // Validate the name field
    if (!/^[A-Za-z\s]+$/.test(value)) {
      setNameError('Name can only contain alphabets and spaces');
    } else if (value.includes('@') && !value.endsWith('@gmail.com')) {
      setNameError('Email must be from Gmail (gmail.com)');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Validate the email field
    if (value.length === 0) {
      setEmailError('Email is required');
    } else if (!value.endsWith('@gmail.com')) {
      setEmailError('Email must be from Gmail (gmail.com)');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Validate the password field
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
         const value = e.target.value;
         setPhoneNumber(value);
         // Validate the phone number field
         if (!/^\d{10}$/.test(value)) {
           setPhoneNumberError('Phone number must have 10 digits');
         } else {
           setPhoneNumberError('');
         }
       };

  useEffect(() => {
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    const handleRegisterClick = () => {
      // Check if there are any validation errors before switching to the registration form
      if (!nameError && !passwordError && !phoneNumberError) {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('active');
      }
    };

    const handleLoginClick = () => {
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.remove('active');
    };

    if (registerLink) {
      registerLink.addEventListener('click', handleRegisterClick);
    }

    if (loginLink) {
      loginLink.addEventListener('click', handleLoginClick);
    }

    // Remove event listeners when the component unmounts
    return () => {
      if (registerLink) {
        registerLink.removeEventListener('click', handleRegisterClick);
      }
      if (loginLink) {
        loginLink.removeEventListener('click', handleLoginClick);
      }
    };
  }, [nameError, passwordError, phoneNumberError]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Check for validation errors before submitting the form
    if (!nameError && !passwordError && !phoneNumberError) {
      // Your registration logic here
    }
  };

  return (
    <div className='body'>
      <div className="wrapper">
        <div className="form-box login">
           <h2>Log-in</h2>
           <form>
           <div className={`input-box ${emailError ? 'error' : ''}`}>
              <span className={`icon ${emailError ? 'icon-error' : ''}`}>
                <AiFillMail />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label>Email</label>
              {emailError && <span className="error">{emailError}</span>}
            </div>
             <div className="input-box">
               <span className="icon"><FaLock /></span>
               <input type="password" required />
               <label>Password</label>
             </div>
             <div className="remember-forgot">
               <label><input type="checkbox" />Remember Me</label>
               <a href="#">Forgot Password</a>
             </div>
            <Link to="/"><button type='submit' className='btn button1'>Log-In</button></Link>
             <div className='login-register'><p>Don't have an Account? <a href="#" className='register-link'>Register</a></p></div>
           </form>
         </div>

        <div className="form-box register">
          <h2>Registration</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className={`input-box ${nameError ? 'error' : ''}`}>
              <span className={`icon ${nameError ? 'icon-error' : ''}`}><FaUser /></span>
              <input
                type="text"
                required
                value={name}
                onChange={handleNameChange}
              />
              <label>Username</label>
              {nameError && <span className="error">{nameError}</span>}
            </div>
            <div className={`input-box ${emailError ? 'error' : ''}`}>
              <span className={`icon ${emailError ? 'icon-error' : ''}`}>
                <AiFillMail />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label>Email</label>
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <div className={`input-box ${passwordError ? 'error' : ''}`}>
              <span className={`icon ${passwordError ? 'icon-error' : ''}`}><FaLock /></span>
              <input
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <div className={`input-box ${phoneNumberError ? 'error' : ''}`}>
               <span className={`icon ${phoneNumberError ? 'icon-error' : ''}`}><AiFillMail /></span>
               <input
                 type="tel"
                 required
                 value={phoneNumber}
                 onChange={handlePhoneNumberChange}
               />
               <label>Phone Number</label>
               {phoneNumberError && <span className="error">{phoneNumberError}</span>}
             </div>
            <button type='submit' className='btn button1'>Register</button>
            <div className='login-register'>
              <p>Already have an Account? <a href="#" className='login-link'>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
