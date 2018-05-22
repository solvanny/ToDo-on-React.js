import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <NavLink to="/" exact> Monday </NavLink>
      <NavLink to="/tuesday" exact> Tuesday </NavLink>
      <NavLink to="/wednesday" exact> Wednesday </NavLink>
      <NavLink to="/thursday" exact> Thursday </NavLink>
      <NavLink to="/friday" exact> Friday </NavLink>
      <NavLink to="/saturday" exact> Saturday </NavLink>
      <NavLink to="/sunday" exact> Sunday </NavLink>
    </div>
  );
};


export default Menu;