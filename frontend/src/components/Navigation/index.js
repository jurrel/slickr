import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav-containers'>
          <NavLink to="/login">Log In</NavLink>
          <div className='signupButton'>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <ul>
      <div className='nav-container'>
          {/* The Explore button is the "HOME" */}
          <NavLink exact to="/">Explore</NavLink>
          {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;
