import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import slickrLogo from '../../assets/Slickr.png';


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
        <NavLink className='nav-button slickr' exact to="/homepage">Slickr</NavLink>
        <a className='navbar-button' id='profile-btn' href={`/users/${sessionUser.id}`}> Profile </a>
        <NavLink className='navbar-button' to='/upload'>Upload</NavLink>
        <button className='navbar-button' id='logout-btn' onClick={logout}>Log Out</button>
        {/* <NavLink className='nav-button slickr' exact to="/homepage"><span className="slickr"></span></NavLink> Why do i need a div to get icon to show up */}
        {/* <a className='logo' href="http://localhost:3000/homepage"><img src={slickrLogo} /></a> */}
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navbar-button' id='logInButton' to="/login">Log In</NavLink>
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
