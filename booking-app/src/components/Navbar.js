import React from "react"
import Header from "./Header"

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navcontainer">
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
			<Header />
		</div>
	)
}
