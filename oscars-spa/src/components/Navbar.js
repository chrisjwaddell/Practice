import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import Home from "../pages/Home"
import Actors from "../pages/Actors"

const active = (isActive) => ({
	backgroundColor: isActive ? "#5577aa" : "",
	color: isActive ? "#ffffff" : "",
})

function Navbar({ title }) {
	return (
		<nav className="header">
			<div className="header__container o-flex o-flex-row x--between y--center">
				<h2>
					<NavLink to="/" className="menu__link link--primary">
						{title}
					</NavLink>
				</h2>
				<ul className="menu o-list-bare o-flex o-flex-row x--between y--center">
					<li className="c-btn c-btn--primary">
						<NavLink
							to="/"
							className="menu__link  link--primary"
							style={({ isActive }) => active(isActive)}
						>
							Home
						</NavLink>
					</li>
					<li className="c-btn c-btn--primary">
						<NavLink
							to="/actors"
							className="menu__link link--primary"
							style={({ isActive }) => active(isActive)}
						>
							Best Actors
						</NavLink>
					</li>
					<li className="c-btn c-btn--primary">
						<NavLink
							to="/actresses"
							className="menu__link link--primary"
							style={({ isActive }) => active(isActive)}
						>
							Best Actresses
						</NavLink>
					</li>
					<li className="c-btn c-btn--primary">
						<NavLink
							to="/films"
							className="menu__link link--primary"
							style={({ isActive }) => active(isActive)}
						>
							Best Films
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Navbar
