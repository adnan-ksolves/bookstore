import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Book Store</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" aria-current="page" to="/">All</NavLink>
          <NavLink className="nav-link" to="/Historical">Historical</NavLink>
          <NavLink className="nav-link" to="/Fiction">Fiction</NavLink>
          <NavLink className="nav-link" to="/Romance">Romance</NavLink>
          <NavLink className="nav-link" to="/Comedy">Comedy</NavLink>
          <NavLink className="nav-link" to="/Adventure">Adventure</NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav
