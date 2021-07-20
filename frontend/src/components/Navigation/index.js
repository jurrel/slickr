import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import logo from "../../assets/slime.png"  //logo isnt working out like it's suppose to

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
    <ul>
      <div className='explore-icon'>
        {/* The Explore button is the "HOME" */}
        <NavLink exact to="/">Slickr</NavLink>
         {/* <img src={logo} alt="img" />    not exactly what I had in mind, come back to it later */}

        {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;
