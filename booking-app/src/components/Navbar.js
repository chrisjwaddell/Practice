import React from "react"
import propTypes from "prop-types"
import Header from "./Header"

function Navbar({ mode }) {
	return (
		<div className="navbar">
			<div className="navcontainer .font">
				<span className="logo">lama booking</span>
				<div className="navbar__btns">
					<button type="button" className="navbar__register c-btn">
						Register
					</button>
					<button type="button" className="navbar__login c-btn">
						Login
					</button>
				</div>
			</div>
			<Header mode={mode} />
		</div>
	)
}

Navbar.propTypes = {
	mode: propTypes.string.isRequired,
}

export default Navbar
