import React from "react"
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Actors from "./pages/Actors"

function App({ title }) {
	return (
		<div className="o-container">
			<div className="main-container">
				<Navbar title="Oscars 2019" />
			</div>
		</div>
	)
}

export default App
