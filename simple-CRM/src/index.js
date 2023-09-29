import React, { useState, useEffect, useMemo } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { createRoot } from "react-dom/client"
// import { usePagination, DOTS } from "./usePagination"
import Pagination from "./Pagination"
import Home from "./pages/Home"
import AddEdit from "./pages/AddEdit"
import View from "./pages/View"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// Extension from pagination project
// https://www.youtube.com/watch?v=8ly39na3LLM

// from
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// see also
// https://www.youtube.com/watch?v=jmNHcW_oszg

const App = () => {
	return (
		// <Routes>
		// 	<Route path="/" element={<Home />} />
		// </Routes>
		// <Home />
		<div className="o-container">
			<BrowserRouter>
				<ToastContainer position="top-center" />

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/books">Books</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/addContact" element={<AddEdit />} />
					<Route path="/update/:id" element={<AddEdit />} />
					<Route path="/view/:id" element={<View />} />
				</Routes>
			</BrowserRouter>
		</div>
	)

	// return (
	// 	<div className="o-container">
	// 		<BrowserRouter>
	// 			<Routes>
	// 				<Route path="/" element={<Home />} />
	// 			</Routes>
	// 		</BrowserRouter>
	// 	</div>
	// )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
