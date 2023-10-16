import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
	return (
		<div className="o-container">
			<div className="main-container">
				<BrowserRouter>
					<Navbar title="Oscars 2019" />
					<Routes>
						<Route
							path="/home"
							// element={<Navbar title="Oscars 2019" />}
							loader={({ params }) => {
								return <Mavbar title="Oscars 2019" />
							}}
						/>
						<Route
							path="/bestactors"
							element={<Navbar title="Oscars Winners" />}
						/>
						<Route
							path="/bestactresses"
							element={<Navbar title="Oscars 3" />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
