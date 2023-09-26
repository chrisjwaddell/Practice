import React from "react"
import { createRoot } from "react-dom/client"
import Board from "./Board.js"

// https://www.youtube.com/watch?v=qhOZoJPMg6w
const root = createRoot(document.getElementById("root"))
root.render(
	<div className="o-container">
		<header role="banner">
			<h1 style={{ textAlign: "center" }}>Memory Card Game</h1>
		</header>

		<div className="game-container">
			<Board />
		</div>
	</div>
)
