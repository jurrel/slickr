import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';
// import logo from "../../assets/slime.png"  //logo isnt working out like it's suppose to

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <a className='navbar-button' id='profile-btn' href={`/users/${sessionUser.id}`}> Profile </a>
        <NavLink className='navbar-button' to='/upload'>Upload</NavLink>
        <button className='navbar-button' id='logout-btn' onClick={logout}>Log Out</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav-container'>
          <NavLink to="/login">Log In</NavLink>
        </div>
        <div className='nav-container'>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <nav className="navbar-container">
      <div className="logo">
        <NavLink exact to="/">
          <div className="slickr"></div>
        </NavLink>
      </div>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
