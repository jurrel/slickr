import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { useHistory } from "react-router-dom";

import * as sessionActions from '../../store/session';
import { login } from "../../store/session";
import logInPhotoPage from '../../assets/logInPhotoPage.jpg'
import './LoginForm.css';

function LoginFormPage() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/homepage" />
  );


  const handleClick = async (e) => {
    e.preventDefault();

    const DemoUser = {
        credential: 'DemoUser',
        password: 'password',
    };

    await dispatch(login(DemoUser))
    history.push("/homepage");  //after demo user button is click it automatically goes to home page
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <div>
        <img className="landing-img" src={logInPhotoPage} alt="" />
      </div>
      <div className='form-container'>
        <form className="sign-up-border" onSubmit={handleSubmit}>
          <h1>Log in to Slickr</h1>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="input_field">
            <input
              placeholder="Username or Email"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className="input_field">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='login' type="login">Log In</button>
          <button className="demo-user-button" onClick={handleClick} type='button'>Demo</button>
        </form>
          {/* <DemoUser className='demo-user-button'></DemoUser> DEmo user no longer works */}
      </div>
    </>
  );
}

export default LoginFormPage;
