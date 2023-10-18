import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function SimpleApp() {
	return (
		<div className="o-container">
			<div className="main-container">
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Navbar title="Home" />
									<Home />
								</>
							}
						/>
						<Route
							path="projects"
							element={
								<>
									<Navbar title="Projects" />
									<Projects />
								</>
							}
						/>
						<Route
							path="contact"
							element={
								<>
									<Navbar title="Contact" />
									<Contact />
								</>
							}
						/>
						<Route
							path="about"
							element={
								<>
									<Navbar title="About" />
									<About />
								</>
							}
						/>
						<Route path="#" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

function About() {
	return (
		<div>
			<h1>About</h1>
		</div>
	)
}

function Contact() {
	return (
		<div>
			<h1>Contact</h1>
		</div>
	)
}

function Home() {
	return (
		<div>
			<h1>Home</h1>
		</div>
	)
}

function NotFound() {
	return (
		<div>
			<h1>NotFound</h1>
		</div>
	)
}

function Projects() {
	return (
		<div>
			<h1>Projects</h1>
		</div>
	)
}

export default SimpleApp
