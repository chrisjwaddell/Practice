import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const active = (isActive) =>
	isActive ? "menu__link link--primary b-black" : "menu__link link--primary"

function Navbar({ title }) {
	return (
		<>
			<div>
				<nav className="header">
					<div className="header__container o-flex o-flex-row x--between y--center">
						<h1>{title}</h1>
						<h2>
							<NavLink to="/">React Router App</NavLink>
						</h2>
						<ul className="menu o-list-bare o-flex o-flex-row x--between y--center">
							<li className="c-btn c-btn--primary">
								<NavLink
									to="/"
									className={({ isActive }) =>
										active(isActive)
									}
								>
									Home
								</NavLink>
							</li>
							<li className="c-btn c-btn--primary">
								<NavLink
									to="/projects"
									className={({ isActive }) =>
										active(isActive)
									}
								>
									Projects
								</NavLink>
							</li>
							<li className="c-btn c-btn--primary">
								<NavLink
									to="/contact"
									className={({ isActive }) =>
										active(isActive)
									}
								>
									Contact
								</NavLink>
							</li>
							<li className="c-btn c-btn--primary">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										active(isActive)
									}
								>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Navbar
