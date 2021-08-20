import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import UploadPageModal from '../UploadPhotoModal';


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
        <NavLink className='nav-button-slickr' exact to="/homepage">Slickr</NavLink>
        <a className='navbar-button' id='profile-btn' href={`/users/${sessionUser.id}`}> Profile </a>
        < UploadPageModal />
        <button className='navbar-button logout-btn'  onClick={logout}>Log Out</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar-button ' id='logInButton' to="/login">Log In</NavLink>
        <NavLink className='navbar-button' id='signUpButton' to="/signup">Sign Up</NavLink>
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
