import React from "react"
import PropTypes from "prop-types"
// import { BrowserRouter, Link } from "react-router-dom"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import Actors from "../pages/Actors"

function Navbar({ title }) {
	return (
		<>
			<div>
				<BrowserRouter>
					<nav className="header">
						<div className="header__container o-flex o-flex-row x--between y--center">
							<h2>
								<Link
									to="/"
									className="menu__link link--primary"
								>
									{title}
								</Link>
							</h2>
							<ul className="menu o-list-bare o-flex o-flex-row x--between y--center">
								<li className="c-btn c-btn--primary">
									<Link
										to="/"
										className="menu__link  link--primary"
									>
										Home
									</Link>
								</li>
								<li className="c-btn c-btn--primary">
									<Link
										to="actors"
										className="menu__link link--primary"
									>
										Best Actors
									</Link>
								</li>
								<li className="c-btn c-btn--primary">
									<Link
										to="actresses"
										className="menu__link link--primary"
									>
										Best Actresses
									</Link>
								</li>
								<li className="c-btn c-btn--primary">
									<a
										href="actresses"
										className="menu__link link--primary"
									>
										Best Actresses
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<Routes>
						<Route path="/" component={<Home title="Home" />} />
						<Route path="actors" component={<Actors />} />
						<Route path="actresses" component={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
			{/* <Home /> */}
		</>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Navbar
