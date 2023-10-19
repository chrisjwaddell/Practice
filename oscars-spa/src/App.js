import React from "react"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Actors from "./pages/Actors"
import Actor from "./pages/Actor"
import ActorsList from "./data/actors"

function App() {
	return (
		<div className="o-container">
			<div className="main-container">
				<BrowserRouter>
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
						<Route path="/actors">
							<Route
								path=""
								element={
									<>
										<Navbar title="Oscars Actors" />
										<Actors />
									</>
								}
							/>
							<Route
								path=":actorurl"
								element={
									<>
										<Navbar title="Oscars Actorsssss" />
										<Actor />
									</>
								}
							/>
						</Route>
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
