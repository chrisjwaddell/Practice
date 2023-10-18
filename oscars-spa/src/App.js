import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Actors from "./pages/Actors"

function App() {
	return (
		<div className="o-container">
			<div className="main-container">
				<BrowserRouter>
					{/* <Navbar title="Oscars 2019" /> */}
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Navbar title="Oscars 2019" />
									<Home />
								</>
							}
						/>
						<Route
							path="actors"
							element={
								<>
									<Navbar title="Oscars Actors" />
									<Actors />
								</>
							}
						/>
						<Route
							path="actresses"
							element={
								<>
									<Navbar title="Oscars Actresses" />
									<Home />
								</>
							}
						/>
						<Route
							path="films"
							element={
								<>
									<Navbar title="Oscars Films" />
									<Home />
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

// App.propTypes = {
//  title: PropTypes.string.isRequired,
// }

export default App
