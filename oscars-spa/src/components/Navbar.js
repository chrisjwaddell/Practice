import React from "react"
import PropTypes from "prop-types"
import Home from "./Home"

function Navbar({ title }) {
	return (
		<>
			<div>
				<nav className="header">
					<div className="header__container o-flex o-flex-row x--between y--center">
						<h2>
							<a href="#" className="menu__link link--primary">
								{title}
							</a>
						</h2>
						<ul className="menu o-list-bare o-flex o-flex-row x--between y--center">
							<li className="c-btn c-btn--primary">
								<a
									href="./home"
									className="menu__link  link--primary"
								>
									Home
								</a>
							</li>
							<li className="c-btn c-btn--primary">
								<a
									href="./bestactors"
									className="menu__link link--primary"
								>
									Best Actors
								</a>
							</li>
							<li className="c-btn c-btn--primary">
								<a
									href="./bestactresses"
									className="menu__link link--primary"
								>
									Best Actresses
								</a>
							</li>
							<li className="c-btn c-btn--primary">
								<a
									href="#"
									className="menu__link link--primary"
								>
									Best Films
								</a>
							</li>
							<li />
						</ul>
					</div>
				</nav>
			</div>
			<Home />
		</>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Navbar
