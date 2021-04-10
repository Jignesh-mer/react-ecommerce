import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
	return(
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <a className="navbar-brand" href="/">Navbar</a>

			  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item">
			        <NavLink className="nav-link" exact to="/">Home</NavLink>
			      </li>
		          <li className="nav-item">
			        <NavLink className="nav-link" exact to="/about">About</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link" exact to="/shop">Shop</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
			      </li>
			    </ul>
			    <form className="form-inline my-2 my-lg-0">
			    <NavLink className="nav-link" exact to="/login">Login</NavLink>
			    <NavLink className="nav-link" exact to="/register">Register</NavLink>
			    <a>
			    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" style={{color:"#fff", marginRight:"20px"}}>
  					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</svg>
				</a>
			      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			    </form>
			  </div>
			</nav>
		</>
	)
}

export default Navbar