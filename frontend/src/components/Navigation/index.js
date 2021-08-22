import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import './Navigation.css';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          <NavLink className='nav-button-slickr' exact to="/homepage">Slickr</NavLink>
        </div>

        <div>
          <a className='navbar-button profile-btn' href={`/users/${sessionUser.id}`}> Profile </a>
        </div>

        <div>
          <NavLink exact to="/upload"><i className="fa fa-cloud-upload"></i></NavLink>
        </div>

        <div>
          <button className='navbar-button logout-btn' onClick={logout}>Log Out</button>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar-button ' to="/login">Log In</NavLink>
        <NavLink className='navbar-button' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar-container'>
      {isLoaded && sessionLinks}
    </ div>
  );
}

export default Navigation;
